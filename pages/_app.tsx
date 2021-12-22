import type { AppProps, NextWebVitalsMetric } from 'next/app';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import MarketingScripts from '~/components/common/MarketingScripts';

import { usePageView, webVitals } from '~/utils/gtm';

import 'dayjs/locale/es';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
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
      {/* Google Tag Manager - Global base code */}
      <MarketingScripts />
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

export function reportWebVitals(metrics: NextWebVitalsMetric) {
  webVitals(metrics);
}

export default MyApp;
