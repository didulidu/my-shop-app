import React from 'react';
import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { products } from '../../mocks/products';
import { useProducts } from '../../context/ProductsContext';
import { ThemeProvider } from '../../context/ThemeContext';

jest.mock('react-router-dom', () => ({
	useParams: jest.fn()
}));

jest.mock('../../context/CartContext', () => ({
	useCart: () => ({ addToCart: jest.fn() })
}));

jest.mock('../../context/ProductsContext', () => ({
	useProducts: jest.fn()
}));

const mockUseProducts = useProducts as jest.MockedFunction<typeof useProducts>;
const mockUseParams = useParams as jest.MockedFunction<typeof useParams>;

const renderProductDetails = () => {
	render(
		<ThemeProvider>
			<ProductDetails />
		</ThemeProvider>
	);
};
describe('ProductDetails Component', () => {
	const mockProduct = products[0];

	it('displays loader when loading', () => {
		mockUseParams.mockReturnValue({ id: '1' });
		mockUseProducts.mockReturnValue({
			getSingleProduct: jest.fn(),
			loading: true,
			products: [],
			error: ''
		});
		renderProductDetails();
		expect(screen.getByTestId('loader')).toBeInTheDocument();
	});

	it('displays error message when product ID is missing', () => {
		mockUseParams.mockReturnValue({});
		renderProductDetails();
		expect(
			screen.getByText('Product ID is missing or invalid.')
		).toBeInTheDocument();
	});

	it('displays error message when product not found', () => {
		mockUseParams.mockReturnValue({ id: '1' });
		mockUseProducts.mockReturnValue({
			getSingleProduct: jest.fn().mockReturnValue(null),
			loading: false,
			error: '',
			products: products
		});
		renderProductDetails();
		expect(screen.getByText('Product not found.')).toBeInTheDocument();
	});

	it('displays product details when product is found', () => {
		mockUseParams.mockReturnValue({ id: '1' });
		mockUseProducts.mockReturnValue({
			getSingleProduct: jest.fn().mockReturnValue(mockProduct),
			loading: false,
			error: '',
			products
		});
		renderProductDetails();
		// Basic product information
		expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
		expect(screen.getByText('$20.00')).toBeInTheDocument();
		expect(
			screen.getByText(/The Wireless Mouse is designed /)
		).toBeInTheDocument();

		// Features
		mockProduct.features.forEach((feature) => {
			expect(screen.getByText(feature)).toBeInTheDocument();
		});

		// Specifications
		Object.entries(mockProduct.specifications).forEach(([key, value]) => {
			expect(screen.getByText(key)).toBeInTheDocument();
			if (Array.isArray(value)) {
				expect(screen.getByText(value.join(', '))).toBeInTheDocument();
			} else {
				expect(screen.getByText(value)).toBeInTheDocument();
			}
		});

		// Additional Information
		Object.entries(mockProduct.additionalInformation).forEach(
			([key, value]) => {
				expect(screen.getByText(key)).toBeInTheDocument();
				if (Array.isArray(value)) {
					expect(screen.getByText(value.join(', '))).toBeInTheDocument();
				} else {
					expect(screen.getByText(value)).toBeInTheDocument();
				}
			}
		);
	});
});
