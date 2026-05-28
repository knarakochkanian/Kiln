'use client';

import Image from 'next/image';
import { Button } from '@/shared/ui/Button/Button';
import { TileGrid } from './TileGrid';
import { TilePalette } from './TilePalette';
import { useAppDispatch } from '@/app/hooks';
import { designGridActions } from '@/entities/design-grid';

export const DesignToolWidget = () => {
  const dispatch = useAppDispatch();

  const handleResetGrid = () => {
    dispatch(designGridActions.resetGrid());
  };

  return (
    <section className="relative overflow-visible border-2 border-kiln-ink bg-kiln-cream">
      <div className="grid grid-cols-[minmax(0,1fr)_154px]">
        <div className="border-r-2 border-kiln-ink">
          <div className="flex min-h-[82px] flex-col items-center justify-center border-b-2 border-kiln-ink px-3 text-center">
            <h2 className="font-display text-xl font-black uppercase leading-none text-kiln-ink">
              Visualize Your Order:
            </h2>
            <p className="font-display text-sm font-black leading-tight text-kiln-ink">
              Drag and drop tiles here to create patterns.
            </p>
          </div>
          <TileGrid />
        </div>
        <TilePalette />
      </div>

      <div className="absolute bottom-2 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full border-2 border-kiln-ink bg-[#40598F]" />
      <div className="pointer-events-none absolute bottom-10 right-24 hidden rotate-6 xl:block">
        <div className="relative h-24 w-24 overflow-hidden border-2 border-kiln-ink bg-kiln-cream shadow-[4px_4px_0_rgba(46,42,39,0.25)]">
          <Image src="/tiles/ocean-wave.png" alt="" fill sizes="96px" className="object-cover" />
        </div>
      </div>

      <Button
        onClick={handleResetGrid}
        variant="secondary"
        size="sm"
        className="absolute bottom-3 right-3 border-2 border-kiln-ink bg-kiln-cream text-xs font-black uppercase shadow-[2px_2px_0_#2E2A27]"
      >
        Reset
      </Button>
    </section>
  );
};
