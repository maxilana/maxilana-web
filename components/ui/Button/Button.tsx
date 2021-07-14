import { FC, MouseEvent } from "react";
import styles from './Button.module.css';

interface Props {
  link?: boolean;
  text: string;
  size?: "small" | "default" | "large";
  variant?: "default" | "primary" | "secondary" | "danger" | "whatsapp";
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
};

const classStyles = {
  size: {
    default: "",
    small: styles.sm,
    large: styles.lg,
  },
  style: {
    default: "",
    primary: styles.primary,
    secondary: styles.secondary,
    danger: styles.danger,
    whatsapp: styles.whatsapp,
  }
};

const Button: FC<Props> = ({ text, onClick, size = "default", variant = "default", link = false }) => {
  const sizeVariant = classStyles.size[size];
  const styleVariant = classStyles.style[variant];
  const linkVariant = link ? styles.link : "";
  const className = [styles.root, sizeVariant, styleVariant, linkVariant].join(" ");

  return (
    <button className={className} onClick={onClick}>
      <span>{text}</span>
    </button>
  )
}

export default Button;
