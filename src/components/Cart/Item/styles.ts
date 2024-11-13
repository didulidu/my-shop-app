import styled from 'styled-components';
import Button from '../../Button/Button/Button';

export const CartItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: ${({ theme }) => theme.spacing.md};
	padding: ${({ theme }) => theme.spacing.sm};
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ProductDetails = styled.div`
	flex: 1;
`;

export const QuantityControls = styled.div`
	display: flex;
	align-items: center;
`;

export const QuantityButton = styled(Button)`
	margin: 0 ${({ theme }) => theme.spacing.xs};
`;

export const RemoveButton = styled(Button)`
	margin-left: ${({ theme }) => theme.spacing.sm};
	background-color: ${({ theme }) => theme.colors.error};
`;

export const QuantityDisplay = styled.span`
	font-size: ${({ theme }) => theme.fontSizes.md};
	margin: 0 ${({ theme }) => theme.spacing.xs};
`;
