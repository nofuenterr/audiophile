import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import type { Product } from '../../types/product';
import GoBackButton from '../../components/GoBackButton';
import Categories from '../../components/sections/Categories';
import About from '../../components/sections/About';
import MainWrapper from '../../components/wrappers/MainWrapper';
import ProductDetails from './ProductDetails';
import Gallery from './Gallery';
import Recommendations from './Recommendations';

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
