'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { useAppSelector } from '@/app/hooks';
import { selectCartItems } from '@/entities/cart';
import { cn } from '@/shared/lib/cn';

interface CartWidgetProps {
  className?: string;
}

const CART_COLUMNS = [
  'Tile Collection',
  'Item',
  'Quantity (sq. ft.)',
  'Unit Price ($)',
  'Actions',
];

export const CartWidget = ({ className }: CartWidgetProps) => {
  const items = useAppSelector(selectCartItems);

  if (items.length === 0) {
    return (
      <div className={cn('border-2 border-kiln-ink bg-kiln-cream p-4', className)}>
        <p className="font-display text-lg font-black uppercase text-kiln-ink">
          Your cart is empty
        </p>
      </div>
    );
  }

  return (
    <section className={cn('w-full', className)}>
      <div className="overflow-x-auto">
        <div className="min-w-[620px] overflow-hidden border-2 border-kiln-ink bg-kiln-cream">
          <div className="grid grid-cols-[1.18fr_0.92fr_0.86fr_0.9fr_0.72fr] border-b-2 border-kiln-ink">
            {CART_COLUMNS.map((column) => (
              <div
                key={column}
                className="flex min-h-[46px] items-center justify-center border-r-2 border-kiln-ink px-1 text-center last:border-r-0"
              >
                <span className="font-display text-[12px] font-black uppercase leading-tight text-kiln-ink sm:text-[14px]">
                  {column}
                </span>
              </div>
            ))}
          </div>

          <motion.div layout>
            <AnimatePresence initial={false}>
              {items.map((item, index) => (
                <motion.div
                  key={item.tile.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  layout
                  transition={{ delay: index * 0.03, duration: 0.2 }}
                >
                  <CartItem item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[minmax(0,1fr)_minmax(220px,0.85fr)] items-start gap-3">
        <button
          type="button"
          className="flex min-h-12 items-center justify-center gap-2 border-2 border-kiln-ink bg-kiln-cream-dark px-3 font-display text-sm font-black uppercase leading-tight text-kiln-ink shadow-[2px_2px_0_#2E2A27]"
        >
          <span className="text-3xl leading-none">+</span>
          <span className="relative h-7 w-7 overflow-hidden border border-kiln-ink bg-tile-terracotta-dot bg-cover" />
          Add New Tile To Cart
        </button>
        <CartSummary />
      </div>
    </section>
  );
};
