import cn from 'classnames';
import React, { FC, useState } from 'react';
import { Img } from '~/components/ui';

import styles from './Gallery.module.css';

interface Props {
  images: string[];
}

const Gallery: FC<Props> = ({ images }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Img src={images[selected]} layout="fill" objectFit="contain" alt="" />
      </div>
      {images?.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((url, index) => (
            <div
              role="button"
              key={url}
              onClick={() => setSelected(index)}
              className={cn(styles.thumbnail, { [styles.selected]: index === selected })}
            >
              <Img src={url} width={64} height={64} layout="responsive" objectFit="cover" alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
