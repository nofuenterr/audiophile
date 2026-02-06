import { Toast } from 'radix-ui';
import type { ReactNode } from 'react';
import type { Product } from '../../types/product';
import formatPrice from '../../utils/formatPrice';

interface CartToastProps {
	product: Product;
	quantity: number;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	children: ReactNode;
}

export default function CartToast({
	product,
	quantity,
	open,
	setOpen,
	children,
}: CartToastProps) {
	return (
		<Toast.Provider swipeDirection="right">
			{children}

			<Toast.Root
				className="bg-light-900 grid w-70 gap-5 rounded-lg p-6 shadow-md data-[state=closed]:animate-[hide_100ms_ease-in_forwards] data-[state=open]:animate-[slideIn_150ms_cubic-bezier(0.16,1,0.3,1)_forwards] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out data-[swipe=end]:animate-[swipeOut_100ms_ease-out_forwards] data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x)"
				open={open}
				onOpenChange={setOpen}
			>
				<div className="flex items-center justify-between">
					<Toast.Title className="heading heading-6">Added to cart</Toast.Title>
					<Toast.Close
						aria-label="Close"
						className="hover:text-primary cursor-pointer opacity-50 hover:opacity-100"
					>
						✕
					</Toast.Close>
				</div>

				<Toast.Description asChild>
					<div className="grid grid-cols-[4rem_1fr] gap-4">
						<div className="bg-light-700 size-16 overflow-hidden rounded-lg">
							<img src={product.cartImage} alt={product.name} />
						</div>

						<div className="flex w-full justify-between gap-4 self-center">
							<div>
								<p className="font-bold">{product.name}</p>
								<p className="input opacity-50">
									$ {formatPrice(product.price)}
								</p>
							</div>
							<p className="opacity-50">x{quantity}</p>
						</div>
					</div>
				</Toast.Description>
			</Toast.Root>

			<Toast.Viewport className="fixed top-0 right-0 z-999 p-6" />
		</Toast.Provider>
	);
}
