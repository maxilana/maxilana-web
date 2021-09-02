import { FC } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import styles from './SelectableArticle.module.css';

interface Props {
  label: string;
  imageSrc?: string;
  checked?: boolean;
  onClick?: () => void;
}

const PawnSelectableArticle: FC<Props> = ({
  label,
  imageSrc = null,
  checked = false,
  onClick = () => {},
}) => {
  return (
    <div id={label} role="checkbox" className={styles.root} onClick={onClick}>
      <div className={styles.wrapImage}>
        {imageSrc !== null && (
          <Image
            layout="fill"
            quality={100}
            src={imageSrc}
            objectFit="cover"
            alt="Imagen de un artículo que se puede empeñar"
          />
        )}
      </div>
      <div className={cn(styles.wrapBody, { [styles.selected]: checked })}>
        <label htmlFor={label} className={styles.label}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default PawnSelectableArticle;
