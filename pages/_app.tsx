import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import NextNprogress from 'nextjs-progressbar';

import 'dayjs/locale/es';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script strategy="lazyOnload" src={process.env.NEXT_PUBLIC_TWAK_TO_SRC} />
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

/*export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}*/

export default MyApp;
