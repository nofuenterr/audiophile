import GoBackButton from '../components/shared/GoBackButton';
import ProductDetails from '../components/product/ProductDetails';
import Gallery from '../components/product/Gallery';
import Recommendations from '../components/product/Recommendations';
import Categories from '../components/shared/Categories';
import About from '../components/shared/About';

export default function Product() {
	return (
		<main>
			<GoBackButton />
			<ProductDetails />
			<Gallery />
			<Recommendations />
			<Categories />
			<About />
		</main>
	);
}
