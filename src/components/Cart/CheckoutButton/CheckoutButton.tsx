import BaseButton from '../../Button/Button/Button';

const CheckoutButton = () => {
	return (
		<BaseButton
			$fullWidth
			variant="primary"
			onClick={() => alert('Purchased!')}
		>
			Checkout
		</BaseButton>
	);
};

export default CheckoutButton;
