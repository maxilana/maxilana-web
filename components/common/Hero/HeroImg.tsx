/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
//import useImageLoaded from '~/hooks/useImageLoaded';

import styles from './HeroImage.module.css';

interface Props {
  placeholder?: string;
  mobile?: string;
  tablet?: string;
  desktop?: string;
}

const HeroImg: FC<Props> = ({ placeholder, mobile, tablet, desktop }) => (
  <picture className={styles.picture}>
    <source srcSet={desktop} media="(min-width: 991px)" />
    <source srcSet={tablet} media="(min-width: 768px) and (max-width: 991px)" />
    <img src={mobile} alt="" className={styles.img} sizes="100vw" />
  </picture>
);

export default HeroImg;
