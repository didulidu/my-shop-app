import { StyledMoonIcon, StyledSunIcon } from './styles';
import ButtonWithIcon from '../Button/ButtonWithIcon/ButtonWithIcon';
import { useTheme } from '../../context/ThemeContext';

const ThemeButton = () => {
	const { toggleTheme, theme } = useTheme();

	const ThemeIcon = theme === 'light' ? StyledSunIcon : StyledMoonIcon;

	return (
		<ButtonWithIcon
			icon={<ThemeIcon width={'25px'} height={'25px'} />}
			onClick={toggleTheme}
		/>
	);
};

export default ThemeButton;
