import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#F2F3FA" offset="20%" />
      <stop stop-color="#FFF" offset="50%" />
      <stop stop-color="#F2F3FA" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const Img: FC<ImageProps> = (props) => {
  const defaultProps = {
    placeholder: 'blur',
    blurDataURL: `data:image/svg+xml;base64,${toBase64(
      shimmer(parseInt(`${props?.width || 700}`), parseInt(`${props?.height || 475}`)),
    )}`,
  };
  // @ts-ignore
  return <Image {...defaultProps} {...props} />;
};

export default Img;
