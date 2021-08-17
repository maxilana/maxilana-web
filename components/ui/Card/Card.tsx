import cn from 'classnames';
import { FC, ReactElement } from "react";

import styles from './Cards.module.css';

interface Props {
  children: ReactElement;
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        styles.root,
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Card;
