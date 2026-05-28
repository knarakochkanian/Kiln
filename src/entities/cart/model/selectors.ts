import { RootState } from '@/app/store';
import {
  calculateGrandTotal,
  calculateShipping,
  calculateSubtotal,
} from './calculations';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartSubtotal = (state: RootState) => {
  return calculateSubtotal(state.cart.items);
};

export const selectCartShipping = (state: RootState) => {
  const subtotal = calculateSubtotal(state.cart.items);
  return calculateShipping(subtotal);
};

export const selectCartGrandTotal = (state: RootState) => {
  const subtotal = calculateSubtotal(state.cart.items);
  const shipping = calculateShipping(subtotal);
  return calculateGrandTotal(subtotal, shipping);
};

export const selectCartItemCount = (state: RootState) => {
  return state.cart.items.reduce((count, item) => count + item.quantity, 0);
};
