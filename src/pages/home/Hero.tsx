import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import ContentWrapper from '../../components/wrappers/ContentWrapper';

export default function Hero() {
	const heroProduct = data[3];

	return (
		<section className="bg-dark-700 text-light-900">
			<ContentWrapper className='grid justify-items-center bg-[url("/assets/home/mobile/image-header.webp")] bg-cover bg-center bg-no-repeat py-28 text-center md:bg-[url("/assets/home/tablet/image-header.webp")] md:pt-32 md:pb-40 lg:justify-items-start lg:bg-[url("/assets/home/desktop/image-hero.webp")] lg:text-start'>
				<div className="max-w-[24rem]">
					<p className="text-overline mb-4 opacity-50 bg-blend-normal md:mb-6">
						New Product
					</p>
					<h1 className="heading-2 md:heading-1 heading mb-6 grid text-balance">
						{heroProduct.name}
					</h1>
					<p className="mb-7 text-balance opacity-75 bg-blend-normal md:mb-10 lg:text-wrap">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<Link
						to={`/product/${heroProduct.slug}`}
						className="bg-primary hover:bg-primary-hover text-light-900 subtitle cursor-pointer px-8 py-4"
					>
						See Product
					</Link>
				</div>
			</ContentWrapper>
		</section>
	);
}
