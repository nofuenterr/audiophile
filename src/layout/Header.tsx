import { AccessibleIcon } from 'radix-ui';
import ContentWrapper from '../components/wrappers/ContentWrapper';
import hamburgerIcon from '../../assets/icons/icon-hamburger.svg';
import brandLogo from '../../assets/icons/logo.svg';
import cartIcon from '../../assets/icons/icon-cart.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import CartModal from '../components/modals/CartModal';
import MenuModal from '../components/modals/MenuModal';
import { useCartStore } from '../app/stores/cart';

export default function Header() {
	const [menu, setMenu] = useState<boolean>(false);
	const cart = useCartStore((s) => s.cart);
	const { pathname } = useLocation();

	return (
		<header
			className="bg-dark-900 text-light-900 relative"
			style={{
				backgroundColor:
					pathname === '/' ? 'var(--color-dark-700)' : 'var(--color-dark-900)',
			}}
		>
			<ContentWrapper className="border-b-gray/20 flex items-center justify-between gap-10.5 border-b py-8 md:justify-start lg:justify-between lg:py-9">
				<MenuModal onClose={() => setMenu(false)} menu={menu}>
					<button
						className="cursor-pointer lg:hidden"
						onClick={() => setMenu(true)}
						type="button"
					>
						<AccessibleIcon.Root label="Menu">
							<img src={hamburgerIcon} alt="" />
						</AccessibleIcon.Root>
					</button>
				</MenuModal>

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
						className="relative cursor-pointer md:ml-auto lg:ml-0"
						type="button"
						onClick={() => setMenu(false)}
					>
						<div
							aria-label="Cart items count"
							className="bg-red absolute -top-3.25 -right-3.25 grid size-6 place-content-center rounded-full text-sm"
						>
							{cart.length}
						</div>
						<AccessibleIcon.Root label="Cart">
							<img src={cartIcon} alt="" />
						</AccessibleIcon.Root>
					</button>
				</CartModal>
			</ContentWrapper>
		</header>
	);
}
