import { Tile, TileId } from './types';

export const INITIAL_TILES: Tile[] = [
  {
    id: 'ocean-wave',
    name: 'Ocean Wave',
    price: 24.99,
    image: '/tiles/ocean-wave.png',
    color: '#6FA8DC',
  },
  {
    id: 'forest-fern',
    name: 'Forest Fern',
    price: 18.5,
    image: '/tiles/forest-fern.png',
    color: '#6AA84F',
  },
  {
    id: 'terracotta-dot',
    name: 'Terracotta Dot',
    price: 21.75,
    image: '/tiles/terracotta-dot.png',
    color: '#CC6B49',
  },
  {
    id: 'yellow-star',
    name: 'Yellow Star',
    price: 16.25,
    image: '/tiles/yellow-star.png',
    color: '#F1C232',
  },
];

export const INITIAL_CART_QUANTITY_BY_TILE_ID: Record<TileId, number> = {
  'ocean-wave': 150,
  'forest-fern': 75,
  'terracotta-dot': 200,
  'yellow-star': 50,
};

export const TILE_PATTERN_CLASS_BY_ID: Record<TileId, string> = {
  'ocean-wave': 'bg-tile-ocean-wave',
  'forest-fern': 'bg-tile-forest-fern',
  'terracotta-dot': 'bg-tile-terracotta-dot',
  'yellow-star': 'bg-tile-yellow-star',
};

export const getTilePatternClass = (tileId: TileId): string => {
  return TILE_PATTERN_CLASS_BY_ID[tileId] ?? 'bg-kiln-cream-dark';
};
