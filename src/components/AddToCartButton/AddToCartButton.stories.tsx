import type { Meta, StoryObj } from '@storybook/react';
import AddToCartButton, { AddToCartButtonProps } from './AddToCartButton';
import { Product } from '../../types';
import { createContext } from 'react';

const CartContextMock = createContext({
	addToCart: () => {}
});

const sampleProduct = {
	id: 1,
	name: 'Wireless Mouse',
	price: 49.99,
	description: 'A high-quality wireless mouse with ergonomic design.',
	features: [
		'Ergonomic design',
		'Rechargeable battery',
		'Multiple DPI settings'
	],
	specifications: {
		DPI: 1600,
		'Connection Type': 'Bluetooth 5.0',
		'Operating Range': '10 meters',
		Battery: 'Rechargeable Lithium-Ion',
		Dimensions: '10 x 6 x 4 cm',
		Weight: '90g',
		Compatibility: ['Windows', 'MacOS', 'Linux']
	},
	additionalInformation: {
		Warranty: '1-year limited warranty',
		'In the Box': ['Wireless Mouse', 'USB-C Charging Cable', 'User Manual']
	}
};

const meta: Meta<{ product: Product }> = {
	title: 'Components/AddToCartButton',
	component: AddToCartButton,
	decorators: [
		(Story) => {
			const mockCartContext = {
				addToCart: () => {}
			};

			return (
				<CartContextMock.Provider value={mockCartContext}>
					<Story />
				</CartContextMock.Provider>
			);
		}
	],
	argTypes: {
		product: {
			control: 'object',
			defaultValue: sampleProduct
		}
	}
};

export default meta;

type Story = StoryObj<AddToCartButtonProps>;

export const Default: Story = {
	args: {
		product: sampleProduct
	}
};
