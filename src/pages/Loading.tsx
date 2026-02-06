import clsx from 'clsx';

interface LoadingPageProps {
	message?: string;
	className?: string;
}

export default function LoadingPage({
	message = 'Loading...',
	className,
}: LoadingPageProps) {
	return (
		<div
			className={clsx(
				'bg-light-900 flex min-h-screen flex-col items-center justify-center',
				className
			)}
		>
			<div className="mb-4 flex space-x-2">
				<span className="bg-primary h-4 w-4 animate-bounce rounded-full"></span>
				<span className="bg-primary h-4 w-4 animate-bounce rounded-full delay-150"></span>
				<span className="bg-primary h-4 w-4 animate-bounce rounded-full delay-300"></span>
			</div>

			<p className="text-dark-900 text-lg font-medium">{message}</p>
		</div>
	);
}
