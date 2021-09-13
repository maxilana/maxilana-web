import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';

import 'dayjs/locale/es';
import 'tailwindcss/tailwind.css';
import 'antd/lib/select/style/index.css';
import 'antd/lib/radio/style/index.css';
import 'antd/lib/date-picker/style/index.css';
import 'antd/lib/calendar/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import 'antd/lib/slider/style/index.css';
import '../styles/antd-motion.css';
import '../styles/antd-form.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
