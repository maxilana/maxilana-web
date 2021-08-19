
import Link from 'next/link';
import { FC, MouseEvent, ReactElement } from "react";
import { LoadingOutlined } from '@ant-design/icons';

import styles from './Button.module.css';

export interface Props {
  text: string;
  href?: string;
  loading?: boolean;
  icon?: ReactElement;
  rightIcon?: ReactElement;
  variant?: "link" | "default";
  size?: "small" | "default" | "large";
  theme?: "default" | "primary" | "secondary" | "danger" | "whatsapp";
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
};

const classStyles = {
  size: {
    default: "",
    small: styles.sm,
    large: styles.lg,
  },
  theme: {
    default: "",
    primary: styles.primary,
    secondary: styles.secondary,
    danger: styles.danger,
    whatsapp: styles.whatsapp,
  },
};

const Button: FC<Props> = ({
  text,
  href,
  icon,
  rightIcon,
  onClick,
  loading = false,
  size = "default",
  theme = "default",
  variant = "default",
}) => {
  const sizeStyles = classStyles.size[size];
  const themeStyles = classStyles.theme[theme];
  const linkStyles = variant === "link" ? styles.link : "";
  const className = [styles.root, sizeStyles, themeStyles, linkStyles].join(" ");

  let iconElement = icon;

  if (loading) {
    iconElement = <LoadingOutlined style={{ fontSize: 20 }} />;
  }

  if (href !== undefined) {
    return (
      <Link href={href}>
        <a className={className}>
          {icon && (
            <span className={styles.iconContainer}>
              {iconElement}
            </span>
          )}
          <span>{text}</span>
        </a>
      </Link>
    )
  }


  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={className}
    >
      {(loading || icon) && (
        <span className={styles.leftIconWrapper}>
          {iconElement}
        </span>
      )}
      <span>{text}</span>
      {rightIcon && (
        <span className={styles.rightIconWrapper}>
          {rightIcon}
        </span>
      )}
    </button>
  )
}

export default Button;
