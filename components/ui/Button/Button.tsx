import { FC, MouseEvent, ReactElement } from "react";
import { LoadingOutlined } from '@ant-design/icons';

import styles from './Button.module.css';

interface Props {
  text: string;
  loading?: boolean;
  icon?: ReactElement;
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
  icon,
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


  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={className}
    >
      {(loading || icon) && (
        <span className={styles.iconContainer}>
          {iconElement}
        </span>
      )}
      <span>{text}</span>
    </button>
  )
}

export default Button;
