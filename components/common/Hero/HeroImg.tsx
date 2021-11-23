/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import React, { FC, LegacyRef, MutableRefObject, useEffect } from 'react';
import useImageLoaded from '~/hooks/useImageLoaded';

import styles from './HeroImage.module.css';

interface Props {
  placeholder?: string;
  mobile?: string;
  tablet?: string;
  desktop?: string;
}

const HeroImg: FC<Props> = ({ placeholder, mobile, tablet, desktop }) => {
  const [ref, loaded] = useImageLoaded();

  useEffect(() => {
    return () => {
      if ((ref as MutableRefObject<HTMLImageElement>)?.current) {
        (ref as MutableRefObject<HTMLImageElement | null>).current = null;
      }
    };
  }, [(ref as MutableRefObject<HTMLImageElement>)?.current]);

  return (
    <>
      <picture className={styles.picture}>
        <source srcSet={desktop} media="(min-width: 991px)" />
        <source srcSet={tablet} media="(min-width: 768px) and (max-width: 991px)" />
        <img
          ref={ref as LegacyRef<HTMLImageElement>}
          src={mobile}
          alt=""
          className={styles.img}
          sizes="100vw"
        />
      </picture>
      <span className={cn(styles.placeholder, { [styles.hidePlaceholder]: loaded })}>
        <img
          src={placeholder}
          className={styles.placeholderImg}
          alt=""
          sizes="100vw"
          width="100%"
          height="100%"
        />
      </span>
    </>
  );
};

export default HeroImg;
