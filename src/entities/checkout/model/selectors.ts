import { RootState } from '@/app/store';

export const selectPaymentMethod = (state: RootState) => state.checkout.paymentMethod;

export const selectCheckoutFormData = (state: RootState) => state.checkout.formData;
