import Categories from '../../components/sections/Categories';
import About from '../../components/sections/About';
import MainWrapper from '../../components/wrappers/MainWrapper';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';

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
