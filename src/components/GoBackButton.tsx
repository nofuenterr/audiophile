import { useNavigate } from 'react-router-dom';
import ContentWrapper from './wrappers/ContentWrapper';

export default function GoBackButton() {
	const navigate = useNavigate();

	return (
		<ContentWrapper className="w-full px-6 pt-4 pb-6 md:px-10 md:pt-8 lg:pt-20 lg:pb-14">
			<button
				onClick={() => navigate(-1)}
				className="hover:text-primary cursor-pointer opacity-50 hover:opacity-100"
			>
				Go Back
			</button>
		</ContentWrapper>
	);
}
