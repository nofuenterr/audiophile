import { Outlet } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';
import Header from './Header';
import Footer from './Footer';

export default function PageWrapper() {
	return (
		<div className="flex min-h-dvh flex-col">
			<ScrollToTop />

			<Header />

			<Outlet />

			<Footer />
		</div>
	);
}
