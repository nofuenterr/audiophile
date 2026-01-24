import CategoryName from '../components/category/CategoryName';
import CategoryProducts from '../components/category/CategoryProducts';
import Categories from '../components/shared/Categories';
import About from '../components/shared/About';

export default function Category() {
	return (
		<main>
			<CategoryName />
			<CategoryProducts />
			<Categories />
			<About />
		</main>
	);
}
