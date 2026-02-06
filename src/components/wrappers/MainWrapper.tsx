import type { ReactNode } from 'react';

export default function MainWrapper({ children }: { children: ReactNode }) {
	return (
		<main className="flex flex-col gap-16 md:gap-24 lg:gap-30">{children}</main>
	);
}
