export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const pageview = (url: string): void => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
