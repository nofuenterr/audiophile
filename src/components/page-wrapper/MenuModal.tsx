import { Dialog, VisuallyHidden } from 'radix-ui';
import type { ReactNode } from 'react';
import Categories from '../shared/Categories';

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
				<Dialog.Overlay className="bg-dark-900/40 fixed inset-0 duration-150" />
				<VisuallyHidden.Root>
					<Dialog.Title>Menu</Dialog.Title>
				</VisuallyHidden.Root>

				<Dialog.Content className="bg-light-900 text-dark-900 fixed top-22.5 left-0 isolate z-50 w-full rounded-br-lg rounded-bl-lg pt-8 pb-9 md:pt-14 md:pb-17">
					<Categories onClose={onClose} />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
