import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DesignGridState, DesignGridCell, GRID_SIZE, INITIAL_GRID_TILE_IDS } from './types';
import { TileId } from '@/entities/tile/model/types';

const createInitialCells = (): DesignGridCell[] => Array.from({ length: GRID_SIZE }, (_, index) => ({
  id: `cell-${index}`,
  tileId: INITIAL_GRID_TILE_IDS[index],
}));

const initialState: DesignGridState = {
  cells: createInitialCells(),
  selectedTileId: null,
};

export const designGridSlice = createSlice({
  name: 'designGrid',
  initialState,
  reducers: {
    selectTile: (state, action: PayloadAction<TileId | null>) => {
      state.selectedTileId = action.payload;
    },

    placeTileToCell: (state, action: PayloadAction<{ cellId: string; tileId: TileId | null }>) => {
      const cell = state.cells.find((c) => c.id === action.payload.cellId);
      if (cell) {
        cell.tileId = action.payload.tileId;
      }
    },

    clearCell: (state, action: PayloadAction<string>) => {
      const cell = state.cells.find((c) => c.id === action.payload);
      if (cell) {
        cell.tileId = null;
      }
    },

    resetGrid: (state) => {
      state.cells = createInitialCells();
      state.selectedTileId = null;
    },
  },
});

export const designGridActions = designGridSlice.actions;
export const designGridReducer = designGridSlice.reducer;
