'use client';

import { Tile } from '@/entities/tile';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { designGridActions, selectSelectedTileId } from '@/entities/design-grid';
import { TilePlacementCell } from '@/features/design-tool/place-tile';

interface TileCellProps {
  cellId: string;
  tile: Tile | null;
}

export const TileCell = ({ cellId, tile }: TileCellProps) => {
  const dispatch = useAppDispatch();
  const selectedTileId = useAppSelector(selectSelectedTileId);
  const isSelected = selectedTileId === tile?.id;

  const handleCellClick = (targetCellId: string) => {
    if (selectedTileId) {
      dispatch(designGridActions.placeTileToCell({ cellId: targetCellId, tileId: selectedTileId }));
    }
  };

  const handleCellClear = (targetCellId: string) => {
    dispatch(designGridActions.clearCell(targetCellId));
  };

  return (
    <TilePlacementCell
      cellId={cellId}
      tile={tile}
      isActive={isSelected}
      onPlace={handleCellClick}
      onClear={handleCellClear}
    />
  );
};
