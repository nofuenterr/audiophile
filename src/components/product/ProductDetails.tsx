import type { Product } from '../../types/product';

type ProductDetailsType = Pick<
	Product,
	'image' | 'new' | 'name' | 'description' | 'price' | 'features' | 'includes'
>;

export default function ProductDetails({
	productDetails,
}: {
	productDetails: ProductDetailsType;
}) {
	return (
		<section className="grid gap-10 md:gap-24 lg:gap-30">
			<div className="grid gap-8 md:grid-cols-2 md:gap-17 lg:gap-30">
				<ProductImage image={productDetails.image} name={productDetails.name} />
				<ProductInfo
					new={productDetails.new}
					name={productDetails.name}
					description={productDetails.description}
					price={productDetails.price}
				/>
			</div>
			<div className="grid gap-10 md:gap-24 lg:grid-cols-[1fr_21.875rem] lg:gap-30">
				<ProductFeatures features={productDetails.features} />
				<ProductItems includes={productDetails.includes} />
			</div>
		</section>
	);
}

type ProductImageType = Pick<ProductDetailsType, 'image' | 'name'>;

function ProductImage({ image, name }: ProductImageType) {
	return (
		<div className="bg-light-700 max-h-82 w-full overflow-hidden rounded-lg md:max-h-120 md:min-w-60 lg:max-h-140 lg:min-w-70">
			<picture>
				<source media="(min-width: 1024px)" srcSet={image.desktop} />
				<source media="(min-width: 768px)" srcSet={image.tablet} />
				<img
					src={image.mobile}
					alt={`${name} image`}
					className="m-auto h-full w-auto"
					loading="eager"
				/>
			</picture>
		</div>
	);
}

type ProductInfoType = Pick<
	ProductDetailsType,
	'new' | 'name' | 'description' | 'price'
>;

function ProductInfo({
	new: isNew,
	name,
	description,
	price,
}: ProductInfoType) {
	return (
		<div className="md:self-center">
			{isNew ? (
				<p className="text-primary text-overline mb-6 md:mb-4">New Product</p>
			) : null}
			<h1 className="heading mb-6 text-[1.75rem] leading-9.5 tracking-[2px] md:mb-8 lg:text-[2.5rem] lg:leading-11 lg:tracking-[1.5px]">
				{name}
			</h1>
			<p className="mb-6 opacity-50 md:mb-8">{description}</p>
			<p className="heading heading-6 mb-8 lg:mb-12">$ {price}</p>
			<div className="flex flex-wrap items-center gap-4">
				<div className="bg-light-700 flex w-30 items-center gap-5 p-4">
					<button className="subtitle hover:text-primary grid size-4 cursor-pointer place-content-center opacity-25 hover:opacity-100">
						-
					</button>
					<input
						type="number"
						min={1}
						className="no-spinner subtitle w-full text-center"
					/>
					<button className="subtitle hover:text-primary grid size-4 cursor-pointer place-content-center opacity-25 hover:opacity-100">
						+
					</button>
				</div>
				<button className="bg-primary hover:bg-primary-hover text-light-900 subtitle cursor-pointer px-8 py-4">
					Add to cart
				</button>
			</div>
		</div>
	);
}

type ProductFeaturesType = Pick<ProductDetailsType, 'features'>;

function ProductFeatures({ features }: ProductFeaturesType) {
	return (
		<div className="grid gap-6 md:gap-8">
			<h2 className="heading text-2xl leading-8.25 tracking-[1.7px] md:text-[2rem] md:leading-9 md:tracking-[1.15px]">
				Features
			</h2>
			<p className="opacity-50">{features}</p>
		</div>
	);
}

type ProductItemsType = Pick<ProductDetailsType, 'includes'>;

function ProductItems({ includes: items }: ProductItemsType) {
	return (
		<div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-1 lg:content-start">
			<h2 className="heading text-2xl leading-8.25 tracking-[1.7px] md:text-[2rem] md:leading-9 md:tracking-[1.15px]">
				In the box
			</h2>
			<ul className="grid gap-2">
				{items.map((item) => {
					return (
						<li key={item.item} className="grid grid-cols-[3ch_1fr] gap-4">
							<p className="quantity text-primary">{item.quantity}x</p>
							<p className="opacity-50">{item.item}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
