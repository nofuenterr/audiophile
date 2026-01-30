import type { CartProduct } from '../stores/cart';

export function getCartTotal(cart: CartProduct[]): number {
	return cart.reduce((total, product) => {
		return (total += product.price * product.quantity);
	}, 0);
}
