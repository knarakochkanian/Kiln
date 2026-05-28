import { RootState } from '@/app/store';

export const selectDesignGridCells = (state: RootState) => state.designGrid.cells;

export const selectSelectedTileId = (state: RootState) => state.designGrid.selectedTileId;

export const selectCellById = (cellId: string) => (state: RootState) => {
  return state.designGrid.cells.find((cell) => cell.id === cellId);
};
