import React, { FC } from 'react';
import Image, { ImageLoaderProps, ImageProps } from 'next/image';

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

const getBase64Placeholder = (w: number, h: number): string =>
  `data:image/svg+xml;base64,${toBase64(shimmer(parseInt(`${w}`), parseInt(`${h}`)))}`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const loaders = {
  cloudinary: ({ src, width, quality = 75 }: ImageLoaderProps) => {
    if (!process.env.NEXT_PUBLIC_CLOUDINARY_BASEURL) {
      throw Error('Environment variable NEXT_PUBLIC_CLOUDINARY_BASEURL is missing');
    }
    const baseURL = process.env.NEXT_PUBLIC_CLOUDINARY_BASEURL;
    return `${baseURL}/image/fetch/f_auto,w_${width},q_${quality}/${src}`;
  },
  maxilana: ({ src, width, quality = 75 }: ImageLoaderProps) =>
    `${process.env.NEXT_PUBLIC_API_BASEURL}/image?url=${encodeURIComponent(
      src,
    )}&w=${width}&q=${quality}`,
};

const Img: FC<ImageProps> = (props) => {
  const customLoader =
    loaders[process.env.NEXT_PUBLIC_CUSTOM_IMAGES_LOADER as keyof typeof loaders];
  return (
    <>
      {/*@ts-ignore esta mal typeado el componente Image*/}
      <Image
        alt=""
        placeholder="blur"
        blurDataURL={getBase64Placeholder(
          parseFloat(`${props?.width}`) || 700,
          parseFloat(`${props?.height}`) || 450,
        )}
        loader={customLoader}
        {...props}
      />
    </>
  );
};

export default Img;
