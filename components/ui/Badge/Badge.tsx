import { FC } from "react";
import { CloseOutlined } from '@ant-design/icons';

import styles from './Badge.module.css';

interface Props {
  label: string;
  closable?: boolean;
  onClick?: () => void;
}

const Badge: FC<Props> = ({ label, closable = false, onClick }) => {
  const closableStyles = closable ? styles.closable : "";
  const className = [styles.root, closableStyles].join(" ");

  return (
    <span className={className} onClick={onClick}>
      <span>{label}</span>
      {closable && (
        <CloseOutlined style={{ fontSize: 12 }} />
      )}
    </span>
  )
}

export default Badge;
