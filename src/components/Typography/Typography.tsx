import styled, { css } from 'styled-components';

interface TypographyProps {
	color?: string;
	align?: 'left' | 'center' | 'right' | 'justify';
	margin?: string;
}

// Shared styles for typography components
const baseStyles = css<TypographyProps>`
	color: ${({ color, theme }) => color || theme.colors.text};
	text-align: ${({ align }) => align || 'left'};
	margin: ${({ margin }) => margin || '0'};
	font-family: ${({ theme }) => theme.fonts.body};
`;

export const H1 = styled.h1<TypographyProps>`
	${baseStyles}
	font-size: ${({ theme }) => theme.fontSizes.xxl};
	font-weight: 700;
`;

export const H2 = styled.h2<TypographyProps>`
	${baseStyles}
	font-size: ${({ theme }) => theme.fontSizes.xl};
	font-weight: 700;
`;

export const H3 = styled.h3<TypographyProps>`
	${baseStyles}
	font-size: ${({ theme }) => theme.fontSizes.lg};
	font-weight: 700;
`;

export const H4 = styled.h4<TypographyProps>`
	${baseStyles}
	font-size: ${({ theme }) => theme.fontSizes.md};
	font-weight: 600;
`;

export const H5 = styled.h5<TypographyProps>`
	${baseStyles}
	font-size: ${({ theme }) => theme.fontSizes.sm};
	font-weight: 600;
`;

export const H6 = styled.h6<TypographyProps>`
	${baseStyles}
	font-size: ${({ theme }) => theme.fontSizes.xs};
	font-weight: 600;
`;

export const Paragraph = styled.p<TypographyProps>`
	${baseStyles}
	font-size: ${({ theme }) => theme.fontSizes.md};
	line-height: 1.6;
`;

export const Small = styled.small<TypographyProps>`
	${baseStyles}
	font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Bold = styled.span<TypographyProps>`
	${baseStyles}
	font-weight: bold;
`;

export const Italic = styled.span<TypographyProps>`
	${baseStyles}
	font-style: italic;
`;

export const Link = styled.a<TypographyProps>`
	${baseStyles}
	color: ${({ theme }) => theme.colors.primary};
	text-decoration: none;

	&:hover {
		text-decoration: underline;
		color: ${({ theme }) => theme.colors.hover};
	}
`;
