import React from 'react';
import { useCart } from '../../../context/CartContext';
import { H3, H4, Paragraph } from '../../Typography';
import {
	CartItemContainer,
	ProductDetails,
	QuantityButton,
	QuantityControls,
	QuantityDisplay,
	RemoveButton
} from './styles';
import { CartItem as CartItemType } from '../../../types';

export interface ItemProps {
	item: CartItemType;
}

const Item = ({ item }: ItemProps) => {
	const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

	return (
		<CartItemContainer>
			<ProductDetails>
				<H4>{item.name}</H4>
				<Paragraph margin="0">Price: ${item.price.toFixed(2)}</Paragraph>
			</ProductDetails>
			<QuantityControls>
				<QuantityButton
					variant="tertiary"
					size="small"
					onClick={() => decreaseQuantity(item.id)}
				>
					-
				</QuantityButton>
				<QuantityDisplay>{item.quantity}</QuantityDisplay>
				<QuantityButton
					variant="tertiary"
					size="small"
					onClick={() => increaseQuantity(item.id)}
				>
					+
				</QuantityButton>
				<RemoveButton
					variant="secondary"
					size="small"
					onClick={() => removeFromCart(item.id)}
				>
					Remove
				</RemoveButton>
			</QuantityControls>
		</CartItemContainer>
	);
};

export default Item;
