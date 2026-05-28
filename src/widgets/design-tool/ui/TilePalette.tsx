'use client';

import { INITIAL_TILES } from '@/entities/tile';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { designGridActions, selectSelectedTileId } from '@/entities/design-grid';
import { TileSelectButton } from '@/features/design-tool/select-tile';

export const TilePalette = () => {
  const dispatch = useAppDispatch();
  const selectedTileId = useAppSelector(selectSelectedTileId);

  const handleTileSelect = (tileId: string) => {
    if (selectedTileId === tileId) {
      dispatch(designGridActions.selectTile(null));
    } else {
      dispatch(designGridActions.selectTile(tileId));
    }
  };

  return (
    <aside className="bg-kiln-cream-dark">
      <h3 className="border-b-2 border-kiln-ink px-2 py-3 text-center font-display text-xl font-black uppercase leading-none text-kiln-ink">
        Design Palette
      </h3>
      <div className="grid grid-cols-2 gap-2 p-3">
        {INITIAL_TILES.map((tile) => (
          <TileSelectButton
            key={tile.id}
            tile={tile}
            isSelected={selectedTileId === tile.id}
            onSelect={handleTileSelect}
          />
        ))}
      </div>
    </aside>
  );
};
