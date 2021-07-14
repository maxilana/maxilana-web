import Link, { LinkProps } from 'next/link';
import { FC, MouseEvent } from "react";
import styles from './Button.module.css';

interface Props {
  text: string;
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
  }
};

const Button: FC<Props> = ({
  text,
  onClick,
  size = "default",
  theme = "default",
  variant = "default",
}) => {
  const sizeVariant = classStyles.size[size];
  const styleVariant = classStyles.theme[theme];
  const linkVariant = variant === "link" ? styles.link : "";
  const className = [styles.root, sizeVariant, styleVariant, linkVariant].join(" ");

  return (
    <button className={className} onClick={onClick}>
      <span>{text}</span>
    </button>
  )
}

export default Button;
