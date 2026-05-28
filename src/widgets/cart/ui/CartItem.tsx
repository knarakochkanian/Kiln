'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CartItem as ICartItem, cartActions } from '@/entities/cart';
import { QuantityControls } from '@/features/cart/change-quantity/ui/QuantityControls';
import { RemoveCartItemButton } from '@/features/cart/remove-item/ui/RemoveCartItemButton';
import { formatCurrency } from '@/shared/lib/formatCurrency';
import { useAppDispatch } from '@/app/hooks';

interface CartItemProps {
  item: ICartItem;
}

export const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(cartActions.removeCartItem(item.tile.id));
  };

  const handleIncrease = () => {
    dispatch(cartActions.increaseQuantity(item.tile.id));
  };

  const handleSetQuantity = (quantity: number) => {
    dispatch(cartActions.setQuantity({ tileId: item.tile.id, quantity }));
  };

  return (
    <div className="grid min-h-[96px] grid-cols-[1.18fr_0.92fr_0.86fr_0.9fr_0.72fr] border-b-2 border-kiln-ink last:border-b-0 sm:min-h-[112px]">
      <div className="flex min-w-0 flex-col items-center justify-center gap-1 border-r-2 border-kiln-ink p-1.5 text-center sm:p-2">
        <div className="relative h-10 w-10 overflow-hidden border-2 border-kiln-ink bg-kiln-cream sm:h-14 sm:w-14">
          <Image src={item.tile.image} alt="" fill sizes="72px" className="object-cover" />
        </div>
        <p className="font-display text-[11px] font-black uppercase leading-tight text-kiln-ink sm:text-[13px]">
          {item.tile.name}
        </p>
      </div>

      <div className="flex items-center justify-center border-r-2 border-kiln-ink p-1.5 sm:p-2">
        <div className="relative h-14 w-full max-w-[92px] overflow-hidden bg-kiln-cream sm:h-20">
          <Image src={item.tile.image} alt="" fill sizes="112px" className="object-cover" />
        </div>
      </div>

      <div className="flex items-center justify-center border-r-2 border-kiln-ink p-1">
        <QuantityControls
          quantity={item.quantity}
          onChangeQuantity={handleSetQuantity}
        />
      </div>

      <div className="flex items-center justify-center border-r-2 border-kiln-ink p-1 text-center">
        <p className="font-display text-[16px] font-black text-kiln-ink sm:text-xl">
          [ {formatCurrency(item.tile.price)} ]
        </p>
      </div>

      <div className="flex items-center justify-center gap-1 p-1 sm:gap-2">
        <motion.button
          type="button"
          onClick={handleIncrease}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.96 }}
          className="flex flex-col items-center gap-1 text-[10px] font-black uppercase leading-none text-kiln-ink"
          aria-label={`Add ${item.tile.name}`}
        >
          <span className="flex h-7 w-8 items-center justify-center rounded-sm border-2 border-kiln-ink bg-[#6BAE9A] text-2xl leading-none text-kiln-cream shadow-[2px_2px_0_#2E2A27]">
            +
          </span>
          Add
        </motion.button>
        <RemoveCartItemButton onRemove={handleRemove} />
      </div>
    </div>
  );
};
