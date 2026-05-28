'use client';

import { PaymentMethod } from '@/entities/checkout';
import { PaymentMethodSelect } from '@/features/checkout/select-payment-method';

interface PaymentMethodTabsProps {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
  variant?: 'desktop' | 'mobile';
}

export const PaymentMethodTabs = ({
  value,
  onChange,
  variant = 'desktop',
}: PaymentMethodTabsProps) => {
  return (
    <div>
      <h4 className="mb-0 inline-block border-2 border-b-0 border-kiln-ink bg-kiln-cream px-2 py-1 font-display text-lg font-black uppercase leading-none text-kiln-ink">
        Select Payment Method:
      </h4>
      <PaymentMethodSelect value={value} onChange={onChange} variant={variant} />
    </div>
  );
};
