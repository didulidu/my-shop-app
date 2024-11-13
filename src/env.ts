// Vite has some issues with import.meta I could not resolve, therefore I needed to create this file
export const getApiUrl = () => {
	return typeof import.meta !== 'undefined' && import.meta.env.VITE_API_URL
		? import.meta.env.VITE_API_URL
		: 'http://localhost:3000';
};
