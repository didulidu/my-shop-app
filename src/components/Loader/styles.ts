import { Pizza } from 'react-ionicons';
import styled from 'styled-components';

export const StyledPizzaIcon = styled(Pizza).attrs((props) => ({
	color: props.theme.colors.primary
}))``;

export const LoaderContainer = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
`;
