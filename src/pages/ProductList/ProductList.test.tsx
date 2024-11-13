import { render, screen } from '@testing-library/react';

import ProductList from './ProductList';
import { useProducts } from '../../context/ProductsContext';

import { Product } from '../../types';
import { products } from '../../mocks/products';
import { ThemeProvider } from '../../context/ThemeContext';

jest.mock('../../context/ProductsContext', () => ({
	useProducts: jest.fn()
}));

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => jest.fn()
}));

const mockUseProducts = useProducts as jest.MockedFunction<typeof useProducts>;

const renderProductList = () => {
	render(
		<ThemeProvider>
			<ProductList />
		</ThemeProvider>
	);
};

describe('ProductList Component', () => {
	test('displays the loader while data is loading', () => {
		mockUseProducts.mockReturnValue({
			products: [],
			loading: true,
			error: null,
			getSingleProduct: function (): Product | null {
				return null;
			}
		});

		renderProductList();

		const loaderElement = screen.getByTitle('loader');
		expect(loaderElement).toBeInTheDocument();
	});

	test('displays an error message when there is an error', () => {
		const errorMessage = 'Failed to fetch products';
		mockUseProducts.mockReturnValue({
			products: [],
			loading: false,
			error: errorMessage,
			getSingleProduct: function (): Product | null {
				return null;
			}
		});

		renderProductList();

		expect(screen.getByText(errorMessage)).toBeInTheDocument();
	});

	test('displays product cards when data is loaded', () => {
		mockUseProducts.mockReturnValue({
			products,
			loading: false,
			error: null,
			getSingleProduct: function (): Product | null {
				return null;
			}
		});

		renderProductList();

		products.forEach((product) => {
			expect(screen.getByText(product.name)).toBeInTheDocument();
		});
	});
});
