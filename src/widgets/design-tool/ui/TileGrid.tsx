'use client';

import { INITIAL_TILES } from '@/entities/tile';
import { TileCell } from './TileCell';
import { useAppSelector } from '@/app/hooks';
import { selectDesignGridCells } from '@/entities/design-grid';

export const TileGrid = () => {
  const cells = useAppSelector(selectDesignGridCells);
  const tilesMap = new Map(INITIAL_TILES.map((t) => [t.id, t]));

  return (
    <div className="grid grid-cols-6 bg-kiln-cream">
      {cells.map((cell) => {
        const tile = cell.tileId ? tilesMap.get(cell.tileId) : null;
        return <TileCell key={cell.id} cellId={cell.id} tile={tile || null} />;
      })}
    </div>
  );
};
