import Button from '../Button/Button';
import { IconWrapper } from '../styles';
import { ButtonWithIconProps } from '../types';

const ButtonWithIcon = ({
	icon,
	$iconPosition = 'left',
	children,
	...props
}: ButtonWithIconProps) => {
	return (
		<Button {...props}>
			{$iconPosition === 'left' && (
				<IconWrapper $iconPosition={$iconPosition}>{icon}</IconWrapper>
			)}
			{children}
			{$iconPosition === 'right' && (
				<IconWrapper $iconPosition={$iconPosition}>{icon}</IconWrapper>
			)}
		</Button>
	);
};

export default ButtonWithIcon;
