import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import GoBackButton from '../components/shared/GoBackButton';
import ProductDetails from '../components/product/ProductDetails';
import Gallery from '../components/product/Gallery';
import Recommendations from '../components/product/Recommendations';
import Categories from '../components/shared/Categories';
import About from '../components/shared/About';
import ContentWrapper from '../components/shared/ContentWrapper';
import type { Product } from '../types/product';

export default function Product() {
	const params = useParams();
	const slug = params.slug;
	const product: Product | undefined = data.find(
		(product: Product): boolean => product.slug === slug
	);

	return (
		<main className="flex flex-col px-6 md:px-10">
			<ContentWrapper>
				<GoBackButton />
				<div className="flex flex-col gap-10 md:gap-24 lg:gap-30">
					{product ? (
						<>
							<ProductDetails
								productDetails={{
									image: product.image,
									new: product.new,
									name: product.name,
									description: product.description,
									price: product.price,
									features: product.features,
									includes: product.includes,
								}}
							/>
							<Gallery gallery={product.gallery} name={product.name} />
							<Recommendations others={product.others} name={product.name} />
						</>
					) : (
						<h1 className="heading heading-5 grid gap-4 text-center text-balance">
							<span>
								The product doesn't exist or is not available right now.
							</span>
							<span>Checkout the other categories below.</span>
						</h1>
					)}
					<Categories />
					<About />
				</div>
			</ContentWrapper>
		</main>
	);
}
