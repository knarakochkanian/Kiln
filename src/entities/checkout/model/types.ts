export type PaymentMethod = 'credit-card' | 'paypal' | 'apple-pay' | 'bank-transfer';

export interface CheckoutFormData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  projectNotes: string;
  cardNumber?: string;
  expirationDate?: string;
  cvv?: string;
  paymentMethod: PaymentMethod;
}

export interface CheckoutState {
  paymentMethod: PaymentMethod;
  formData: Partial<CheckoutFormData>;
}
