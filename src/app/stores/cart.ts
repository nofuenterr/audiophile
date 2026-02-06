import type { Product } from '../../types/product';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

export interface CartProduct extends Product {
	quantity: number;
}

export interface CartState {
	cart: CartProduct[];
	addProduct: (product: Product, quantity: number) => void;
	editProduct: (slug: string, quantity: number) => void;
	deleteProduct: (slug: string) => void;
	removeAllProducts: () => void;
}

export const useCartStore = create<CartState>()(
	persist(
		immer((set, get) => ({
			cart: [],
			addProduct: (product: Product, quantity: number) =>
				set((state) => {
					const cartProduct = state.cart.find(
						(p: CartProduct) => p.slug === product.slug
					);
					if (cartProduct) {
						Object.assign(cartProduct, {
							quantity: cartProduct.quantity + quantity,
						});
					} else {
						state.cart.push({
							...product,
							quantity,
						});
					}
				}),
			editProduct: (slug: string, quantity: number) =>
				set((state) => {
					const product = state.cart.find((p: CartProduct) => p.slug === slug);
					if (product) Object.assign(product, { quantity });
				}),
			deleteProduct: (slug: string) => {
				const product = get().cart.find((p: CartProduct) => p.slug === slug);
				if (!product) return 0;

				set((state) => {
					state.cart = state.cart.filter((p: CartProduct) => p.slug !== slug);
				});
			},
			removeAllProducts: () => set({ cart: [] }),
		})),
		{
			name: 'cart-storage',
		}
	)
);
