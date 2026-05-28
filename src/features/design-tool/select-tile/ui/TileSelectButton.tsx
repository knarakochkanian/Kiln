'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tile, TileId } from '@/entities/tile';
import { cn } from '@/shared/lib/cn';
import { formatCurrency } from '@/shared/lib/formatCurrency';

interface TileSelectButtonProps {
  tile: Tile;
  isSelected: boolean;
  onSelect: (tileId: TileId) => void;
}

export const TileSelectButton = ({ tile, isSelected, onSelect }: TileSelectButtonProps) => {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(tile.id)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-pressed={isSelected}
      className={cn(
        'rounded-sm border-2 bg-kiln-cream p-1.5 text-center transition-colors duration-200',
        isSelected
          ? 'border-kiln-clay shadow-md ring-2 ring-kiln-clay/20'
          : 'border-kiln-muted-light hover:border-kiln-muted'
      )}
    >
      <span className="relative mb-2 block aspect-square w-full overflow-hidden rounded-md border border-kiln-ink/20">
        <Image src={tile.image} alt="" fill sizes="96px" className="object-cover" />
      </span>
      <span className="block font-display text-[10px] font-black uppercase leading-tight text-kiln-ink">
        {tile.name}
      </span>
      <span className="block text-[10px] font-bold text-kiln-muted">
        {formatCurrency(tile.price)}
      </span>
    </motion.button>
  );
};
