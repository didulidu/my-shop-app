import { useCart } from '../../../context/CartContext';
import { useSidebar } from '../../../context/SidebarContext';
import Sidebar from '../../Sidebar';
import CheckoutButton from '../CheckoutButton';
import Item from '../Item/Item';
import { Bold, Paragraph } from '../../Typography';

const Cart = () => {
	const { isSidebarOpen, toggleSidebar } = useSidebar();
	const { state, totalPrice } = useCart();

	return (
		<Sidebar
			show={isSidebarOpen}
			title="Cart"
			onClose={() => toggleSidebar(false)}
			footer={
				<>
					<Paragraph>
						Total price: <Bold>{totalPrice.toFixed(2)}$</Bold>
					</Paragraph>
					<CheckoutButton />
				</>
			}
		>
			{state.items.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</Sidebar>
	);
};

export default Cart;
