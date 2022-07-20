import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React from 'react';
import { GTM_ID } from '~/utils/gtm';

class CustomDocument extends Document {
  render() {
    const css = this.props?.__NEXT_DATA__?.props?.pageProps?.css || [];
    return (
      <Html lang="en">
        <Head>
          <script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N66LHTB');`}}></script>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          {css?.map?.((href: string) => (
            <link href={href} as="style" rel="preload" key={href} />
          ))}
          {css?.map?.((href: string) => (
            <link
              href={href}
              id={href}
              className="extra-css"
              type="text/css"
              rel="stylesheet"
              key={href}
              onLoad={function onLoad() {
                //@ts-ignore
                this.media = 'all';
              }}
            />
          ))}
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
