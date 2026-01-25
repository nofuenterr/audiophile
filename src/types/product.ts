export interface Images {
	mobile: string;
	tablet: string;
	desktop: string;
}

export interface Item {
	quantity: number;
	item: string;
}

export interface Gallery {
	first: Images;
	second: Images;
	third: Images;
}

export interface Recommendation {
	slug: string;
	name: string;
	image: Images;
}

export interface Product {
	id: number;
	slug: string;
	name: string;
	image: Images;
	category: string;
	categoryImage: Images;
	new: boolean;
	price: number;
	description: string;
	features: string;
	includes: Item[];
	gallery: Gallery;
	others: Recommendation[];
	cartImage: string;
}
