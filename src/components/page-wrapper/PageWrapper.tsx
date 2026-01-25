import { Outlet } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';
import Header from './Header';
import Footer from './Footer';

export default function PageWrapper() {
	return (
		<div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
			<ScrollToTop />

			<Header />

			<Outlet />

			<Footer />
		</div>
	);
}
