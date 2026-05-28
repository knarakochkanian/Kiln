'use client';

import { formatCurrency } from '@/shared/lib/formatCurrency';
import { useAppSelector } from '@/app/hooks';
import {
  FREE_SHIPPING_THRESHOLD,
  selectCartGrandTotal,
  selectCartShipping,
  selectCartSubtotal,
} from '@/entities/cart';

export const CartSummary = () => {
  const subtotal = useAppSelector(selectCartSubtotal);
  const shipping = useAppSelector(selectCartShipping);
  const grandTotal = useAppSelector(selectCartGrandTotal);

  return (
    <div className="space-y-1 font-display text-sm font-black uppercase leading-tight text-kiln-ink sm:text-base">
      <SummaryRow label="Subtotal" value={formatCurrency(subtotal)} />
      <SummaryRow
        label={`Shipping${subtotal > FREE_SHIPPING_THRESHOLD ? ' Free' : ''}`}
        value={formatCurrency(shipping)}
      />
      <SummaryRow label="Grand Total" value={formatCurrency(grandTotal)} />
    </div>
  );
};

interface SummaryRowProps {
  label: string;
  value: string;
}

const SummaryRow = ({ label, value }: SummaryRowProps) => {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_96px] items-center gap-2">
      <span className="text-right">{label}:</span>
      <span className="flex h-8 items-center justify-center border-2 border-kiln-ink bg-kiln-cream px-1">
        [ {value} ]
      </span>
    </div>
  );
};
