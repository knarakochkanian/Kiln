import { CartItem } from './types';

export const STANDARD_SHIPPING = 25;
export const FREE_SHIPPING_THRESHOLD = 500;

export const calculateSubtotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.tile.price * item.quantity, 0);
};

export const calculateShipping = (subtotal: number): number => {
  return subtotal > FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
};

export const calculateGrandTotal = (subtotal: number, shipping: number): number => {
  return subtotal + shipping;
};

export const calculateCartItemTotal = (item: CartItem): number => {
  return item.tile.price * item.quantity;
};
