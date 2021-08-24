import cn from 'classnames';
import { FC, PropsWithChildren, ReactElement } from 'react';

import styles from './Cards.module.css';

interface Props {
  className?: string;
}

const Card: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return <div className={cn(styles.root, className)}>{children}</div>;
};

export default Card;
