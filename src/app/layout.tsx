import type { Metadata } from 'next';
import { StoreProvider } from '@/app/providers';
import '@/shared/styles/globals.css';

export const metadata: Metadata = {
  title: 'The Artisan Kiln',
  description: 'Premium ceramic tile ordering with interactive design tool',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
