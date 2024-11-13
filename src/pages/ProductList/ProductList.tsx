import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useProducts } from '../../context/ProductsContext';
import Loader from '../../components/Loader';
import { ProductListContainer, ProductsGrid } from './styles';
import { LoaderContainer } from '../../components/Loader/styles';
import { ErrorMessage } from '../../components/shared/ErrorMessage';

const ProductList = () => {
	const { products, loading, error } = useProducts();

	if (loading) {
		return (
			<LoaderContainer>
				<Loader />
			</LoaderContainer>
		);
	}

	if (error) {
		return (
			<ProductListContainer>
				<ErrorMessage>{error}</ErrorMessage>
			</ProductListContainer>
		);
	}

	return (
		<ProductListContainer>
			<ProductsGrid>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</ProductsGrid>
		</ProductListContainer>
	);
};

export default ProductList;
