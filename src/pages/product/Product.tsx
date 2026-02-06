import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import GoBackButton from '../components/shared/GoBackButton';
import ProductDetails from '../components/product/ProductDetails';
import Gallery from '../components/product/Gallery';
import Recommendations from '../components/product/Recommendations';
import Categories from '../components/shared/Categories';
import About from '../components/shared/About';
import type { Product } from '../types/product';
import MainWrapper from '../components/shared/MainWrapper';

export default function Product() {
	const params = useParams();
	const slug = params.slug;
	const product: Product | undefined = data.find(
		(product: Product): boolean => product.slug === slug
	);

	return (
		<>
			<GoBackButton />
			<MainWrapper>
				{product ? (
					<>
						<ProductDetails product={product} />
						<Gallery gallery={product.gallery} name={product.name} />
						<Recommendations others={product.others} name={product.name} />
					</>
				) : (
					<ProductNotAvailable />
				)}
				<Categories />
				<About />
			</MainWrapper>
		</>
	);
}

function ProductNotAvailable() {
	return (
		<h1 className="heading heading-5 grid gap-4 text-center text-balance">
			<span>The product doesn't exist or is not available right now.</span>
			<span>Checkout the other categories below.</span>
		</h1>
	);
}
