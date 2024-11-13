import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import {
	AdditionalInfo,
	Container,
	FeatureItem,
	FeaturesList,
	InfoKey,
	InfoValue,
	ProductDescription,
	ProductName,
	ProductPrice,
	Section,
	SpecKey,
	SpecValue,
	SpecificationsTable
} from './styles';
import Loader from '../../components/Loader';
import { ErrorMessage } from '../../components/shared/ErrorMessage';
import { LoaderContainer } from '../../components/Loader/styles';
import { H2 } from '../../components/Typography';
import AddToCartButton from '../../components/AddToCartButton';

const ProductDetails = () => {
	const { id } = useParams<{ id?: string }>();

	const { getSingleProduct, loading } = useProducts();

	const product = useMemo(() => {
		if (!id) return null;
		return getSingleProduct(parseInt(id));
	}, [getSingleProduct, id]);

	if (!id) {
		return <ErrorMessage>Product ID is missing or invalid.</ErrorMessage>;
	}

	if (loading) {
		return (
			<LoaderContainer>
				<Loader />
			</LoaderContainer>
		);
	}

	if (!product) {
		return <ErrorMessage>Product not found.</ErrorMessage>;
	}

	return (
		<Container>
			<ProductName>{product.name}</ProductName>
			<ProductPrice>${product.price.toFixed(2)}</ProductPrice>
			<ProductDescription>{product.description}</ProductDescription>
			<AddToCartButton product={product} />

			<Section>
				<H2>Features</H2>
				<FeaturesList>
					{product.features.map((feature, index) => (
						<FeatureItem key={index}>{feature}</FeatureItem>
					))}
				</FeaturesList>
			</Section>

			<Section>
				<H2>Specifications</H2>
				<SpecificationsTable>
					<tbody>
						{Object.entries(product.specifications).map(
							([key, value], index) => (
								<tr key={index}>
									<SpecKey>{key}</SpecKey>
									<SpecValue>
										{Array.isArray(value) ? value.join(', ') : value}
									</SpecValue>
								</tr>
							)
						)}
					</tbody>
				</SpecificationsTable>
			</Section>

			<Section>
				<H2>Additional Information</H2>
				<AdditionalInfo>
					{Object.entries(product.additionalInformation).map(
						([key, value], index) => (
							<div key={index}>
								<InfoKey>{key}</InfoKey>
								<InfoValue>
									{Array.isArray(value) ? value.join(', ') : value}
								</InfoValue>
							</div>
						)
					)}
				</AdditionalInfo>
			</Section>
		</Container>
	);
};

export default ProductDetails;
