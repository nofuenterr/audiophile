import { Dialog } from 'radix-ui';
import { useOrdersStore } from '../../app/stores/orders';
import formatPrice from '../../utils/formatPrice';
import { getCartTotal } from '../../utils/getCartTotal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface CheckoutModalProps {
	receipt: boolean;
	onClose: () => void;
}

export default function CheckoutModal({
	receipt,
	onClose,
}: CheckoutModalProps) {
	const orders = useOrdersStore((s) => s.orders);
	const latestOrder = orders.length > 0 ? orders.at(-1) : null;
	const [otherItems, setOtherItems] = useState<boolean>(false);

	return (
		<Dialog.Root open={receipt} onOpenChange={(open) => !open && onClose()}>
			<Dialog.Trigger asChild>
				<button className="hidden">Submit Order</button>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="bg-dark-900/40 fixed inset-0 grid place-items-center overflow-y-auto py-8 duration-150">
					<Dialog.Content className="bg-light-900 text-dark-900 w-[85vw] max-w-135 rounded-lg p-8 duration-150">
						<div className="flex items-start justify-between">
							<div className="bg-primary mb-6 grid size-16 place-content-center rounded-full md:mb-8">
								<svg
									width={26}
									height={21}
									viewBox="0 0 26 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.414 10.466l6.752 6.751L23.969 1.414"
										className="stroke-light-900"
										strokeWidth={4}
									/>
								</svg>
							</div>
							<Dialog.Close
								aria-label="Close"
								className="hover:text-primary cursor-pointer opacity-50 hover:opacity-100"
							>
								✕
							</Dialog.Close>
						</div>

						<Dialog.Title className="heading mb-4 text-2xl leading-8.25 tracking-[1.7px] md:mb-7 md:text-[2rem] md:leading-9 md:tracking-[1.15px]">
							THANK YOU FOR YOUR ORDER
						</Dialog.Title>

						<Dialog.Description className="mb-6 opacity-50">
							You will receive an email confirmation shortly.
						</Dialog.Description>

						<div className="mb-6 grid overflow-hidden rounded-lg md:mb-12 md:grid-cols-[1fr_12.25rem]">
							<div className="bg-light-700 grid gap-3 p-6">
								{latestOrder && (
									<ul className="grid gap-3">
										{latestOrder.items.map((item, index) => {
											return (
												<li
													key={`${latestOrder.date}-${item.slug}`}
													className="grid grid-cols-[auto_1fr] gap-4"
													style={{
														display:
															otherItems && index > 0
																? 'grid'
																: index > 0
																	? 'none'
																	: 'grid',
													}}
												>
													<div className="size-12.5 bg-transparent">
														<img src={item.cartImage} alt={item.name} />
													</div>

													<div className="flex w-full justify-between gap-3 self-center">
														<div>
															<p className="font-bold">{item.name}</p>
															<p className="input opacity-50">
																$ {formatPrice(item.price)}
															</p>
														</div>
														<p className="opacity-50">x{item.quantity}</p>
													</div>
												</li>
											);
										})}
									</ul>
								)}

								{latestOrder && latestOrder.items.length > 1 && (
									<>
										<hr className="text-gray w-full" />

										{!otherItems && (
											<div className="justify-self-center">
												<button
													onClick={() => setOtherItems(true)}
													className="label hover:text-primary cursor-pointer opacity-50 hover:opacity-100"
												>
													and {latestOrder.items.length - 1} other item
													{latestOrder.items.length > 2 ? '(s)' : ''}
												</button>
											</div>
										)}

										{otherItems && (
											<div className="justify-self-center">
												<button
													onClick={() => setOtherItems(false)}
													className="label hover:text-primary cursor-pointer opacity-50 hover:opacity-100"
												>
													View less
												</button>
											</div>
										)}
									</>
								)}
							</div>

							<div className="bg-dark-900 text-light-900 grid content-end gap-2 px-8 py-10">
								<h2 className="uppercase opacity-50">Grand Total</h2>
								<p className="heading heading-6">
									$ {formatPrice(getCartTotal(latestOrder?.items))}
								</p>
							</div>
						</div>

						<Dialog.Close asChild>
							<Link
								to={'/'}
								className="bg-primary hover:bg-primary-hover text-light-900 subtitle grid cursor-pointer px-8 py-4 text-center"
								aria-label="Back to home"
							>
								Back to Home
							</Link>
						</Dialog.Close>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
