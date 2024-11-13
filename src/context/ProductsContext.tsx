import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode
} from 'react';
import { Product } from '../types';
import productsService from '../services/productsService';
import { HttpError } from '../services/httpService';

export interface ProductsContextType {
	products: Product[];
	loading: boolean;
	error: string | null;
	getSingleProduct: (id: number) => Product | null;
}

const ProductsContext = createContext<ProductsContextType>({
	products: [],
	loading: true,
	error: null,
	getSingleProduct: () => null
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	/**
	 * Since we don't have an API for a single product, all products are fetching within useEffect
	 * and wrapped ProductProvider around single product page, initiating fetching
	 * of all products when visiting a single product.
	 */
	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			try {
				const data = await productsService.fetchProducts();
				setProducts(data);
				setError(null);
			} catch (err: any) {
				if (err.status === 404) {
					setError('Products not found (404)');
				} else if (err.isNetworkError) {
					setError('Network error: Please check your internet connection');
				} else {
					setError('Failed to load products. Please try again later');
				}
			} finally {
				setLoading(false);
			}
		};

		getProducts();
	}, []);

	const getSingleProduct = (id: number) => {
		if (error) {
			return null;
		}
		return products.find((product) => product.id === id) || null;
	};

	return (
		<ProductsContext.Provider
			value={{ products, loading, error, getSingleProduct }}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export const useProducts = () => useContext(ProductsContext);
