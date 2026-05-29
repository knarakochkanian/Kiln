'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CartSummary, CartWidget } from '@/widgets/cart';
import { CheckoutWidget } from '@/widgets/checkout';
import { DesignToolWidget } from '@/widgets/design-tool';
import { CheckoutFormInput } from '@/entities/checkout';
import { INITIAL_TILES, getTilePatternClass } from '@/entities/tile';
import { cn } from '@/shared/lib/cn';

const DESKTOP_NAV_ITEMS = ['Home', 'Shop', 'Collections', 'About Us', 'FAQ', 'Gallery', 'Blog'];
const MOBILE_NAV_ITEMS = ['Shop', 'Collections', 'About Us'];

export const OrderPage = () => {
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleOrderSubmit = (data: CheckoutFormInput) => {
    setSubmittedName(data.fullName);
  };

  return (
    <main className="min-h-screen px-0 py-0 text-kiln-ink lg:py-8">
      <div className="kiln-paper relative mx-auto min-h-screen w-full overflow-hidden border-x-2 border-kiln-ink bg-kiln-cream lg:min-h-[860px] lg:border-2">
        <DecorativeFrame />
        <TopChrome />

        <div className="relative z-10">
          <TitleHeader />

          {submittedName && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mb-4 max-w-[650px] border-2 border-green-800 bg-green-50 px-4 py-2 font-display text-sm font-black uppercase text-green-900 lg:max-w-none"
            >
              Order placed for {submittedName}.
            </motion.div>
          )}

          <div className="lg:hidden">
            <CheckoutWidget
              variant="mobile"
              onOrderSubmit={handleOrderSubmit}
              cartSlot={<CartWidget />}
            />
          </div>

          <div className="hidden lg:block">
            <h2 className="mb-2 font-display text-[34px] font-black uppercase leading-none text-kiln-ink">
              Shopping Cart &amp; Design Tool
            </h2>

            <div className="grid items-start gap-8 lg:grid-cols-[minmax(320px,0.95fr)_minmax(500px,1.28fr)_360px] xl:grid-cols-[minmax(320px,0.92fr)_minmax(600px,1.3fr)_390px]">
              <CartWidget />
              <DesignToolWidget />
              <CheckoutWidget
                onOrderSubmit={handleOrderSubmit}
                summarySlot={<CartSummary />}
                className="min-h-[600px]"
              />
            </div>
          </div>

          <PageFooter />
        </div>
      </div>
    </main>
  );
};

const TopChrome = () => {
  return (
    <header className="relative z-20 border-b-2 border-kiln-ink bg-kiln-cream-dark">
      <div className="flex h-12 items-center justify-between px-4 sm:px-8 lg:h-10">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-4 w-4 rounded-full border-2 border-kiln-ink bg-kiln-terracotta" />
          <span className="h-4 w-4 rounded-full border-2 border-kiln-ink bg-[#D9A94A]" />
          <span className="h-4 w-4 rounded-full border-2 border-kiln-ink bg-[#5D9C92]" />
        </div>

        <nav className="hidden items-center gap-7 font-display text-lg font-black uppercase tracking-normal text-kiln-ink lg:flex">
          {DESKTOP_NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="hover:text-kiln-clay">
              {item}
            </a>
          ))}
        </nav>

        <nav className="flex items-center gap-4 font-display text-base font-black uppercase text-kiln-ink sm:gap-7 sm:text-xl lg:hidden">
          {MOBILE_NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="hover:text-kiln-clay">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 font-display font-black text-kiln-ink sm:flex">
          <span className="relative text-3xl leading-none">
            Cart
            <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-kiln-ink bg-[#D9A94A] text-xs">
              2
            </span>
          </span>
          <span className="hidden h-9 w-9 rounded-full border-2 border-kiln-ink bg-[#40598F] lg:inline-block" />
          <span className="rounded-md border-2 border-kiln-ink bg-[#40598F] px-3 py-1 text-kiln-cream">
            A. Smith
          </span>
        </div>
      </div>
    </header>
  );
};

const TitleHeader = () => {
  return (
    <section className="relative z-10 mb-8 text-center lg:mb-10">
      <div className="flex items-center justify-center gap-5">
        <span className="hidden h-20 w-16 border-2 border-kiln-ink bg-[#5D9C92] lg:block" />
        <h1 className="font-display font-black uppercase leading-none tracking-normal text-kiln-ink sm:text-[38px] lg:text-[44px] xl:text-[56px]">
          Ceramic Tile Order Form
        </h1>
        <span className="hidden h-20 w-16 rounded-t-[32px] border-2 border-kiln-ink bg-kiln-clay lg:block" />
      </div>

      <div className="mt-3 flex items-center justify-center gap-3 sm:gap-5">
        <TileStrip count={3} offset={0} />
        <h2 className="font-display  font-black uppercase leading-none text-kiln-ink sm:text-[24px] lg:text-[26px] xl:text-[34px]">
          The Artisan Kiln
        </h2>
        <TileStrip count={3} offset={1} />
      </div>
    </section>
  );
};

interface TileStripProps {
  count: number;
  offset: number;
}

const TileStrip = ({ count, offset }: TileStripProps) => {
  return (
    <div className="hidden items-center gap-2 sm:flex" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => {
        const tile = INITIAL_TILES[(index + offset) % INITIAL_TILES.length];
        return (
          <span
            key={`${tile.id}-${index}`}
            className={cn(
              'h-9 w-9 border-2 border-kiln-ink bg-cover bg-center sm:h-11 sm:w-11 lg:h-8 lg:w-8 xl:h-10 xl:w-10',
              getTilePatternClass(tile.id)
            )}
          />
        );
      })}
    </div>
  );
};

const DecorativeFrame = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <span className="decor-tile left-3 top-16 bg-tile-forest-fern" />
      <span className="decor-tile right-3 top-24 bg-tile-yellow-star" />
      <span className="decor-tile left-3 bottom-5 hidden bg-tile-ocean-wave lg:block" />
      <span className="decor-tile right-8 bottom-6 hidden bg-tile-terracotta-dot lg:block" />
      <span className="decor-leaf right-8 top-36 hidden lg:block" />
      <span className="decor-leaf left-28 bottom-4 hidden rotate-90 lg:block" />
      <span className="decor-leaf right-28 bottom-4 hidden -rotate-90 lg:block" />
    </div>
  );
};

const PageFooter = () => {
  return (
    <footer className="relative z-10 mt-8 text-center font-display text-base font-black uppercase text-kiln-ink lg:mt-12">
      <div className="mx-auto mb-2 flex max-w-[620px] flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span>Terms</span>
        <span className="hidden lg:inline">Of Service</span>
        <span>|</span>
        <span>Privacy Policy</span>
        <span>|</span>
        <span>Shipping Info</span>
        <span>|</span>
        <span>Contact Us</span>
      </div>
      <p className="text-sm">&copy; 2026 The Artisan Kiln. All Rights Reserved.</p>
    </footer>
  );
};

export default OrderPage;
