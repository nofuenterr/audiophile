import { Outlet } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutFormSchema } from '../pages/checkout/checkoutFormSchema';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function AppLayout() {
	useScrollToTop();

	const form = useForm({
		resolver: zodResolver(checkoutFormSchema),
		mode: 'onChange',
		defaultValues: {
			paymentMethod: 'eMoney',
		},
	});

	return (
		<div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
			<Header />

			<FormProvider {...form}>
				<Outlet />
			</FormProvider>

			<Footer />
		</div>
	);
}
