import CategoryName from '../components/category/CategoryName';
import CategoryProducts from '../components/category/CategoryProducts';
import Categories from '../components/shared/Categories';
import About from '../components/shared/About';
import { useParams } from 'react-router-dom';
import MainWrapper from '../components/shared/MainWrapper';

export default function Category() {
	const params = useParams();
	const category = params.category as string;

	return (
		<MainWrapper>
			<CategoryName category={category} />
			<CategoryProducts category={category} />
			<Categories />
			<About />
		</MainWrapper>
	);
}
