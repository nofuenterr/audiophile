import Hero from '../components/home/Hero';
import Categories from '../components/shared/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import About from '../components/shared/About';

export default function Home() {
	return (
		<main>
			<Hero />
			<Categories />
			<FeaturedProducts />
			<About />
		</main>
	);
}
