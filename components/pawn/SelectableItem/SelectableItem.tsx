import { FC } from 'react';
import Image from 'next/image';

import styles from './SelectableItem.module.css';

interface Props {
  label: string;
  imageSrc?: StaticImageData;
  onClick?: () => void;
}

const SelectableItem: FC<Props> = ({ label, imageSrc = null, onClick = () => {} }) => {
  return (
    <div id={label} role="checkbox" className={styles.root} onClick={onClick}>
      <div className={styles.wrapBody}>
        <label htmlFor={label} className={styles.label}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default SelectableItem;
