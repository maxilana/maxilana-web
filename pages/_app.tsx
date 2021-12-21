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
  const font = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preload" as="style" href={font} />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href={font}
          rel="stylesheet"
          media="print"
          onLoad={function (event) {
            // @ts-ignore
            this.media = 'all';
          }}
        />
        <noscript>
          <link href={font} rel="stylesheet" />
        </noscript>
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
