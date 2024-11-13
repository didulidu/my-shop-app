import httpService, { HttpError } from './httpService';
import { Product } from '../types';

const endpoint = '/products';

const productsService = {
	async fetchProducts(): Promise<Product[]> {
		try {
			const response = await httpService.get<Product[]>(endpoint);
			return response.data;
		} catch (error) {
			if (error instanceof HttpError) {
				// typescript support
				if (error.status === 404) {
					throw error;
				} else if (error.isNetworkError) {
					throw new Error(
						'Network error: Please check your internet connection.'
					);
				} else {
					throw error;
				}
			} else {
				throw error;
			}
		}
	}
};

export default productsService;
