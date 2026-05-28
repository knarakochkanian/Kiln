'use client';

import { MouseEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tile } from '@/entities/tile';
import { cn } from '@/shared/lib/cn';

interface TilePlacementCellProps {
  cellId: string;
  tile: Tile | null;
  isActive: boolean;
  onPlace: (cellId: string) => void;
  onClear: (cellId: string) => void;
}

export const TilePlacementCell = ({
  cellId,
  tile,
  isActive,
  onPlace,
  onClear,
}: TilePlacementCellProps) => {
  const handleContextMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClear(cellId);
  };

  return (
    <motion.button
      type="button"
      onClick={() => onPlace(cellId)}
      onContextMenu={handleContextMenu}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      animate={tile ? { scale: [1, 1.06, 1] } : { scale: 1 }}
      transition={{ duration: 0.18 }}
      className={cn(
        'relative aspect-square overflow-hidden border-r-2 border-b-2 border-kiln-ink bg-kiln-cream',
        'transition-colors duration-200 hover:border-kiln-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kiln-clay',
        isActive && 'border-kiln-clay ring-2 ring-kiln-clay/30'
      )}
      title={tile ? tile.name : 'Empty tile cell'}
    >
      {tile && <Image src={tile.image} alt="" fill sizes="80px" className="object-cover" />}
      <span className="sr-only">{tile ? tile.name : 'Empty tile cell'}</span>
    </motion.button>
  );
};
