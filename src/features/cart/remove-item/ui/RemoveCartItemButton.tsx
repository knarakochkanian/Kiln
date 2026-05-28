'use client';

import { motion } from 'framer-motion';

interface RemoveCartItemButtonProps {
  onRemove: () => void;
}

export const RemoveCartItemButton = ({ onRemove }: RemoveCartItemButtonProps) => {
  return (
    <motion.button
      type="button"
      onClick={onRemove}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Remove cart item"
      className="flex flex-col items-center gap-1 text-[10px] font-black uppercase leading-none text-kiln-ink"
    >
      <span className="relative flex h-7 w-8 items-center justify-center rounded-sm border-2 border-kiln-ink bg-kiln-terracotta text-lg leading-none text-kiln-cream shadow-[2px_2px_0_#2E2A27]">
        -
        <span className="absolute -top-2 h-2 w-5 rounded-t-sm border-2 border-b-0 border-kiln-ink bg-kiln-terracotta" />
      </span>
      Remove
    </motion.button>
  );
};
