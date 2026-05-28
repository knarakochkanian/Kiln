'use client';

import Image from 'next/image';
import { Tile } from '@/entities/tile/model/types';
import { formatCurrency } from '@/shared/lib/formatCurrency';
import { cn } from '@/shared/lib/cn';

interface TilePreviewProps {
  tile: Tile;
  compact?: boolean;
}

export const TilePreview = ({ tile, compact = false }: TilePreviewProps) => {
  return (
    <div className={cn('flex items-center gap-3', compact && 'gap-2')}>
      <div
        className={cn(
          'relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border border-kiln-ink/20 shadow-sm',
          compact && 'h-10 w-10'
        )}
        title={tile.name}
      >
        <Image src={tile.image} alt="" fill sizes="48px" className="object-cover" />
      </div>
      <div className="flex-grow">
        <p className="text-sm font-medium text-kiln-ink">{tile.name}</p>
        <p className="text-xs text-kiln-muted">{formatCurrency(tile.price)}</p>
      </div>
    </div>
  );
};
