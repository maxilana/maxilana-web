import cn from 'classnames';
import React, { FC, MouseEvent, ReactElement, useState } from "react";
import { LoadingOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';

import styles from './Button.module.css';
import { Card } from "../Card";

type ListItem = {
  label: string;
}

interface Props {
  text: string;
  loading?: boolean;
  listItems: ReactElement[];
  icon?: ReactElement;
  size?: "small" | "default" | "large";
  theme?: "default" | "primary" | "secondary" | "danger" | "whatsapp";
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

/**
 * TODO: Añadir un evento click-outside
 * para que cuando se haga clic fuera del botón se cierre
*/

const ButtonDropdown: FC<Props> = ({
  text,
  icon,
  listItems,
  loading = false,
  size = "default",
  theme = "default",
}) => {
  const [visible, toggleVisibility] = useState(false);

  const sizeStyles = classStyles.size[size];
  const themeStyles = classStyles.theme[theme];

  let iconElement = icon;

  if (loading) {
    iconElement = <LoadingOutlined style={{ fontSize: 20 }} />;
  }

  return (
    <div className={styles.rootDropdown}>
      <button
        disabled={loading}
        className={cn(
          styles.root,
          sizeStyles,
          themeStyles,
        )}
        onClick={() => {
          toggleVisibility(!visible);
        }}
      >
        {(loading || icon) && (
          <span className="mr-2">
            {iconElement}
          </span>
        )}
        <span>{text}</span>
        <span className="ml-2">
          {
            visible
              ? <UpOutlined style={{ fontSize: 20 }} />
              : <DownOutlined style={{ fontSize: 20 }} />
          }
        </span>
      </button>
      <div
        className={cn(
          styles.dropdownWrapper,
          { [styles.dropdownWrapperVisible]: visible }
        )}
      >
        <Card className={styles.dropdownCard}>
          <React.Fragment>
            {listItems}
          </React.Fragment>
        </Card>
      </div>
    </div>
  )
}

export default ButtonDropdown;
