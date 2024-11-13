import React from 'react';
import { Product } from '../../types';
import { useNavigate } from 'react-router-dom';
import { Description, Name, Price, Card } from './styles';
import AddToCartButton from '../AddToCartButton';
import { Tooltip } from 'react-tooltip';

export interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const navigate = useNavigate();

	const handleProductClick = () => {
		navigate(`/products/${product.id}`);
	};

	return (
		<Card onClick={handleProductClick}>
			<Name>{product.name}</Name>
			<Price>${product.price.toFixed(2)}</Price>
			<Tooltip place="bottom">
				<Description>{product.description}</Description>
			</Tooltip>
			<AddToCartButton product={product} />
		</Card>
	);
};

export default ProductCard;
