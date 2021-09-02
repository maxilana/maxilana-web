import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#E2E3E4" offset="20%" />
      <stop stop-color="#FFF" offset="50%" />
      <stop stop-color="#E2E3E4" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#E2E3E4" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const Img: FC<ImageProps> = (props) => {
  const customLoader = process.env.NEXT_PUBLIC_CUSTOM_IMAGES_LOADER === 'true';
  return (
    <>
      {/*@ts-ignore esta mal typeado el componente Image*/}
      <Image
        alt=""
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(parseInt(`${props?.width || 700}`), parseInt(`${props?.height || 475}`)),
        )}`}
        loader={
          customLoader
            ? ({ src, width, quality = 75 }) =>
                `/api/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`
            : undefined
        }
        {...props}
      />
    </>
  );
};

export default Img;
