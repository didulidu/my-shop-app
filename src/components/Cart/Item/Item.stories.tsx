import type { Meta, StoryObj } from '@storybook/react';
import Item from './Item';
import type { ItemProps } from './Item';
import { action } from '@storybook/addon-actions';
import { CartContext } from '../../../context/CartContext';

const meta: Meta<ItemProps> = {
	title: 'Components/CartItem',
	component: Item,
	decorators: [
		(Story) => {
			const mockCartContext = {
				increaseQuantity: action('increase quantity'),
				decreaseQuantity: action('decrease quantity'),
				removeFromCart: action('remove from cart'),
				state: { items: [] },
				dispatch: action('dispatch action'),
				addToCart: action('add to cart'),
				totalPrice: 0
			};

			return (
				<CartContext.Provider value={mockCartContext}>
					<Story />
				</CartContext.Provider>
			);
		}
	],
	argTypes: {
		item: {
			control: 'object',
			defaultValue: {
				id: 1,
				name: 'Sample Product',
				price: 29.99,
				quantity: 1,
				description: 'This is a sample product for testing purposes.',
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

type Story = StoryObj<ItemProps>;

export const Default: Story = {
	args: {
		item: {
			id: 1,
			name: 'Sample Product',
			price: 29.99,
			quantity: 1,
			description: 'This is a sample product for testing purposes.',
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
