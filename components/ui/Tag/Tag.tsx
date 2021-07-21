import { FC } from "react";

import styles from './Tag.module.css';

interface Props {
  label: string;
}

const Tag: FC<Props> = ({ label }) => {
  return (
    <span className={styles.root}>
      {label}
    </span>
  )
}

export default Tag;
