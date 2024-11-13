import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';
import type { ProductCardProps } from './ProductCard';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../../context/CartContext';

const meta: Meta<ProductCardProps> = {
	title: 'Components/ProductCard',
	component: ProductCard,
	decorators: [
		(Story) => (
			<BrowserRouter>
				<CartProvider>
					<Story />
				</CartProvider>
			</BrowserRouter>
		)
	],
	argTypes: {
		product: {
			control: 'object',
			defaultValue: {
				id: 1,
				name: 'Sample Product',
				price: 49.99,
				description: 'This is a sample product description.',
				features: ['Feature 1', 'Feature 2'],
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
					'In the Box': ['Product', 'Charger', 'User Manual']
				}
			}
		}
	}
};

export default meta;

type Story = StoryObj<ProductCardProps>;

export const Default: Story = {
	args: {
		product: {
			id: 1,
			name: 'Sample Product',
			price: 49.99,
			description: 'This is a sample product description.',
			features: ['Feature 1', 'Feature 2'],
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
				'In the Box': ['Product', 'Charger', 'User Manual']
			}
		}
	}
};
