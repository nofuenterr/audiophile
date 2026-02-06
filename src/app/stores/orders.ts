import type { CartProduct } from './cart';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

export interface Order {
	items: CartProduct[];
	date: Date;
}

export interface OrdersState {
	orders: Order[];
	addOrder: (order: CartProduct[]) => void;
}

export const useOrdersStore = create<OrdersState>()(
	persist(
		immer((set) => ({
			orders: [],
			addOrder: (order: CartProduct[]) =>
				set((state) => {
					state.orders.push({
						items: order,
						date: new Date(),
					});
				}),
		})),
		{
			name: 'orders-storage',
		}
	)
);
