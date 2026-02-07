import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';
import ContentWrapper from '../../components/wrappers/ContentWrapper';

type RecommendationsType = Pick<Product, 'others' | 'name'>;

export default function Recommendations({
	others: recommendations,
	name,
}: RecommendationsType) {
	return (
		<section>
			<ContentWrapper className="grid gap-10 text-center text-balance md:gap-14 lg:gap-16">
				<h2 className="heading text-2xl leading-8.25 tracking-[1.7px] md:text-[2rem] md:leading-9 md:tracking-[1.15px]">
					You May Also Like
				</h2>
				<ul className="grid gap-14 md:grid-cols-3 md:gap-3 lg:gap-8">
					{recommendations.map((rec) => {
						return (
							<li
								key={rec.slug}
								className="grid content-start justify-items-center"
							>
								<div className="bg-light-700 mb-8 h-40 w-full overflow-hidden rounded-lg md:mb-9 md:h-80 lg:mb-10">
									<picture className="block h-full w-full">
										<source
											media="(min-width: 1024px)"
											srcSet={rec.image.desktop}
										/>
										<source
											media="(min-width: 768px)"
											srcSet={rec.image.tablet}
										/>
										<img
											src={rec.image.mobile}
											alt={name}
											className="h-full w-full object-contain object-center"
											loading="lazy"
										/>
									</picture>
								</div>
								<h3 className="heading heading-5 mb-8 md:mb-9 lg:mb-8">
									{rec.name}
								</h3>
								<Link
									to={`/product/${rec.slug}`}
									className="bg-primary hover:bg-primary-hover text-light-900 subtitle cursor-pointer px-8 py-4"
								>
									See Product
								</Link>
							</li>
						);
					})}
				</ul>
			</ContentWrapper>
		</section>
	);
}
