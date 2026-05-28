'use client';

import { PaymentMethodTabs } from './PaymentMethodTabs';
import { CheckoutForm } from './CheckoutForm';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectPaymentMethod, checkoutActions, CheckoutFormInput } from '@/entities/checkout';
import { cn } from '@/shared/lib/cn';
import { ReactNode } from 'react';

interface CheckoutWidgetProps {
  onOrderSubmit?: (data: CheckoutFormInput) => void;
  variant?: 'desktop' | 'mobile';
  cartSlot?: ReactNode;
  summarySlot?: ReactNode;
  className?: string;
}

export const CheckoutWidget = ({
  onOrderSubmit,
  variant = 'desktop',
  cartSlot,
  summarySlot,
  className,
}: CheckoutWidgetProps) => {
  const dispatch = useAppDispatch();
  const paymentMethod = useAppSelector(selectPaymentMethod);

  const handlePaymentMethodChange = (method: typeof paymentMethod) => {
    dispatch(checkoutActions.setPaymentMethod(method));
  };

  const handleSubmit = (data: CheckoutFormInput) => {
    dispatch(checkoutActions.setFormData(data));
    onOrderSubmit?.(data);
  };

  const paymentMethodsSlot = (
    <PaymentMethodTabs
      value={paymentMethod}
      onChange={handlePaymentMethodChange}
      variant={variant}
    />
  );

  if (variant === 'mobile') {
    return (
      <section className={cn('space-y-5', className)}>
        <CheckoutForm
          variant="mobile"
          onSubmit={handleSubmit}
          cartSlot={cartSlot}
          paymentMethodsSlot={paymentMethodsSlot}
        />
      </section>
    );
  }

  return (
    <aside className={cn('border-2 border-kiln-ink bg-kiln-cream p-3', className)}>
      <h2 className="mb-3 inline-block border-2 border-kiln-ink bg-kiln-cream px-3 py-1 font-display text-2xl font-black uppercase leading-none text-kiln-ink">
        Order Summary
      </h2>
      <CheckoutForm
        onSubmit={handleSubmit}
        paymentMethodsSlot={paymentMethodsSlot}
        summarySlot={summarySlot}
      />
    </aside>
  );
};
