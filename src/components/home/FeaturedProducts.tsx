import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import ContentWrapper from '../shared/ContentWrapper';

export default function FeaturedProducts() {
	const zx9Speaker = data[5];
	const zx7Speaker = data[4];
	const yx1Earphones = data[0];

	return (
		<section className="px-6 md:px-10">
			<ContentWrapper className="grid gap-6 md:gap-8 lg:gap-12">
				<div className="bg-primary isolate grid justify-items-center gap-8 overflow-hidden rounded-lg px-6 py-14 md:gap-16 md:px-41 md:pt-13 md:pb-16 lg:grid-cols-2 lg:items-start lg:gap-34 lg:px-24 lg:pt-33 lg:pb-31">
					<div className="relative self-end lg:-mb-35">
						<picture>
							<source
								media="(min-width: 1024px)"
								srcSet="/assets/home/desktop/image-speaker-zx9.png"
							/>
							<source
								media="(min-width: 768px)"
								srcSet="/assets/home/tablet/image-speaker-zx9.png"
							/>
							<img
								src="/assets/home/mobile/image-speaker-zx9.png"
								alt={`${zx9Speaker.name} image`}
								className="max-h-52 md:max-h-59 lg:max-h-124"
								loading="lazy"
							/>
						</picture>
						<div className="absolute top-1/2 left-1/2 -z-10 size-139.5 -translate-x-1/2 -translate-y-1/2 md:size-236">
							<img src="/assets/home/desktop/pattern-circles.svg" alt="" />
						</div>
					</div>

					<div className="text-light-900 grid justify-items-center gap-6 text-center text-balance lg:justify-items-start lg:self-center lg:text-start lg:text-wrap">
						<h2 className="heading text-[2.5rem] leading-11 tracking-[1.5px] md:text-[3.5rem] md:leading-14.5 md:tracking-[2px]">
							{zx9Speaker.name}
						</h2>
						<p className="opacity-75">
							Upgrade to premium speakers that are phenomenally built to deliver
							truly remarkable sound.
						</p>
						<Link
							to={`/product/${zx9Speaker.slug}`}
							className="bg-dark-900 text-light-900 subtitle cursor-pointer px-8 py-4 hover:bg-gray-800 md:mt-4"
						>
							See Product
						</Link>
					</div>
				</div>

				<div className="bg-light-700 grid h-80 content-center justify-items-start gap-8 rounded-lg bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-center bg-no-repeat p-6 md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] md:p-16 lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] lg:p-24">
					<h2 className="heading heading-5">{zx7Speaker.name}</h2>
					<Link
						to={`/product/${zx7Speaker.slug}`}
						className="subtitle text-dark-900 border-dark-900 hover:bg-dark-900 hover:text-light-900 cursor-pointer border bg-transparent px-8 py-4 md:mt-4"
					>
						See Product
					</Link>
				</div>

				<div className="grid auto-rows-[12.5rem] gap-6 md:auto-rows-[20rem] md:grid-cols-2 md:gap-3 lg:gap-8">
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
						/>
						<img
							src="/assets/home/mobile/image-earphones-yx1.jpg"
							alt={`${yx1Earphones.name} image`}
							className="bg-light-700 size-full rounded-lg object-cover"
							loading="lazy"
						/>
					</picture>

					<div className="bg-light-700 grid content-center justify-items-start gap-8 rounded-lg px-6 py-10 md:px-10 lg:p-24">
						<h2 className="heading heading-5">{yx1Earphones.name}</h2>
						<Link
							to={`/product/${yx1Earphones.slug}`}
							className="subtitle text-dark-900 border-dark-900 hover:bg-dark-900 hover:text-light-900 cursor-pointer border bg-transparent px-8 py-4 md:mt-4"
						>
							See Product
						</Link>
					</div>
				</div>
			</ContentWrapper>
		</section>
	);
}
