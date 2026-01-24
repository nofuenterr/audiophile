import type { ReactNode } from 'react';
import clsx from 'clsx';

interface ContentWrapperProps {
	children: ReactNode;
	className?: string;
}

export default function ContentWrapper({
	children,
	className,
}: ContentWrapperProps) {
	return <div className={clsx('mx-auto max-w-280', className)}>{children}</div>;
}
