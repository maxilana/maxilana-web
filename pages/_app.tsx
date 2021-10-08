import type { AppProps } from 'next/app';
import Script from 'next/script';
import NextNprogress from 'nextjs-progressbar';

import 'dayjs/locale/es';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="lazyOnload" src="https://embed.tawk.to/573b5cc8bf3b0fde536a3ddc/default" />
      <Component {...pageProps} />
      <NextNprogress
        color="#FDD426"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
    </>
  );
}

export default MyApp;
