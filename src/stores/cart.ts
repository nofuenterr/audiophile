import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import type { Product } from '../types/product';

export interface CartProduct extends Product {
	quantity: number;
}

export interface CartState {
	cart: CartProduct[];
	addProduct: (product: Product, quantity: number) => void;
	editProduct: (slug: string, quantity: number) => void;
	deleteProduct: (slug: string) => void;
}

export const useCartStore = create<CartState>()(
	persist(
		immer((set, get) => ({
			cart: [],
			addProduct: (product: Product, quantity: number) =>
				set((state) => {
					state.cart.push({
						...product,
						quantity,
					});
				}),
			editProduct: (slug: string, quantity: number) =>
				set((state) => {
					const product = state.cart.find((p: CartProduct) => p.slug === slug);
					if (product) Object.assign(product, quantity);
				}),
			deleteProduct: (slug: string) => {
				const product = get().cart.find((p: CartProduct) => p.slug === slug);
				if (!product) return 0;

				set((state) => {
					state.cart = state.cart.filter((p: CartProduct) => p.slug !== slug);
				});
			},
		})),
		{
			name: 'cart-storage',
		}
	)
);
