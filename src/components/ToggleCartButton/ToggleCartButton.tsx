import { StyledButton, StyledCartIcon, StyledCountBadge } from './styles';
import { useSidebar } from '../../context/SidebarContext';
import { useCart } from '../../context/CartContext';

const ToggleCartButton = () => {
	const { toggleSidebar } = useSidebar();
	const { totalCount } = useCart();

	return (
		<StyledButton
			onClick={() => toggleSidebar()}
			icon={<StyledCartIcon />}
			size="large"
		>
			{totalCount > 0 && <StyledCountBadge>{totalCount}</StyledCountBadge>}
		</StyledButton>
	);
};

export default ToggleCartButton;
