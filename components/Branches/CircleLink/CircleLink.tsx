import cn from 'classnames';
import React, { AnchorHTMLAttributes, FC, ReactElement } from 'react';
import styles from './CircleLink.module.css';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  icon: ReactElement;
  bgColor?: 'brand' | 'whatsapp';
}

const CircleLink: FC<Props> = ({
  icon,
  text,
  className,
  bgColor = 'brand',
  children,
  ...props
}) => {
  return (
    <a {...props} className={cn(styles.root, className)}>
      <span className={cn(styles.icon, `bg-${bgColor}`)}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </a>
  );
};

export default CircleLink;
