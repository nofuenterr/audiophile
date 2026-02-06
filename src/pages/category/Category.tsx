import { useParams } from 'react-router-dom';
import Categories from '../../components/sections/Categories';
import About from '../../components/sections/About';
import MainWrapper from '../../components/wrappers/MainWrapper';
import CategoryName from './CategoryName';
import CategoryProducts from './CategoryProducts';

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
