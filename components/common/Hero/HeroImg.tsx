/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import Head from 'next/head';
import React, { FC } from 'react';
import useImageLoaded from '~/hooks/useImageLoaded';

import styles from './HeroImage.module.css';

const HeroImg: FC<{ filename: string }> = ({ filename }) => {
  const [ref, loaded] = useImageLoaded();
  // TODO: es probable que cloudinary no se use, se debe tener otra opción para generar las imágenes
  const placeholderImage = `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/image/upload/c_fill,g_auto,w_18,q_70/${filename}`;
  const mobileHeroImage = `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/image/upload/c_fill,g_auto,f_auto,w_360,h_420,q_70/${filename}`;
  const tabletHeroImage = `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/image/upload/c_fill,g_auto,f_auto,w_840,h_400,q_80/${filename}`;
  const desktopHeroImage = `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/image/upload/c_fill,g_auto,f_auto,q_80/${filename}`;
  const preloadOptions = {
    imageSrcSet: mobileHeroImage,
    imageSizes: '100vw',
  };
  return (
    <>
      <Head>
        <link rel="preload" as="image" {...preloadOptions} />
      </Head>
      <picture className={styles.picture}>
        <source srcSet={desktopHeroImage} media="(min-width: 991px)" />
        <source srcSet={tabletHeroImage} media="(min-width: 768px) and (max-width: 991px)" />
        <img ref={ref} src={mobileHeroImage} alt="" className={styles.img} />
      </picture>
      <span className={cn(styles.placeholder, { [styles.hidePlaceholder]: loaded })}>
        <img src={placeholderImage} className={styles.placeholderImg} alt="" />
      </span>
    </>
  );
};

export default HeroImg;
