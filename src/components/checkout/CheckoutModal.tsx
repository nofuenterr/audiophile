import { Dialog } from 'radix-ui';

export default function CheckoutModal() {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<button className="Button violet">Edit profile</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-dark-900 fixed inset-0 opacity-40 duration-150" />

				<Dialog.Content className="bg-light-900 text-dark-900 fixed top-1/2 left-1/2 w-[85vw] max-w-135 -translate-1/2 rounded-lg p-8 duration-150">
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

					<Dialog.Title className="heading mb-4 text-2xl leading-8.25 tracking-[1.7px] md:mb-7 md:text-[2rem] md:leading-9 md:tracking-[1.15px]">
						THANK YOU FOR YOUR ORDER
					</Dialog.Title>

					<Dialog.Description className="mb-6 opacity-50">
						You will receive an email confirmation shortly.
					</Dialog.Description>

					<div className="mb-6 grid overflow-hidden rounded-lg md:mb-12 md:grid-cols-[1fr_12.25rem]">
						<div className="bg-light-700 grid gap-3 p-6">
							<div className="grid grid-cols-[auto_1fr] gap-4">
								<div className="size-12.5 bg-transparent"></div>

								<div className="flex w-full justify-between gap-3 self-center">
									<div>
										<p className="font-bold">XX99 MK II</p>
										<p className="input opacity-50">$ 2,999</p>
									</div>
									<p className="opacity-50">x1</p>
								</div>
							</div>

							<hr className="text-gray w-full" />

							<div className="justify-self-center">
								<button className="label cursor-pointer opacity-50">
									and 2 other item(s)
								</button>
							</div>

							<div className="justify-self-center">
								<button className="label cursor-pointer opacity-50">
									View less
								</button>
							</div>
						</div>

						<div className="bg-dark-900 text-light-900 grid content-end gap-2 px-8 py-10">
							<h2 className="uppercase opacity-50">Grand Total</h2>
							<p className="heading heading-6">$ 5,446</p>
						</div>
					</div>

					<Dialog.Close asChild>
						<button
							className="bg-primary hover:bg-primary-hover text-light-900 subtitle w-full cursor-pointer px-8 py-4"
							aria-label="Back to home"
						>
							Back to Home
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
