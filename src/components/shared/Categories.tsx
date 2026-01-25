import { Link } from 'react-router-dom';
import arrowRightIcon from '../../assets/icons/icon-arrow-right.svg';
import ContentWrapper from './ContentWrapper';

export default function Categories({ onClose }: { onClose?: () => void }) {
	return (
		<div className="px-6 md:px-10">
			<ContentWrapper>
				<nav>
					<ul className="grid h-min justify-items-center gap-4 md:grid-cols-3 md:gap-2.5 lg:gap-7.5">
						<Category onClose={onClose} category="headphones" />
						<Category onClose={onClose} category="speakers" />
						<Category onClose={onClose} category="earphones" />
					</ul>
				</nav>
			</ContentWrapper>
		</div>
	);
}

interface CategoryProps {
	category: string;
	onClose?: () => void;
}

function Category({ category, onClose }: CategoryProps) {
	return (
		<li className="relative w-full">
			<Link
				to={`/category/${category}`}
				onClick={onClose}
				className="group grid justify-items-center"
			>
				<div>
					<img
						className="h-26 lg:h-40"
						src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
						alt={`${category} category thumbnail`}
					/>
				</div>
				<h2 className="category lg:heading-6 mb-4">{category}</h2>
				<p className="mb-5.5 flex items-center gap-3.5 lg:mb-7.5">
					<span className="subtitle group-hover:text-primary opacity-50 group-hover:opacity-100">
						Shop
					</span>
					<span>
						<img src={arrowRightIcon} alt="Arrow right icon" />
					</span>
				</p>
				<div className="bg-light-700 absolute bottom-0 left-0 -z-10 h-41 w-full rounded-lg lg:h-51"></div>
			</Link>
		</li>
	);
}
