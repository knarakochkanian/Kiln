'use client';

import { ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CheckoutFormInput } from '@/entities/checkout';
import { sanitizeDigits, sanitizeExpirationDate } from '@/shared/lib/inputSanitizers';

interface CardDetailsFieldsProps {
  register: UseFormRegister<CheckoutFormInput>;
  errors: FieldErrors<CheckoutFormInput>;
}

export const CardDetailsFields = ({ register, errors }: CardDetailsFieldsProps) => {
  const cardNumberRegistration = register('cardNumber');
  const expirationDateRegistration = register('expirationDate');
  const cvvRegistration = register('cvv');

  const handleCardNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.currentTarget.value = sanitizeDigits(event.currentTarget.value, 16);
    void cardNumberRegistration.onChange(event);
  };

  const handleExpirationDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.currentTarget.value = sanitizeExpirationDate(event.currentTarget.value);
    void expirationDateRegistration.onChange(event);
  };

  const handleCvvChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.currentTarget.value = sanitizeDigits(event.currentTarget.value, 4);
    void cvvRegistration.onChange(event);
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-md border-2 border-kiln-ink bg-kiln-cream-dark p-3"
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="h-5 w-5 rounded-full border-2 border-kiln-ink bg-kiln-cream after:mx-auto after:mt-1 after:block after:h-2.5 after:w-2.5 after:rounded-full after:bg-kiln-ink" />
        <span className="rounded-sm border-2 border-kiln-ink bg-white px-2 py-0.5 font-display text-sm font-black text-[#243D7D]">
          VISA
        </span>
        <span className="rounded-sm border-2 border-kiln-ink bg-white px-2 py-0.5 font-display text-sm font-black text-kiln-terracotta">
          MC
        </span>
      </div>

      <label className="mb-2 block">
        <span className="mb-1 block font-display text-xs font-black uppercase text-kiln-ink">
          Card Number
        </span>
        <input
          placeholder="1234455677238990"
          inputMode="numeric"
          maxLength={16}
          className="h-9 w-full rounded-sm border-2 border-kiln-ink bg-kiln-cream px-2 font-display text-base font-black text-kiln-ink placeholder:text-kiln-muted"
          {...cardNumberRegistration}
          onChange={handleCardNumberChange}
        />
        {errors.cardNumber?.message && (
          <span className="mt-1 block text-xs font-semibold text-red-700">
            {errors.cardNumber.message}
          </span>
        )}
      </label>

      <div className="grid grid-cols-2 gap-2">
        <label className="block">
          <input
            placeholder="MM/YY"
            inputMode="numeric"
            maxLength={5}
            className="h-9 w-full rounded-sm border-2 border-kiln-ink bg-kiln-cream px-2 font-display text-sm font-black uppercase text-kiln-ink placeholder:text-kiln-muted"
            {...expirationDateRegistration}
            onChange={handleExpirationDateChange}
          />
          {errors.expirationDate?.message && (
            <span className="mt-1 block text-xs font-semibold text-red-700">
              {errors.expirationDate.message}
            </span>
          )}
        </label>
        <label className="block">
          <input
            placeholder="CVV"
            type="password"
            inputMode="numeric"
            maxLength={4}
            className="h-9 w-full rounded-sm border-2 border-kiln-ink bg-kiln-cream px-2 font-display text-sm font-black uppercase text-kiln-ink placeholder:text-kiln-muted"
            {...cvvRegistration}
            onChange={handleCvvChange}
          />
          {errors.cvv?.message && (
            <span className="mt-1 block text-xs font-semibold text-red-700">
              {errors.cvv.message}
            </span>
          )}
        </label>
      </div>
    </motion.div>
  );
};
