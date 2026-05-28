import { TileId } from '@/entities/tile/model/types';

export interface DesignGridCell {
  id: string;
  tileId: TileId | null;
}

export interface DesignGridState {
  cells: DesignGridCell[];
  selectedTileId: TileId | null;
}

export const GRID_COLUMNS = 6;
export const GRID_SIZE = GRID_COLUMNS * GRID_COLUMNS;

export const INITIAL_GRID_TILE_IDS: Array<TileId | null> = [
  'yellow-star',
  'ocean-wave',
  'yellow-star',
  'terracotta-dot',
  null,
  null,
  'ocean-wave',
  'terracotta-dot',
  'yellow-star',
  'ocean-wave',
  null,
  null,
  'terracotta-dot',
  'forest-fern',
  'forest-fern',
  'forest-fern',
  null,
  null,
  'terracotta-dot',
  'terracotta-dot',
  'forest-fern',
  'ocean-wave',
  null,
  null,
  'terracotta-dot',
  'terracotta-dot',
  'ocean-wave',
  'yellow-star',
  null,
  null,
  'ocean-wave',
  'yellow-star',
  'forest-fern',
  null,
  null,
  null,
];
