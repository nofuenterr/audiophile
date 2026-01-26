import type { Product } from '../../types/product';
import ContentWrapper from '../shared/ContentWrapper';

type GalleryType = Pick<Product, 'gallery' | 'name'>;

export default function Gallery({ gallery, name }: GalleryType) {
	return (
		<section>
			<ContentWrapper className="grid w-full gap-5 sm:h-100 sm:grid-cols-[4fr_6fr] lg:gap-8">
				<div className="overflow-hidden rounded-lg">
					<picture className="block h-full w-full">
						<source
							media="(min-width: 1024px)"
							srcSet={gallery.first.desktop}
						/>
						<source media="(min-width: 768px)" srcSet={gallery.first.tablet} />
						<img
							src={gallery.first.mobile}
							alt={`${name} gallery image #1`}
							className="h-full w-full object-cover object-center"
							loading="lazy"
						/>
					</picture>
				</div>
				<div className="overflow-hidden rounded-lg">
					<picture className="block h-full w-full">
						<source
							media="(min-width: 1024px)"
							srcSet={gallery.second.desktop}
						/>
						<source media="(min-width: 768px)" srcSet={gallery.second.tablet} />
						<img
							src={gallery.second.mobile}
							alt={`${name} gallery image #2`}
							className="h-full w-full object-cover object-center"
							loading="lazy"
						/>
					</picture>
				</div>
				<div className="overflow-hidden rounded-lg sm:col-start-2 sm:row-start-1 sm:row-end-3">
					<picture className="block h-full w-full">
						<source
							media="(min-width: 1024px)"
							srcSet={gallery.third.desktop}
						/>
						<source media="(min-width: 768px)" srcSet={gallery.third.tablet} />
						<img
							src={gallery.third.mobile}
							alt={`${name} gallery image #3`}
							className="h-full w-full object-cover object-center"
							loading="lazy"
						/>
					</picture>
				</div>
			</ContentWrapper>
		</section>
	);
}
