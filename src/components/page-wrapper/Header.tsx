import { AccessibleIcon } from 'radix-ui';
import ContentWrapper from '../shared/ContentWrapper';
import hamburgerIcon from '../../assets/icons/icon-hamburger.svg';
import brandLogo from '../../assets/icons/logo.svg';
import cartIcon from '../../assets/icons/icon-cart.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Categories from '../shared/Categories';
import CartModal from '../cart/CartModal';

export default function Header() {
	const [menu, setMenu] = useState<boolean>(false);
	const { pathname } = useLocation();

	return (
		<header
			className="bg-dark-900 text-light-900 relative max-h-22.5"
			style={{
				backgroundColor:
					pathname === '/' ? 'var(--color-dark-700)' : 'var(--color-dark-900)',
			}}
		>
			<ContentWrapper className="border-b-gray/20 flex items-center justify-between gap-10.5 border-b py-8 md:justify-start lg:justify-between lg:py-9">
				<button
					className="cursor-pointer lg:hidden"
					onClick={() => setMenu((s) => !s)}
					type="button"
				>
					<AccessibleIcon.Root label="Menu">
						<img src={hamburgerIcon} alt="" />
					</AccessibleIcon.Root>
				</button>

				{menu && <Menu onClose={() => setMenu(false)} />}

				<Link to={'/'} onClick={() => setMenu(false)}>
					<img src={brandLogo} alt="Brand logo" />
				</Link>

				<nav className="hidden lg:inline-block">
					<ul className="flex items-center gap-8.5">
						<li>
							<Link to={'/'} className="hover:text-primary subtitle">
								Home
							</Link>
						</li>
						<li>
							<Link
								to={'/category/headphones'}
								className="hover:text-primary subtitle"
							>
								Headphones
							</Link>
						</li>
						<li>
							<Link
								to={'/category/speakers'}
								className="hover:text-primary subtitle"
							>
								Speakers
							</Link>
						</li>
						<li>
							<Link
								to={'/category/earphones'}
								className="hover:text-primary subtitle"
							>
								Earphones
							</Link>
						</li>
					</ul>
				</nav>

				<CartModal>
					<button
						className="cursor-pointer md:ml-auto lg:ml-0"
						type="button"
						onClick={() => setMenu(false)}
					>
						<AccessibleIcon.Root label="Cart">
							<img src={cartIcon} alt="" />
						</AccessibleIcon.Root>
					</button>
				</CartModal>
			</ContentWrapper>
		</header>
	);
}

function Menu({ onClose }: { onClose: () => void }) {
	return (
		<>
			<div
				onClick={onClose}
				className="bg-dark-900/40 absolute inset-x-0 inset-y-full z-40 h-dvh lg:hidden"
			/>
			<div className="bg-light-900 text-dark-900 absolute inset-x-0 inset-y-full isolate z-50 h-min overflow-hidden rounded-br-lg rounded-bl-lg pt-8 pb-9 md:pt-14 md:pb-17 lg:hidden">
				<Categories onClose={onClose} />
			</div>
		</>
	);
}
