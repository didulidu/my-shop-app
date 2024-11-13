import { Link } from 'react-router-dom';
import { HeaderContainer, StyledLogoImage } from './styles';
import ThemeButton from '../ThemeButton';
import ToggleCartButton from '../ToggleCartButton';
import logo from '../../assets/logo.png';

const Header = () => {
	return (
		<HeaderContainer>
			<Link to="/">
				<StyledLogoImage src={logo} alt="Shop App Logo" height="50px" />
			</Link>
			<div style={{ display: 'flex' }}>
				<ToggleCartButton />
				<ThemeButton />
			</div>
		</HeaderContainer>
	);
};

export default Header;
