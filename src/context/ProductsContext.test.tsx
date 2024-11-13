import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductsProvider, useProducts } from './ProductsContext';
import { act } from '@testing-library/react';
import productsService from '../services/productsService';
import '@testing-library/jest-dom';
import { products } from '../mocks/products';
import { ErrorMessage } from '../components/shared/ErrorMessage';
import { ThemeProvider } from './ThemeContext';

jest.mock('../env', () => ({
	getApiUrl: jest.fn(() => 'http://mocked-api-url.com')
}));

jest.mock('../services/productsService');

const mockedProductsService = productsService as jest.Mocked<
	typeof productsService
>;

const renderProductsProvider = (ui: React.ReactNode) => {
	return render(
		<ThemeProvider>
			<ProductsProvider>{ui}</ProductsProvider>
		</ThemeProvider>
	);
};

describe('ProductsContext', () => {
	beforeEach(() => {
		mockedProductsService.fetchProducts.mockClear();
		localStorage.clear();
	});

	test('should load products successfully', async () => {
		mockedProductsService.fetchProducts.mockResolvedValueOnce(products);

		const TestComponent = () => {
			const { products, loading } = useProducts();
			if (loading) {
				return <div data-testid="loading-state">Loading</div>;
			}
			return (
				<div>
					<div data-testid="products-length">{products.length}</div>
				</div>
			);
		};

		await act(async () => {
			renderProductsProvider(<TestComponent />);
		});

		expect(screen.getByTestId('products-length')).toHaveTextContent('10');
	});

	test('should handle error state', async () => {
		mockedProductsService.fetchProducts.mockRejectedValueOnce({ status: 404 });

		const TestComponent = () => {
			const { error } = useProducts();
			return <ErrorMessage data-testid="error-state">{error}</ErrorMessage>;
		};

		await act(async () => {
			renderProductsProvider(<TestComponent />);
		});

		expect(screen.getByTestId('error-state')).toHaveTextContent(
			'Products not found (404)'
		);
	});

	test('should get a single product by id', async () => {
		mockedProductsService.fetchProducts.mockResolvedValueOnce(products);

		const TestComponent = ({ productId }: { productId: number }) => {
			const { getSingleProduct, loading } = useProducts();
			if (loading) {
				return <div data-testid="loading-state">Loading</div>;
			}
			const product = getSingleProduct(productId);
			return (
				<div data-testid="product-name">
					{product?.name || 'Product not found'}
				</div>
			);
		};

		await act(async () => {
			renderProductsProvider(<TestComponent productId={1} />);
		});

		expect(screen.getByTestId('product-name')).toHaveTextContent(
			'Wireless Mouse'
		);
	});
});
