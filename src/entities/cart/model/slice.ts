import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  INITIAL_CART_QUANTITY_BY_TILE_ID,
  INITIAL_TILES,
} from '@/entities/tile/model/constants';
import { CartState } from './types';

const initialState: CartState = {
  items: INITIAL_TILES.map((tile) => ({
    tile,
    quantity: INITIAL_CART_QUANTITY_BY_TILE_ID[tile.id],
  })),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.tile.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.tile.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    setQuantity: (state, action: PayloadAction<{ tileId: string; quantity: number }>) => {
      const item = state.items.find((item) => item.tile.id === action.payload.tileId);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      }
    },

    removeCartItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.tile.id !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
