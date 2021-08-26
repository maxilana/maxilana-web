import { DownOutlined } from '@ant-design/icons';
import cn from 'classnames';
import React, { FC, PropsWithChildren, ReactElement } from 'react';
import useToggleState from '~/hooks/useToggleState';

import styles from './Collapse.module.css';

interface Props {
  title: string | ReactElement;
}

const Collapse: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  const [collapsed, toggle] = useToggleState();
  return (
    <div className={cn(styles.root, { [styles.collapsed]: collapsed })}>
      <div className={styles.header} role="button" onClick={() => toggle()}>
        {typeof title === 'string' ? <span className="heading">{title}</span> : title}
        <DownOutlined className={styles.indicator} />
      </div>
      {!collapsed && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Collapse;
