import Hero from '../components/home/Hero';
import Categories from '../components/shared/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import About from '../components/shared/About';
import MainWrapper from '../components/shared/MainWrapper';

export default function Home() {
	return (
		<MainWrapper>
			<Hero />
			<Categories />
			<FeaturedProducts />
			<About />
		</MainWrapper>
	);
}
