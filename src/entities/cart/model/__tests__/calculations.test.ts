import { describe, it, expect } from 'vitest';
import { calculateSubtotal, calculateShipping, calculateGrandTotal } from '../calculations';
import { CartItem } from '../types';
import { Tile } from '@/entities/tile/model/types';

describe('Cart Calculations', () => {
  const mockTile: Tile = {
    id: 'test-tile',
    name: 'Test Tile',
    price: 100,
    image: '/test.png',
    color: '#000000',
  };

  describe('calculateSubtotal', () => {
    it('should return 0 for empty cart', () => {
      expect(calculateSubtotal([])).toBe(0);
    });

    it('should calculate subtotal for single item', () => {
      const items: CartItem[] = [
        {
          tile: mockTile,
          quantity: 2,
        },
      ];
      expect(calculateSubtotal(items)).toBe(200);
    });

    it('should calculate subtotal for multiple items', () => {
      const tile2: Tile = {
        ...mockTile,
        id: 'tile-2',
        price: 50,
      };

      const items: CartItem[] = [
        { tile: mockTile, quantity: 2 },
        { tile: tile2, quantity: 3 },
      ];

      expect(calculateSubtotal(items)).toBe(200 + 150);
    });

    it('should handle decimal prices', () => {
      const tile: Tile = {
        ...mockTile,
        price: 24.99,
      };

      const items: CartItem[] = [{ tile, quantity: 1 }];
      expect(calculateSubtotal(items)).toBe(24.99);
    });
  });

  describe('calculateShipping', () => {
    it('should charge $25 for subtotal under $500', () => {
      expect(calculateShipping(100)).toBe(25);
      expect(calculateShipping(499)).toBe(25);
      expect(calculateShipping(500 - 0.01)).toBe(25);
    });

    it('should charge $25 for subtotal equal to $500', () => {
      expect(calculateShipping(500)).toBe(25);
    });

    it('should have free shipping for subtotal greater than $500', () => {
      expect(calculateShipping(1000)).toBe(0);
      expect(calculateShipping(500.01)).toBe(0);
    });

    it('should have free shipping for empty cart', () => {
      expect(calculateShipping(0)).toBe(25);
    });
  });

  describe('calculateGrandTotal', () => {
    it('should add subtotal and shipping', () => {
      expect(calculateGrandTotal(100, 25)).toBe(125);
      expect(calculateGrandTotal(500, 0)).toBe(500);
      expect(calculateGrandTotal(300, 25)).toBe(325);
    });

    it('should handle zero subtotal', () => {
      expect(calculateGrandTotal(0, 25)).toBe(25);
      expect(calculateGrandTotal(0, 0)).toBe(0);
    });
  });
});
