import { useState, type ReactNode } from 'react';
import GoBackButton from '../components/shared/GoBackButton';
import MainWrapper from '../components/shared/MainWrapper';
import ContentWrapper from '../components/shared/ContentWrapper';
import clsx from 'clsx';
import CheckoutModal from '../components/checkout/CheckoutModal';
import { useCartStore } from '../stores/cart';
import formatPrice from '../utils/formatPrice';
import { getCartTotal } from '../utils/getCartTotal';
import { useFormContext } from 'react-hook-form';
import { type CheckoutForm } from '../schema/checkoutFormSchema';
import { useOrdersStore } from '../stores/orders';
import { Link } from 'react-router-dom';

export default function Checkout() {
	return (
		<div>
			<GoBackButton />
			<MainWrapper>
				<ContentWrapper className="grid w-full content-start items-start gap-8 lg:grid-cols-[1fr_21.875rem]">
					<CheckoutPageContentWrapper>
						<CheckoutForm />
					</CheckoutPageContentWrapper>
					<CheckoutPageContentWrapper>
						<Summary />
					</CheckoutPageContentWrapper>
				</ContentWrapper>
			</MainWrapper>
		</div>
	);
}

function Summary() {
	const cart = useCartStore((s) => s.cart);
	const total = getCartTotal(cart);
	const SHIPPING: number = 50;
	const vat = total * 0.2;
	const grandTotal = total + SHIPPING + vat;

	return (
		<div className="grid content-start gap-8">
			<h2 className="heading heading-6">Summary</h2>
			{cart.length > 0 ? (
				<>
					<div>
						<ul className="grid gap-6">
							{cart.map((product) => {
								return (
									<li
										key={product.slug}
										className="grid grid-cols-[4rem_1fr] gap-4"
									>
										<div className="bg-light-700 size-16 overflow-hidden rounded-lg">
											<img
												src={product.cartImage}
												alt={`${product.name} image`}
											/>
										</div>

										<div className="flex w-full justify-between self-center">
											<div className="">
												<p className="font-bold">{product.name}</p>
												<p className="input opacity-50">
													$ {formatPrice(product.price)}
												</p>
											</div>
											<p className="opacity-50">x{product.quantity}</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>

					<div className="grid content-start gap-6">
						<div className="grid content-start gap-2">
							<div className="flex items-center justify-between">
								<p className="uppercase opacity-50">Total</p>
								<p className="heading text-end text-lg">
									$ {formatPrice(total)}
								</p>
							</div>
							<div className="flex items-center justify-between">
								<p className="uppercase opacity-50">Shipping</p>
								<p className="heading text-end text-lg">
									$ {formatPrice(SHIPPING)}
								</p>
							</div>
							<div className="flex items-center justify-between">
								<p className="uppercase opacity-50">VAT (Included)</p>
								<p className="heading text-end text-lg">$ {formatPrice(vat)}</p>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<p className="uppercase opacity-50">Grand Total</p>
							<p className="heading text-primary text-end text-lg">
								$ {formatPrice(grandTotal)}
							</p>
						</div>
					</div>

					<button
						type="submit"
						aria-label="Continue and pay"
						form="checkoutForm"
						className="bg-primary hover:bg-primary-hover text-light-900 subtitle cursor-pointer px-8 py-4"
					>
						Continue & Pay
					</button>
				</>
			) : (
				<>
					<p className="text-center">Your cart is currently empty.</p>

					<Link
						to={'/'}
						aria-label="Continue shopping"
						className="bg-primary hover:bg-primary-hover text-light-900 subtitle cursor-pointer px-8 py-4 text-center"
					>
						Continue shopping
					</Link>
				</>
			)}
		</div>
	);
}

function CheckoutForm() {
	const [receipt, setReceipt] = useState<boolean>(false);
	const { watch, reset, handleSubmit } = useFormContext<CheckoutForm>();

	const removeAllProducts = useCartStore((s) => s.removeAllProducts);
	const cart = useCartStore((s) => s.cart);
	const addOrder = useOrdersStore((s) => s.addOrder);
	const orders = useOrdersStore((s) => s.orders);

	const paymentMethod = watch('paymentMethod');

	const submitOrder = async (data: CheckoutForm) => {
		console.log('Form submitted:', data);
		setReceipt(true);
		addOrder(cart);
		removeAllProducts();
		reset();
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(submitOrder)}
				className="grid content-start gap-8 md:gap-10"
				id="checkoutForm"
			>
				<legend className="heading text-[1.75rem] leading-9.5 tracking-[2px] md:text-[2rem] md:leading-9 md:tracking-[1.15px]">
					Checkout
				</legend>

				<div className="grid content-start gap-8 md:gap-13">
					<InputGroup title="Billing Details" className="md:grid-cols-2">
						<InputBlock id="name" label="Name" placeholder="Alexel Ward" />
						<InputBlock
							id="email"
							label="Email Address"
							placeholder="alexei@mail.com"
							type="email"
						/>
						<InputBlock
							id="phoneNumber"
							label="Phone Number"
							placeholder="+1 202-555-0136"
							type="tel"
						/>
					</InputGroup>
					<InputGroup title="Shipping Info" className="md:grid-cols-2">
						<InputBlock
							id="address"
							label="Address"
							placeholder="1137 Williams Avenue"
							className="md:col-start-1 md:col-end-3"
						/>
						<InputBlock id="zipCode" label="ZIP Code" placeholder="10001" />
						<InputBlock id="city" label="City" placeholder="New York" />
						<InputBlock
							id="country"
							label="Country"
							placeholder="United States"
						/>
					</InputGroup>
					<InputGroup title="Payment Details" className="md:grid-cols-2">
						<RadioGroup
							title="Payment Method"
							className="md:col-start-1 md:col-end-3 md:grid-cols-2"
						>
							<RadioBlock
								defaultChecked={true}
								name="paymentMethod"
								id="eMoney"
								label="e-Money"
							/>
							<RadioBlock
								defaultChecked={false}
								name="paymentMethod"
								id="cashOnDelivery"
								label="Cash on Delivery"
							/>
						</RadioGroup>

						{paymentMethod === 'eMoney' && (
							<>
								<InputBlock
									id="eMoneyNumber"
									label="e-Money Number"
									placeholder="238521993"
								/>
								<InputBlock
									id="eMoneyPIN"
									label="e-Money PIN"
									placeholder="6891"
								/>
							</>
						)}
					</InputGroup>
					{paymentMethod === 'cashOnDelivery' && (
						<div className="flex items-center gap-8">
							<div className="size-12">
								<svg
									width={48}
									height={48}
									viewBox="0 0 48 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M42.281 8.438h4.313a1.406 1.406 0 010 2.812h-1.5v12.656c0 .777-.63 1.407-1.407 1.407h-9.843v15.656c0 .776-.63 1.406-1.407 1.406h-7.36C24.424 45.581 21.583 48 18.187 48H1.407a1.406 1.406 0 010-2.813h16.78a4.226 4.226 0 003.978-2.812H8.438a1.406 1.406 0 010-2.813h4.124c.776 0 1.407-.63 1.407-1.406 0-.775-.631-1.406-1.406-1.406H9.434c-2.558 0-5.061.887-7.048 2.498a1.406 1.406 0 11-1.772-2.184 14.053 14.053 0 017.824-3.09V18.375c0-.777.63-1.406 1.406-1.406h8.531V7.03c0-.776.63-1.406 1.406-1.406h8.341A20.575 20.575 0 0142.264 0h4.33a1.406 1.406 0 010 2.813h-4.33c-3.459 0-6.767.982-9.606 2.812h5.404c.77 0 1.407.627 1.407 1.406 0 .493-.132.665-.98 1.77-.424.552-1.028 1.338-1.884 2.515a1.15 1.15 0 101.848 1.37l2.694-3.674a1.406 1.406 0 011.134-.575zm-9.843 8.53c.49 0 .92.252 1.172.631 1.831-1.687.655-4.802-1.876-4.802-2.14 0-3.465 2.338-2.38 4.172h3.084zm-11.25-8.53h14.06c-.233.321-.423.569-.584.778-.353.462-.565.738-.768 1.204-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437zm1.406 16.968v-5.625H19.78v5.625h2.813zm8.437 14.157h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78zm2.813-18.834V22.5h8.437V12.222l-1.56 2.127a3.954 3.954 0 01-3.424 1.611 5.56 5.56 0 01-3.453 4.769z"
										className="fill-primary"
									/>
								</svg>
							</div>
							<p className="opacity-50">
								The ‘Cash on Delivery’ option enables you to pay in cash when
								our delivery courier arrives at your residence. Just make sure
								your address is correct so that your order will not be
								cancelled.
							</p>
						</div>
					)}
				</div>
			</form>
			{orders.length > 0 && (
				<CheckoutModal receipt={receipt} onClose={() => setReceipt(false)} />
			)}
		</>
	);
}

function CheckoutPageContentWrapper({ children }: { children: ReactNode }) {
	return (
		<div className="bg-light-900 rounded-lg p-6 md:px-7 md:py-8 lg:px-12 lg:py-13.5">
			{children}
		</div>
	);
}

interface InputGroupProps {
	title: string;
	className?: string;
	children: ReactNode;
}

function InputGroup({ title, className, children }: InputGroupProps) {
	return (
		<div className="grid content-start gap-4">
			<h2 className="subtitle text-primary">{title}</h2>
			<div className={clsx('grid content-start gap-x-4 gap-y-6', className)}>
				{children}
			</div>
		</div>
	);
}

interface InputBlockProps {
	id: string;
	label: string;
	placeholder: string;
	className?: string;
	type?: 'text' | 'email' | 'tel';
}

function InputBlock({
	id,
	label,
	placeholder,
	className,
	type = 'text',
}: InputBlockProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const error = errors?.[id]?.message as string;

	return (
		<div className={clsx('grid content-start gap-2', className)}>
			<div className="flex items-center justify-between">
				<label htmlFor={id} className="label">
					{label}
				</label>
				{error && <span className="text-red text-xs">{error}</span>}
			</div>
			<input
				{...register(id)}
				type={type}
				placeholder={placeholder}
				className="input border-input-border hover:border-primary w-full rounded-lg border px-6 py-5"
				style={{
					borderWidth: error ? '2px' : '1px',
					borderColor: error ? 'var(--color-red)' : 'var(--color-input-border)',
				}}
			/>
		</div>
	);
}

interface RadioGroupProps {
	title: string;
	className?: string;
	children: ReactNode;
}

function RadioGroup({ title, className, children }: RadioGroupProps) {
	return (
		<div className={clsx('grid content-start gap-2', className)}>
			<h3 className="label">{title}</h3>
			<div className="grid content-start gap-2">{children}</div>
		</div>
	);
}

interface RadioBlockProps {
	defaultChecked: boolean;
	name: string;
	id: string;
	label: string;
}

function RadioBlock({ defaultChecked, name, id, label }: RadioBlockProps) {
	const { register } = useFormContext();

	return (
		<label className="input border-input-border flex w-full cursor-pointer items-center gap-4 rounded-lg border px-6 py-5">
			<input
				defaultChecked={defaultChecked}
				{...register(name)}
				value={id}
				type="radio"
				name={name}
				id={id}
				className="border-input-border checked:bg-primary size-5 cursor-pointer appearance-none rounded-full border p-1.25"
			/>
			<span>{label}</span>
		</label>
	);
}
