import type { AppProps } from 'next/app';
import { StoreProvider } from '@/app/providers';
import '@/shared/styles/globals.css';

export default function PagesRouterApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
