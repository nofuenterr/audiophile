import { Outlet } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ScrollToTop from '../utils/ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import { checkoutFormSchema } from '../../schema/checkoutFormSchema';

export default function PageWrapper() {
	const form = useForm({
		resolver: zodResolver(checkoutFormSchema),
		mode: 'onChange',
	});

	return (
		<div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
			<ScrollToTop />

			<Header />

			<FormProvider {...form}>
				<Outlet />
			</FormProvider>

			<Footer />
		</div>
	);
}
