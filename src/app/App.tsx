import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import AppLayout from '../layout/AppLayout';
import LoadingPage from '../pages/Loading';

const Home = lazy(() => import('../pages/home/Home'));
const Category = lazy(() => import('../pages/category/Category'));
const Product = lazy(() => import('../pages/product/Product'));
const Checkout = lazy(() => import('../pages/checkout/Checkout'));
const Error = lazy(() => import('../pages/Error'));

export default function App() {
	return (
		<Router>
			<Suspense fallback={<LoadingPage message="Loading page..." />}>
				<Routes>
					<Route path="/" element={<AppLayout />} errorElement={<Error />}>
						<Route errorElement={<Error />}>
							<Route index element={<Home />} />
							<Route path="/category/:category" element={<Category />} />
							<Route path="/product/:slug" element={<Product />} />
							<Route path="/checkout" element={<Checkout />} />
						</Route>
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
}
