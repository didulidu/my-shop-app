import { MouseEvent } from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../Button/Button';
import { Product } from '../../types';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

export interface AddToCartButtonProps {
	product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
	const { addToCart } = useCart();

	const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		addToCart(product);
		toastr.success('Added to cart! 🎉');
	};

	return (
		<>
			<Button variant="primary" onClick={handleAddToCart}>
				Add to Cart
			</Button>
		</>
	);
};

export default AddToCartButton;
