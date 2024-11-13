import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError
} from 'axios';
import { getApiUrl } from '../env';

const baseURL = getApiUrl();
const axiosInstance: AxiosInstance = axios.create({
	baseURL
});

class HttpError extends Error {
	status?: number;
	data?: unknown;
	isNetworkError?: boolean;

	constructor(
		message: string,
		options?: { status?: number; data?: unknown; isNetworkError?: boolean }
	) {
		super(message);
		this.status = options?.status;
		this.data = options?.data;
		this.isNetworkError = options?.isNetworkError;
	}
}

axiosInstance.interceptors.response.use(
	(response: AxiosResponse): AxiosResponse => response,
	(error: AxiosError): Promise<never> => {
		let customError: HttpError;

		if (error.response) {
			// Server error
			customError = new HttpError(error.response.statusText || 'Server Error', {
				status: error.response.status,
				data: error.response.data
			});
		} else if (error.request) {
			// No response received
			customError = new HttpError(
				'Network Error: Please check your internet connection.',
				{
					isNetworkError: true
				}
			);
		} else {
			// Error setting up the request
			customError = new HttpError(error.message);
		}

		return Promise.reject(customError);
	}
);

const httpService = {
	get<T = unknown>(
		url: string,
		config: AxiosRequestConfig = {}
	): Promise<AxiosResponse<T>> {
		return axiosInstance.get<T>(url, config);
	}
};

export default httpService;
export { HttpError, baseURL };
