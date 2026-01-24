import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/page-wrapper/PageWrapper';
import Error from './pages/Error';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<PageWrapper />} errorElement={<Error />}>
					<Route errorElement={<Error />}>
						<Route index={true} element={<Home />} />
						<Route path="/category/:category" element={<Category />} />
						<Route path="/product/:slug" element={<Product />} />
						<Route path="/checkout" element={<Checkout />} />
					</Route>
				</Route>
			</Routes>
		</Router>
	);
}
