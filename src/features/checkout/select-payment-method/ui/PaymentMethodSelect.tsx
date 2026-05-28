'use client';

import { PaymentMethod } from '@/entities/checkout';
import { cn } from '@/shared/lib/cn';

interface PaymentMethodOption {
  value: PaymentMethod;
  label: string;
  icon: string;
}

const PAYMENT_METHOD_OPTIONS: readonly PaymentMethodOption[] = [
  { value: 'credit-card', label: 'Credit/Debit Card', icon: 'CARD' },
  { value: 'paypal', label: 'PayPal', icon: 'P' },
  { value: 'apple-pay', label: 'Apple Pay', icon: 'Pay' },
  { value: 'bank-transfer', label: 'Bank Transfer', icon: 'BANK' },
];

interface PaymentMethodSelectProps {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
  variant?: 'desktop' | 'mobile';
}

export const PaymentMethodSelect = ({
  value,
  onChange,
  variant = 'desktop',
}: PaymentMethodSelectProps) => {
  return (
    <div
      className={cn(
        'grid border-2 border-kiln-ink bg-kiln-cream',
        variant === 'mobile' ? 'grid-cols-4' : 'grid-cols-2 gap-3 border-0 bg-transparent'
      )}
    >
      {PAYMENT_METHOD_OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            'relative flex min-h-[92px] flex-col items-center justify-center gap-2 border-kiln-ink bg-kiln-cream p-2 text-center font-display font-black uppercase leading-tight text-kiln-ink',
            variant === 'mobile' ? 'border-r-2 last:border-r-0' : 'rounded-md border-2',
            value === option.value && 'bg-kiln-cream-dark'
          )}
          aria-pressed={value === option.value}
        >
          <span
            className={cn(
              'absolute left-3 top-3 h-5 w-5 rounded-full border-2 border-kiln-ink bg-kiln-cream',
              value === option.value && 'after:absolute after:left-1 after:top-1 after:h-2.5 after:w-2.5 after:rounded-full after:bg-kiln-ink'
            )}
            aria-hidden="true"
          />
          <span
            className={cn(
              'flex h-9 min-w-12 items-center justify-center rounded-sm border-2 border-kiln-ink px-2 text-lg shadow-[2px_2px_0_#2E2A27]',
              option.value === 'paypal' && 'border-0 bg-transparent text-4xl text-[#243D7D] shadow-none',
              option.value === 'bank-transfer' && 'border-0 bg-transparent text-3xl text-[#2E6F63] shadow-none',
              option.value === 'credit-card' && 'bg-kiln-cream-dark text-xs',
              option.value === 'apple-pay' && 'bg-white text-2xl'
            )}
            aria-hidden="true"
          >
            {option.icon}
          </span>
          <span className="text-[11px] sm:text-[14px]">{option.label}</span>
        </button>
      ))}
    </div>
  );
};
