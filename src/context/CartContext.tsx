import {
	createContext,
	useContext,
	useReducer,
	ReactNode,
	useEffect,
	Dispatch,
	useMemo
} from 'react';
import { CartItem, Product } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';

interface CartState {
	items: CartItem[];
}

type CartAction =
	| { type: 'INITIALIZE_CART'; items: CartItem[] }
	| { type: 'ADD_TO_CART'; product: Product }
	| { type: 'REMOVE_FROM_CART'; productId: number }
	| { type: 'INCREASE_QUANTITY'; productId: number }
	| { type: 'DECREASE_QUANTITY'; productId: number };

export const CartContext = createContext<{
	state: CartState;
	dispatch: Dispatch<CartAction>;
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
	increaseQuantity: (productId: number) => void;
	decreaseQuantity: (productId: number) => void;
	totalPrice: number;
	totalCount: number;
}>({
	state: { items: [] },
	dispatch: () => null,
	addToCart: () => null,
	removeFromCart: () => null,
	increaseQuantity: () => null,
	decreaseQuantity: () => null,
	totalPrice: 0,
	totalCount: 0
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
	switch (action.type) {
		case 'INITIALIZE_CART':
			return {
				...state,
				items: action.items
			};
		case 'ADD_TO_CART': {
			const existingItem = state.items.find(
				(item) => item.id === action.product.id
			);
			if (existingItem) {
				return {
					...state,
					items: state.items.map((item) =>
						item.id === action.product.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					)
				};
			} else {
				return {
					...state,
					items: [...state.items, { ...action.product, quantity: 1 }]
				};
			}
		}
		case 'REMOVE_FROM_CART':
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.productId)
			};
		case 'INCREASE_QUANTITY':
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.productId
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			};
		case 'DECREASE_QUANTITY':
			return {
				...state,
				items: state.items
					.map((item) =>
						item.id === action.productId
							? { ...item, quantity: item.quantity - 1 }
							: item
					)
					.filter((item) => item.quantity > 0)
			};
		default:
			return state;
	}
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [persistedCartItems, setPersistedCartItems] = useLocalStorage<
		CartItem[]
	>('cartItems', []);

	const [state, dispatch] = useReducer(cartReducer, { items: [] });

	useEffect(() => {
		dispatch({ type: 'INITIALIZE_CART', items: persistedCartItems });
	}, []);

	useEffect(() => {
		setPersistedCartItems(state.items);
	}, [state.items, setPersistedCartItems]);

	const addToCart = (product: Product) => {
		dispatch({ type: 'ADD_TO_CART', product });
	};

	const removeFromCart = (productId: number) => {
		dispatch({ type: 'REMOVE_FROM_CART', productId });
	};

	const increaseQuantity = (productId: number) => {
		dispatch({ type: 'INCREASE_QUANTITY', productId });
	};

	const decreaseQuantity = (productId: number) => {
		dispatch({ type: 'DECREASE_QUANTITY', productId });
	};

	const totalPrice = useMemo(
		() =>
			state.items.reduce((totalPrice, item) => {
				return totalPrice + item.price * item.quantity;
			}, 0),
		[state.items]
	);

	const totalCount = useMemo(() => {
		return state.items.reduce((totalCount, item) => {
			return totalCount + item.quantity;
		}, 0);
	}, [state.items]);

	return (
		<CartContext.Provider
			value={{
				state,
				dispatch,
				addToCart,
				removeFromCart,
				increaseQuantity,
				decreaseQuantity,
				totalPrice,
				totalCount
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
