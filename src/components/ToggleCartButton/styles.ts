import styled from 'styled-components';
import { CartOutline } from 'react-ionicons';
import ButtonWithIcon from '../Button/ButtonWithIcon/ButtonWithIcon';

export const StyledButton = styled(ButtonWithIcon)`
	background: none;
	border: none;
	cursor: pointer;
	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) => props.theme.colors.success};
	padding: ${(props) => props.theme.spacing.sm};
	margin-right: ${(props) => props.theme.spacing.md};
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	&:hover {
		color: ${(props) => props.theme.colors.hover};
	}
`;

export const StyledCartIcon = styled(CartOutline).attrs((props) => ({
	color: props.theme.colors.text
}))`
	height: 25px;
	width: 25px;
`;

export const StyledCountBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  padding: 2px;
  min-width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;