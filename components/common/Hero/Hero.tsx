import { FC, ReactNode } from "react";

import styles from './Hero.module.css';

interface Props {
  title: string;
  subtitle?: string;
  cover?: ReactNode;
  actions?: ReactNode;
}

const Hero: FC<Props> = ({ title, subtitle = null, actions = null, cover = null }) => {
  return (
    <div className={styles.root}>
      {cover !== null && (
        <div className={styles.cover}>
          {cover}
        </div>
      )}
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle !== null && (
            <p className={styles.subtitle}>Averigua hasta cuánto te podemos dar por tus pertenencias</p>
          )}
          {actions !== null && (
            <div className={styles.actionsWrap}>
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


export default Hero;
