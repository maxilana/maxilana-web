import cn from 'classnames';
import React, { FC } from 'react';
import { Img } from '~/components/ui';
import { CMSBanner } from '~/types/Models/CMSBanner';

import styles from './Banners.module.css';

interface Props {
  data: CMSBanner;
}

const Banner: FC<Props> = ({ data }) => {
  return (
    <div className={cn(styles.item, styles[data?.type])}>
      <Img src={data?.image?.url} layout="fill" objectFit="cover" />
    </div>
  );
};

export default Banner;
