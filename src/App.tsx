import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import ProductList from './pages/ProductList';
import { ProductsProvider } from './context/ProductsContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import { SidebarProvider } from './context/SidebarContext';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import ErrorBoundary from './components/ErrorBoundary';
import { H1 } from './components/Typography';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
	return (
		<ThemeProvider>
			<ErrorBoundary
				fallbackUI={<H1>Oops! Something went wrong. Please try again later</H1>}
			>
				<GlobalStyles />
				<CartProvider>
					<BrowserRouter>
						<SidebarProvider>
							<Header />
							<Cart />
							<ProductsProvider>
								<Routes>
									<Route path="/" element={<ProductList />} />
									<Route path="/products/:id" element={<ProductDetails />} />
								</Routes>
							</ProductsProvider>
						</SidebarProvider>
					</BrowserRouter>
				</CartProvider>
			</ErrorBoundary>
		</ThemeProvider>
	);
};

export default App;
