import ContentWrapper from '../shared/ContentWrapper';

export default function CategoryName({ category }: { category: string }) {
	return (
		<section className="bg-dark-900 text-light-900">
			<ContentWrapper className="grid place-content-center py-8 text-center md:py-24">
				<h1 className="heading text-[1.75rem] leading-9.5 tracking-[2px] md:text-[2.5rem] md:leading-11 md:tracking-[1.5px]">
					{category}
				</h1>
			</ContentWrapper>
		</section>
	);
}
