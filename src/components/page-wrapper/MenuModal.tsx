import { Dialog, VisuallyHidden } from 'radix-ui';
import type { ReactNode } from 'react';
import Categories from '../shared/Categories';
import ContentWrapper from '../shared/ContentWrapper';

interface MenuModalProps {
	onClose: () => void;
	menu: boolean;
	children: ReactNode;
}

export default function MenuModal({ onClose, menu, children }: MenuModalProps) {
	return (
		<Dialog.Root open={menu} onOpenChange={(open) => !open && onClose()}>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="bg-dark-900/40 fixed inset-0 grid content-start overflow-y-auto pb-8 duration-150">
					<VisuallyHidden.Root>
						<Dialog.Title>Menu</Dialog.Title>
					</VisuallyHidden.Root>

					<Dialog.Content className="bg-light-900 text-dark-900 isolate z-50 w-full rounded-br-lg rounded-bl-lg pt-8 pb-9 md:pt-14 md:pb-17">
						<ContentWrapper className="mb-4 w-full text-end">
							<Dialog.Close
								aria-label="Close"
								className="hover:text-primary cursor-pointer opacity-50 hover:opacity-100"
							>
								✕
							</Dialog.Close>
						</ContentWrapper>
						<Categories onClose={onClose} />
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
