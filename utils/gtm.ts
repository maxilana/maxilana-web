import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const pageview = (url: string): void => {
  window?.dataLayer?.push?.({
    event: 'pageview',
    page: url,
  });
};

export const usePageView = () => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);
};
