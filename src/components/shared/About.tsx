import ContentWrapper from './ContentWrapper';

export default function About() {
	return (
		<section className="px-6 md:px-10">
			<ContentWrapper className="grid gap-10 md:gap-16 lg:grid-cols-[auto_33.75rem] lg:gap-31">
				<picture>
					<source
						media="(min-width: 1024px)"
						srcSet="/assets/shared/desktop/image-best-gear.jpg"
					/>
					<source
						media="(min-width: 768px)"
						srcSet="/assets/shared/tablet/image-best-gear.jpg"
					/>
					<img
						src="/assets/shared/mobile/image-best-gear.jpg"
						alt="Best audio gear"
						className="h-75 w-full rounded-lg object-cover lg:col-start-2 lg:h-147"
						loading="lazy"
					/>
				</picture>

				<div className="grid gap-8 text-center text-balance lg:row-start-1 lg:content-center lg:justify-items-start lg:text-start">
					<h2 className="heading text-[1.75rem] leading-9.5 tracking-[2px] md:text-[2.5rem] md:leading-11 md:tracking-[1.5px]">
						Bringing you the <span className="text-primary">best</span> audio
						gear
					</h2>
					<p className="opacity-50">
						Located at the heart of New York City, Audiophile is the premier
						store for high end headphones, earphones, speakers, and audio
						accessories. We have a large showroom and luxury demonstration rooms
						available for you to browse and experience a wide range of our
						products. Stop by our store to meet some of the fantastic people who
						make Audiophile the best place to buy your portable audio equipment.
					</p>
				</div>
			</ContentWrapper>
		</section>
	);
}
