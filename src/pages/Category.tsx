import CategoryName from '../components/category/CategoryName';
import CategoryProducts from '../components/category/CategoryProducts';
import Categories from '../components/shared/Categories';
import About from '../components/shared/About';
import { useParams } from 'react-router-dom';

export default function Category() {
	const params = useParams();
	const category = params.category as string;

	return (
		<main className="flex flex-col gap-10 md:gap-24 lg:gap-30">
			<CategoryName category={category} />
			<CategoryProducts category={category} />
			<Categories />
			<About />
		</main>
	);
}
