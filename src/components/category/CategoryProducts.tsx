import ContentWrapper from '../shared/ContentWrapper';
import data from '../../data/data.json';
import type { Product } from '../../types/product';
import { Link } from 'react-router-dom';

export default function CategoryProducts({ category }: { category: string }) {
	const categoryProducts: Product[] = data.filter(
		(product: Product): boolean => product.category === category
	);

	return (
		<section>
			<ContentWrapper>
				{categoryProducts.length > 0 ? (
					<ul className="flex flex-col gap-10 md:gap-24 lg:gap-30">
						{categoryProducts.map((product) => {
							return <ProductCard key={product.slug} product={product} />;
						})}
					</ul>
				) : (
					<p className="text-center">
						There is no such products in this category.
					</p>
				)}
			</ContentWrapper>
		</section>
	);
}

interface ProductCardProps {
	product: Product;
}

function ProductCard({ product }: ProductCardProps) {
	return (
		<li className="grid gap-8 lg:grid-cols-[auto_auto] lg:gap-31 lg:even:*:last:col-start-1 lg:even:*:last:row-start-1">
			<div className="bg-light-700 max-h-88 w-full rounded-lg lg:max-h-140 lg:max-w-135">
				<picture>
					<source
						media="(min-width: 1024px)"
						srcSet={product.categoryImage.desktop}
					/>
					<source
						media="(min-width: 768px)"
						srcSet={product.categoryImage.tablet}
					/>
					<img
						src={product.categoryImage.mobile}
						alt={`${product.name} image`}
						className="m-auto h-auto max-h-full w-auto"
						loading="lazy"
					/>
				</picture>
			</div>

			<div className="grid justify-items-center text-center text-balance lg:w-111.25 lg:content-center lg:items-center lg:justify-items-start lg:text-start lg:text-wrap">
				{product.new ? (
					<p className="text-overline text-primary mb-6 md:mb-4">New Product</p>
				) : null}
				<h2 className="heading mb-6 text-[1.75rem] leading-9.5 tracking-[2px] md:mb-8 md:text-[2.5rem] md:leading-11 md:tracking-[1.5px]">
					{product.name}
				</h2>
				<p className="mb-6 opacity-50 lg:mb-10">{product.description}</p>
				<Link
					to={`/product/${product.slug}`}
					className="bg-primary hover:bg-primary-hover text-light-900 subtitle cursor-pointer px-8 py-4"
				>
					See Product
				</Link>
			</div>
		</li>
	);
}
