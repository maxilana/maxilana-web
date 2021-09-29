/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import React, { FC } from 'react';
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

  return (
    <>
      <picture className={styles.picture}>
        <source srcSet={desktop} media="(min-width: 991px)" />
        <source srcSet={tablet} media="(min-width: 768px) and (max-width: 991px)" />
        <img ref={ref} src={mobile} alt="" className={styles.img} />
      </picture>
      <span className={cn(styles.placeholder, { [styles.hidePlaceholder]: loaded })}>
        <img src={placeholder} className={styles.placeholderImg} alt="" />
      </span>
    </>
  );
};

export default HeroImg;
