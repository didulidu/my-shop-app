import styled from 'styled-components';
import { Paragraph } from '../Typography';

export const ErrorMessage = styled(Paragraph)`
	text-align: center;
	font-size: ${({ theme }) => theme.fontSizes.lg};
	color: ${({ theme }) => theme.colors.error || 'red'};
`;
