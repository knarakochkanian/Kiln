import { Tile } from '@/entities/tile/model/types';

export interface CartItem {
  tile: Tile;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
