import styled, { css } from 'styled-components';
import { ButtonProps, IconWrapperProps } from './types';

export const IconWrapper = styled.span<IconWrapperProps>`
	display: inline-flex;
	align-items: center;
	margin: ${({ $iconPosition, theme }) =>
		$iconPosition === 'left'
			? `0 ${theme.spacing.xs} 0 0`
			: `0 0 0 ${theme.spacing.xs}`};
`;

export const baseButtonStyles = css<ButtonProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin: ${({ margin }) => margin || '0'};
	border-radius: ${({ theme }) => theme.borderRadius.md};
	font-family: ${({ theme }) => theme.fonts.body};
	cursor: pointer;
	text-decoration: none;
	transition:
		background-color 0.3s ease,
		color 0.3s ease;
	border: none;
	outline: none;

	${({ $fullWidth }) =>
		$fullWidth &&
		css`
			width: 100%;
		`}

	${({ disabled }) =>
		disabled &&
		css`
			cursor: not-allowed;
			opacity: 0.6;
		`}
`;

export const variantStyles = {
	primary: css`
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.text};

		&:hover {
			background-color: ${({ theme }) => theme.colors.hover};
		}
	`,
	secondary: css`
		background-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.text};

		&:hover {
			background-color: ${({ theme }) => theme.colors.hover};
		}
	`,
	tertiary: css`
		background-color: transparent;
		color: ${({ theme }) => theme.colors.primary};
		border: 1px solid ${({ theme }) => theme.colors.primary};

		&:hover {
			background-color: ${({ theme }) => theme.colors.hover};
			color: ${({ theme }) => theme.colors.text};
		}
	`
};

export const sizeStyles = {
	small: css`
		padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
		font-size: ${({ theme }) => theme.fontSizes.sm};
	`,
	medium: css`
		padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
		font-size: ${({ theme }) => theme.fontSizes.md};
	`,
	large: css`
		padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
		font-size: ${({ theme }) => theme.fontSizes.lg};
	`
};
