import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageWrapper from '../layout/AppLayout';
import Home from '../pages/home/Home';
import Category from '../pages/category/Category';
import Product from '../pages/product/Product';
import Checkout from '../pages/checkout/Checkout';
import Error from '../pages/Error';

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
