import styled from 'styled-components';

export const LoaderContainer = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export const ProductListContainer = styled.main`
	padding: ${({ theme }) => theme.spacing.lg};
	background-color: ${({ theme }) => theme.colors.background};
`;

export const ProductsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 1.5rem;
`;
