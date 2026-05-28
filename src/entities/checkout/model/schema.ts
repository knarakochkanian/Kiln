import { z } from 'zod';

const paymentMethodSchema = z.enum(['credit-card', 'paypal', 'apple-pay', 'bank-transfer'] as const);
const digitsOnlyRegex = /^\d+$/;
const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

export const checkoutSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, 'Full Name must be at least 2 characters')
      .max(80, 'Full Name must be 80 characters or less'),
    email: z
      .string()
      .trim()
      .min(1, 'Email is required')
      .max(120, 'Email must be 120 characters or less')
      .email('Enter a valid email'),
    address: z
      .string()
      .trim()
      .min(5, 'Address must be at least 5 characters')
      .max(120, 'Address must be 120 characters or less'),
    city: z
      .string()
      .trim()
      .min(2, 'City must be at least 2 characters')
      .max(80, 'City must be 80 characters or less'),
    zipCode: z
      .string()
      .trim()
      .length(5, 'ZIP Code must contain exactly 5 digits')
      .regex(digitsOnlyRegex, 'ZIP Code must contain only digits'),
    phone: z
      .string()
      .trim()
      .min(7, 'Phone must contain at least 7 digits')
      .max(15, 'Phone must contain 15 digits or less')
      .regex(digitsOnlyRegex, 'Phone must contain only digits'),
    projectNotes: z
      .string()
      .trim()
      .min(2, 'Project notes are required')
      .max(200, 'Project notes must be 200 characters or less'),
    paymentMethod: paymentMethodSchema,
    cardNumber: z.string().optional(),
    expirationDate: z.string().optional(),
    cvv: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod !== 'credit-card') {
      return;
    }

    const normalizedCardNumber = data.cardNumber?.replace(/\s/g, '') ?? '';

    if (!digitsOnlyRegex.test(normalizedCardNumber) || normalizedCardNumber.length !== 16) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['cardNumber'],
        message: 'Card Number must contain exactly 16 digits',
      });
    }

    if (!data.expirationDate || !expirationDateRegex.test(data.expirationDate)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['expirationDate'],
        message: 'Expiration Date must use MM/YY',
      });
    }

    if (!data.cvv || !/^\d{3,4}$/.test(data.cvv)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['cvv'],
        message: 'CVV must contain 3 or 4 digits',
      });
    }
  });

export type CheckoutFormInput = z.infer<typeof checkoutSchema>;
