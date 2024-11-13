import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import { products } from '../../../mocks/products';
import { ThemeProvider } from '../../../context/ThemeContext';

jest.mock('../../../context/CartContext', () => ({
	useCart: () => ({
		state: { items: [products[0]] },
		totalPrice: 20
	})
}));

jest.mock('../../../context/SidebarContext', () => ({
	useSidebar: () => ({
		isSidebarOpen: true,
		toggleSidebar: jest.fn()
	})
}));

describe('Cart Component', () => {
	test('renders with items and shows total price', () => {
		render(
			<ThemeProvider>
				<Cart />
			</ThemeProvider>
		);
		expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
		expect(screen.getByText(/20\.00\$/)).toBeInTheDocument();
		expect(screen.getByText('Checkout')).toBeInTheDocument();
	});
});
