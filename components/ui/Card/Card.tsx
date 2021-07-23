import { FC, ReactElement } from "react";

import styles from './Cards.module.css';

interface Props {
  children: ReactElement;
}

const Card: FC<Props> = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}

export default Card;
