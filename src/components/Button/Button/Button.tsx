import styled from 'styled-components';
import { ButtonProps } from '../types';
import { baseButtonStyles, sizeStyles, variantStyles } from '../styles';

const Button = styled.button<ButtonProps>`
	${baseButtonStyles}
	${({ variant = 'primary' }) => variantStyles[variant]}
  ${({ size = 'medium' }) => sizeStyles[size]}
`;

export default Button;
