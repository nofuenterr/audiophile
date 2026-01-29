import { Dialog } from 'radix-ui';
import type { ReactNode } from 'react';

export default function CartModal({ children }: { children: ReactNode }) {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="bg-dark-900 fixed inset-0 opacity-40 duration-150" />

				<Dialog.Content className="bg-light-900 text-dark-900 fixed top-28.5 right-6 w-[min(calc(100vw-3rem),23.75rem)] rounded-lg p-8 duration-150 md:right-10 lg:top-30.5 [@media(min-width:65.625rem)]:right-[calc((100vw-70.3125rem)/2+2.34375rem)]">
					<div className="mb-8 flex items-center justify-between">
						<Dialog.Title className="heading heading-6">CART (3)</Dialog.Title>
						<button className="hover:text-primary cursor-pointer underline opacity-50 hover:opacity-100">
							Remove all
						</button>
					</div>

					<ul className="mb-8 grid gap-6">
						<li className="grid grid-cols-[auto_1fr] gap-4">
							<div className="bg-light-700 size-16 overflow-hidden rounded-lg"></div>

							<div className="flex w-full justify-between gap-3 self-center">
								<div className="[@media(max-width:25rem)]:self-center">
									<p className="font-bold">XX99 MK II</p>
									<p className="input opacity-50">$ 2,999</p>
								</div>

								<div className="bg-light-700 flex w-24 items-center gap-3 px-3 py-2 [@media(max-width:25rem)]:grid [@media(max-width:25rem)]:grid-cols-2 [@media(max-width:25rem)]:gap-2">
									{/* {quantity > 1 ? (
										<button
											aria-label="decrement quantity"
											className="subtitle hover:text-primary grid size-4 cursor-pointer place-content-center opacity-25 hover:opacity-100"
											onClick={() => {
												if (quantity > 1) setQuantity((s) => s - 1);
											}}
										>
											-
										</button>
									) : (
										<div className="size-4"></div>
									)} */}
									<button
										aria-label="decrement quantity"
										className="subtitle hover:text-primary grid size-4 cursor-pointer place-content-center opacity-25 hover:opacity-100 [@media(max-width:25rem)]:row-start-2 [@media(max-width:25rem)]:w-full"
										/* onClick={() => {
											if (quantity > 1) setQuantity((s) => s - 1);
										}} */
									>
										-
									</button>
									<input
										type="text"
										min={1}
										/* value={quantity}
										onChange={(e) => {
											const value = parseInt(e.target.value);
											if (/^\d*$/.test(String(value)) && value) {
												setQuantity(value);
											}
										}} */
										inputMode="numeric"
										pattern="[0-9]*"
										className="subtitle w-full text-center [@media(max-width:25rem)]:col-start-1 [@media(max-width:25rem)]:col-end-3"
									/>
									<button
										aria-label="increment quantity"
										className="subtitle hover:text-primary grid size-4 cursor-pointer place-content-center opacity-25 hover:opacity-100 [@media(max-width:25rem)]:row-start-2 [@media(max-width:25rem)]:w-full"
										/* onClick={() => {
											setQuantity((s) => s + 1);
										}} */
									>
										+
									</button>
								</div>
							</div>
						</li>
					</ul>

					<div className="mb-6 flex items-center justify-between">
						<h2 className="uppercase opacity-50">Total</h2>
						<p className="heading heading-6">$ 5,396</p>
					</div>

					<Dialog.Close asChild>
						<button
							className="bg-primary hover:bg-primary-hover text-light-900 subtitle w-full cursor-pointer px-8 py-4"
							aria-label="Checkout"
						>
							Checkout
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
