import { useEffect, useRef, useState } from 'react';
import type { Product } from '../../types/product';
import formatPrice from '../../utils/formatPrice';
import ContentWrapper from '../../components/wrappers/ContentWrapper';
import { useCartStore } from '../../app/stores/cart';
import CartToast from './CartToast';

export default function ProductDetails({ product }: { product: Product }) {
	return (
		<section>
			<ContentWrapper className="grid gap-16 md:gap-24 lg:gap-30">
				<div className="grid gap-8 md:grid-cols-2 md:gap-17 lg:gap-30">
					<ProductImage image={product.image} name={product.name} />
					<ProductInfo product={product} />
				</div>
				<div className="grid gap-10 md:gap-24 lg:grid-cols-[1fr_21.875rem] lg:gap-30">
					<ProductFeatures features={product.features} />
					<ProductItems includes={product.includes} />
				</div>
			</ContentWrapper>
		</section>
	);
}

type ProductImageType = Pick<Product, 'image' | 'name'>;

function ProductImage({ image, name }: ProductImageType) {
	return (
		<div className="bg-light-700 h-82 w-full overflow-hidden rounded-lg md:h-120 md:min-w-60 lg:h-140 lg:min-w-70">
			<picture key={image.mobile} className="block h-full w-full">
				<source media="(min-width: 1024px)" srcSet={image.desktop} />
				<source media="(min-width: 768px)" srcSet={image.tablet} />
				<img
					src={image.mobile}
					alt={name}
					className="h-full w-full object-contain object-center"
				/>
			</picture>
		</div>
	);
}

function ProductInfo({ product }: { product: Product }) {
	const [quantity, setQuantity] = useState<number>(1);
	const addProduct = useCartStore((s) => s.addProduct);

	const [open, setOpen] = useState(false);
	const timerRef = useRef(0);

	useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	return (
		<div className="md:self-center">
			{product.new ? (
				<p className="text-primary text-overline mb-6 md:mb-4">New Product</p>
			) : null}
			<h1 className="heading mb-6 text-[1.75rem] leading-9.5 tracking-[2px] md:mb-8 lg:text-[2.5rem] lg:leading-11 lg:tracking-[1.5px]">
				{product.name}
			</h1>
			<p className="mb-6 opacity-50 md:mb-8">{product.description}</p>
			<p className="heading heading-6 mb-8 lg:mb-12">
				$ {formatPrice(product.price)}
			</p>
			<div className="flex flex-wrap items-center gap-4">
				<div className="bg-light-700 flex w-30 items-center gap-5 p-4">
					{quantity > 1 ? (
						<button
							aria-label="decrement quantity"
							className="subtitle hover:text-primary grid size-4 cursor-pointer place-content-center opacity-25 hover:opacity-100"
							onClick={() => {
								if (quantity > 1) setQuantity((s) => s - 1);
							}}
						>
							-
						</button>
					) : (
						<div className="size-4"></div>
					)}
					<input
						type="text"
						min={1}
						value={quantity}
						onChange={(e) => {
							const value = parseInt(e.target.value);
							if (/^\d*$/.test(String(value)) && value) {
								setQuantity(value);
							}
						}}
						inputMode="numeric"
						pattern="[0-9]*"
						className="subtitle w-full text-center"
					/>
					<button
						aria-label="increment quantity"
						className="subtitle hover:text-primary grid size-4 cursor-pointer place-content-center opacity-25 hover:opacity-100"
						onClick={() => {
							setQuantity((s) => s + 1);
						}}
					>
						+
					</button>
				</div>

				<CartToast
					product={product}
					quantity={quantity}
					open={open}
					setOpen={setOpen}
				>
					<button
						className="bg-primary hover:bg-primary-hover text-light-900 subtitle cursor-pointer px-8 py-4"
						onClick={() => {
							addProduct(product, quantity);
							setOpen(false);
							window.clearTimeout(timerRef.current);
							timerRef.current = window.setTimeout(() => {
								setOpen(true);
							}, 100);
						}}
					>
						Add to cart
					</button>
				</CartToast>
			</div>
		</div>
	);
}

type ProductFeaturesType = Pick<Product, 'features'>;

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

type ProductItemsType = Pick<Product, 'includes'>;

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
