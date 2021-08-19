import cn from "classnames";
import { FC, ReactElement, ReactNode } from "react";
import ClickOutside from "~/modules/lib/click-outside";

import { Card } from "../Card";
import styles from './Dropdown.module.css';

interface Props {
  parent: ReactNode;
  children: ReactElement;
  visible: boolean;
  onClose: () => void;
}

const Dropdown: FC<Props> = ({
  parent,
  children,
  visible = false,
  onClose
}) => {
  return (
    <ClickOutside
      active={true}
      onClick={onClose}
    >
      <div className={styles.root}>
        {parent}
        <div
          className={cn(
            styles.wrapper,
            { [styles.wrapperVisible]: visible }
          )}
        >
          <Card className="p-1">
            {children}
          </Card>
        </div>
      </div>
    </ClickOutside>
  )
}

export default Dropdown;
