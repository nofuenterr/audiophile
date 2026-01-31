import { Dialog } from 'radix-ui';
import type { ReactNode } from 'react';
import { useCartStore, type CartProduct } from '../../stores/cart';
import formatPrice from '../../utils/formatPrice';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../../utils/getCartTotal';

export default function CartModal({ children }: { children: ReactNode }) {
	const cart = useCartStore((s) => s.cart);

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="bg-dark-900/40 fixed inset-0 grid content-start justify-end overflow-y-auto pt-28.5 pr-6 pb-8 duration-150 md:pr-10 lg:pt-30.5 [@media(min-width:65.625rem)]:pr-[calc((100vw-70.3125rem)/2+2.34375rem)]">
					<Dialog.Content className="bg-light-900 text-dark-900 grid w-[min(calc(100vw-3rem),23.75rem)] rounded-lg p-8 duration-150 [@media(max-width:25rem)]:p-6">
						<Dialog.Close
							aria-label="Close"
							className="hover:text-primary mb-4 cursor-pointer justify-self-end opacity-50 hover:opacity-100"
						>
							✕
						</Dialog.Close>

						<div className="mb-8 flex items-center justify-between">
							<Dialog.Title className="heading heading-6">
								CART ({cart.length})
							</Dialog.Title>
							{cart.length > 0 ? <RemoveAllButton /> : null}
						</div>

						{cart.length > 0 ? (
							<>
								<ul className="mb-8 grid gap-6">
									{cart.map((product) => {
										return (
											<CartProductCard key={product.slug} product={product} />
										);
									})}
								</ul>

								<div className="mb-6 flex items-center justify-between">
									<h2 className="uppercase opacity-50">Total</h2>
									<p className="heading heading-6">
										$ {formatPrice(getCartTotal(cart))}
									</p>
								</div>
							</>
						) : (
							<div className="mb-8">
								<p className="text-center">Your cart is currently empty.</p>
							</div>
						)}

						<Dialog.Close asChild>
							{cart.length > 0 ? (
								<Link
									to={'/checkout'}
									className="bg-primary hover:bg-primary-hover text-light-900 subtitle block w-full cursor-pointer px-8 py-4 text-center"
								>
									Checkout
								</Link>
							) : (
								<button
									className="bg-primary hover:bg-primary-hover text-light-900 subtitle w-full cursor-pointer px-8 py-4"
									aria-label="Continue shopping"
								>
									Continue shopping
								</button>
							)}
						</Dialog.Close>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

function RemoveAllButton() {
	const removeAllProducts = useCartStore((s) => s.removeAllProducts);

	return (
		<button
			className="hover:text-primary cursor-pointer underline opacity-50 hover:opacity-100"
			onClick={() => removeAllProducts()}
		>
			Remove all
		</button>
	);
}

function CartProductCard({ product }: { product: CartProduct }) {
	const editProduct = useCartStore((s) => s.editProduct);

	return (
		<li className="grid grid-cols-[auto_1fr] gap-4">
			<div className="bg-light-700 size-16 overflow-hidden rounded-lg">
				<img src={product.cartImage} loading="lazy" alt={product.name} />
			</div>

			<div className="grid grid-cols-[1fr_6rem] justify-between gap-3 self-center [@media(max-width:25rem)]:grid-cols-[1fr_4rem]">
				<div className="[@media(max-width:25rem)]:self-center">
					<p className="font-bold">{product.name}</p>
					<p className="input opacity-50">$ {formatPrice(product.price)}</p>
				</div>

				<div className="bg-light-700 flex h-min w-24 items-center gap-3 justify-self-end px-3 py-2 [@media(max-width:25rem)]:grid [@media(max-width:25rem)]:w-16 [@media(max-width:25rem)]:grid-cols-2 [@media(max-width:25rem)]:gap-2 [@media(max-width:25rem)]:px-2">
					{product.quantity > 1 ? (
						<button
							aria-label={`Decrement ${product.name} quantity`}
							className="subtitle hover:text-primary grid size-4 cursor-pointer place-content-center opacity-25 hover:opacity-100 [@media(max-width:25rem)]:row-start-2 [@media(max-width:25rem)]:w-full"
							onClick={() => {
								if (product.quantity > 1)
									editProduct(product.slug, product.quantity - 1);
							}}
						>
							-
						</button>
					) : (
						<DeleteCartProductButton slug={product.slug} />
					)}
					<input
						type="text"
						min={1}
						value={product.quantity}
						onChange={(e) => {
							const value = parseInt(e.target.value);
							if (/^\d*$/.test(String(value)) && value) {
								editProduct(product.slug, value);
							}
						}}
						inputMode="numeric"
						pattern="[0-9]*"
						className="subtitle w-full text-center [@media(max-width:25rem)]:col-start-1 [@media(max-width:25rem)]:col-end-3"
					/>
					<button
						aria-label={`Increment ${product.name} quantity`}
						className="subtitle hover:text-primary grid size-4 cursor-pointer place-content-center opacity-25 hover:opacity-100 [@media(max-width:25rem)]:row-start-2 [@media(max-width:25rem)]:w-full"
						onClick={() => {
							editProduct(product.slug, product.quantity + 1);
						}}
					>
						+
					</button>
				</div>
			</div>
		</li>
	);
}

function DeleteCartProductButton({ slug }: { slug: string }) {
	const deleteProduct = useCartStore((s) => s.deleteProduct);

	return (
		<button
			className="group grid size-4 cursor-pointer place-content-center [@media(max-width:25rem)]:row-start-2 [@media(max-width:25rem)]:w-full"
			onClick={() => deleteProduct(slug)}
		>
			<svg
				className="scale-80"
				width={13}
				height={16}
				viewBox="0 0 13 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M8.444 0l.89.889h3.11v1.778H0V.889h3.111L4 0h4.444zM2.667 16a1.777 1.777 0 01-1.778-1.778V3.556h10.666v10.666c0 .982-.795 1.778-1.777 1.778H2.667z"
					className="fill-dark-900 group-hover:fill-primary opacity-50 group-hover:opacity-100"
				/>
			</svg>
		</button>
	);
}
