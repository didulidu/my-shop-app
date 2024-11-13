import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'tertiary';
	size?: 'small' | 'medium' | 'large';
	children?: ReactNode;
	$fullWidth?: boolean;
	disabled?: boolean;
	margin?: string;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
	type?: 'button' | 'submit' | 'reset';
}

export interface IconWrapperProps {
	$iconPosition: 'left' | 'right';
}

export interface ButtonWithIconProps extends ButtonProps {
	icon: React.ReactNode;
	$iconPosition?: 'left' | 'right';
}
