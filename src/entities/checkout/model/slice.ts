import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckoutState, PaymentMethod, CheckoutFormData } from './types';

const initialState: CheckoutState = {
  paymentMethod: 'credit-card',
  formData: {},
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.paymentMethod = action.payload;
    },

    setFormData: (state, action: PayloadAction<Partial<CheckoutFormData>>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },

    resetCheckout: () => initialState,
  },
});

export const checkoutActions = checkoutSlice.actions;
export const checkoutReducer = checkoutSlice.reducer;
