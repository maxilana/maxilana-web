import cn from 'classnames';
import { FC, ReactElement, ReactNode } from 'react';
import ClickOutside from '~/modules/lib/click-outside';

import styles from './Dropdown.module.css';

interface Props {
  parent: ReactNode;
  children: ReactElement;
  visible: boolean;
  onClose: () => void;
}

const Dropdown: FC<Props> = ({ parent, children, visible = false, onClose }) => {
  return (
    <ClickOutside active={true} onClick={onClose}>
      <div className={styles.root}>
        {parent}
        <div className={cn(styles.wrapper, { [styles.wrapperVisible]: visible })}>{children}</div>
      </div>
    </ClickOutside>
  );
};

export default Dropdown;
