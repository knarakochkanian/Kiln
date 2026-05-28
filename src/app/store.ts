import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/entities/cart';
import { designGridReducer } from '@/entities/design-grid';
import { checkoutReducer } from '@/entities/checkout';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    designGrid: designGridReducer,
    checkout: checkoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
