import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';
import { Product } from '../types';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { products } from '../mocks/products';

const renderCartProvider = (ui: React.ReactNode) => {
	return render(<CartProvider>{ui}</CartProvider>);
};

describe('CartContext', () => {
	beforeEach(() => {
		localStorage.clear();
	});
	test('should initialize with empty cart', () => {
		const TestComponent = () => {
			const { state } = useCart();
			return <div data-testid="cart-length">{state.items.length}</div>;
		};

		renderCartProvider(<TestComponent />);
		expect(screen.getByTestId('cart-length')).toHaveTextContent('0');
	});

	test('should add a product to the cart', () => {
		const product: Product = products[0];

		const TestComponent = () => {
			const { state, addToCart } = useCart();
			return (
				<div>
					<button onClick={() => addToCart(product)}>Add to Cart</button>
					<div data-testid="cart-length">{state.items.length}</div>
				</div>
			);
		};

		renderCartProvider(<TestComponent />);
		act(() => {
			screen.getByText('Add to Cart').click();
		});
		expect(screen.getByTestId('cart-length')).toHaveTextContent('1');
	});

	test('should increase product quantity in the cart', () => {
		const product: Product = products[0];

		const TestComponent = () => {
			const { state, addToCart, increaseQuantity } = useCart();

			return (
				<div>
					<button onClick={() => addToCart(product)}>Add to Cart</button>
					<button onClick={() => increaseQuantity(product.id)}>
						Increase Quantity
					</button>
					<div data-testid="cart-quantity">
						{state.items.find((item) => item.id === product.id)?.quantity || 0}
					</div>
				</div>
			);
		};

		renderCartProvider(<TestComponent />);
		act(() => {
			screen.getByText('Add to Cart').click();
			screen.getByText('Increase Quantity').click();
		});
		expect(screen.getByTestId('cart-quantity')).toHaveTextContent('2');
	});

	test('should remove a product from the cart', () => {
		const product: Product = products[0];

		const TestComponent = () => {
			const { state, addToCart, removeFromCart } = useCart();
			return (
				<div>
					<button onClick={() => addToCart(product)}>Add to Cart</button>
					<button onClick={() => removeFromCart(product.id)}>
						Remove from Cart
					</button>
					<div data-testid="cart-length">{state.items.length}</div>
				</div>
			);
		};

		renderCartProvider(<TestComponent />);
		act(() => {
			screen.getByText('Add to Cart').click();
			screen.getByText('Remove from Cart').click();
		});
		expect(screen.getByTestId('cart-length')).toHaveTextContent('0');
	});

	test('should calculate total price correctly', () => {
		const product1: Product = products[0];
		const product2: Product = products[1];

		const TestComponent = () => {
			const { addToCart, totalPrice } = useCart();
			return (
				<div>
					<button onClick={() => addToCart(product1)}>Add Product 1</button>
					<button onClick={() => addToCart(product2)}>Add Product 2</button>
					<div data-testid="total-price">{totalPrice}</div>
				</div>
			);
		};

		renderCartProvider(<TestComponent />);
		act(() => {
			screen.getByText('Add Product 1').click();
			screen.getByText('Add Product 2').click();
		});
		expect(screen.getByTestId('total-price')).toHaveTextContent('100');
	});
});
