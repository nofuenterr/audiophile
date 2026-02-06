import { z } from 'zod';

export const checkoutFormSchema = z.discriminatedUnion('paymentMethod', [
	z.object({
		name: z.string().min(1, 'Field is required'),
		email: z.string().email('Wrong format'),
		phoneNumber: z.string().min(1, 'Field is required'),
		address: z.string().min(1, 'Field is required'),
		zipCode: z.string().min(1, 'Field is required'),
		city: z.string().min(1, 'Field is required'),
		country: z.string().min(1, 'Field is required'),
		paymentMethod: z.literal('eMoney'),
		eMoneyNumber: z.string().min(1, 'Field is required'),
		eMoneyPIN: z.string().min(1, 'Field is required'),
	}),

	z.object({
		name: z.string().min(1, 'Field is required'),
		email: z.string().email('Wrong format'),
		phoneNumber: z.string().min(1, 'Field is required'),
		address: z.string().min(1, 'Field is required'),
		zipCode: z.string().min(1, 'Field is required'),
		city: z.string().min(1, 'Field is required'),
		country: z.string().min(1, 'Field is required'),
		paymentMethod: z.literal('cashOnDelivery'),
	}),
]);

export type CheckoutForm = z.infer<typeof checkoutFormSchema>;
