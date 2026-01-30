import type { CartProduct } from '../stores/cart';

export function getCartTotal(cart: CartProduct[] | null | undefined): number {
	if (!cart) return 0;
	return cart.reduce((total, product) => {
		return (total += product.price * product.quantity);
	}, 0);
}
