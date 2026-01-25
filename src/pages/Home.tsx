import Hero from '../components/home/Hero';
import Categories from '../components/shared/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import About from '../components/shared/About';

export default function Home() {
	return (
		<main className="flex flex-col gap-10 md:gap-24 lg:gap-30">
			<Hero />
			<Categories />
			<FeaturedProducts />
			<About />
		</main>
	);
}
