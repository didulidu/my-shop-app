import styled from 'styled-components';
import { H3, Paragraph } from '../Typography';

export const Name = styled(H3)`
	margin: 1rem 0 0.5rem;
`;

export const Price = styled(Paragraph)`
	font-size: 1.1rem;
	color: ${({ theme }) => theme.colors.primary};
	margin-bottom: 1rem;
`;

export const Card = styled.div`
	background-color: ${({ theme }) => theme.colors.cardBackground};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: ${({ theme }) => theme.borderRadius.lg};
	padding: ${({ theme }) => theme.spacing.md};
	box-shadow: ${({ theme }) => theme.shadows.sm};
	color: ${({ theme }) => theme.colors.text};

	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.md};
	}
`;

export const Description = styled(Paragraph)`
	font-size: 1.1rem;
	margin-bottom: 1rem;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
`;
