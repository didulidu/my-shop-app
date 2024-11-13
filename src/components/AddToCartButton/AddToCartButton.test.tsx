import React, { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartContext } from '../../context/CartContext';
import AddToCartButton from './AddToCartButton';
import { Product } from '../../types';
import toastr from 'toastr';
import { products } from '../../mocks/products';
import { ThemeProvider } from '../../context/ThemeContext';

jest.mock('toastr', () => ({
	success: jest.fn()
}));

const mockAddToCart = jest.fn();
const MockCartProvider = ({ children }: { children: ReactNode }) => {
	const value = {
		addToCart: mockAddToCart,
		dispatch: jest.fn(),
		removeFromCart: jest.fn(),
		increaseQuantity: jest.fn(),
		decreaseQuantity: jest.fn(),
		totalPrice: 0,
		totalCount: 0,
		state: { items: [] }
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

describe('AddToCartButton', () => {
	const mockProduct: Product = products[0];

	beforeEach(() => {
		jest.clearAllMocks();
	});

	const renderComponent = () =>
		render(
			<MockCartProvider>
				<ThemeProvider>
					<AddToCartButton product={mockProduct} />
				</ThemeProvider>
			</MockCartProvider>
		);

	test('renders the button with correct text', () => {
		renderComponent();
		const button = screen.getByRole('button', { name: /add to cart/i });
		expect(button).toBeInTheDocument();
	});

	test('clicking the button adds the product to the cart and shows toastr message', () => {
		renderComponent();
		const button = screen.getByRole('button', { name: 'Add to Cart' });
		fireEvent.click(button);

		expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
		expect(toastr.success).toHaveBeenCalledWith('Added to cart! 🎉');
	});
});
