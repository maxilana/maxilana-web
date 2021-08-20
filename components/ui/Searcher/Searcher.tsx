import cn from 'classnames';
import { FC, useState } from 'react';
import { EnvironmentOutlined, UpOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';

import Dropdown from '../Dropdown';
import styles from './Searcher.module.css';

const locations = [
  { label: 'Culiacán y Navolato' },
  { label: 'Mazatlán' },
  { label: 'Guadalajara' },
  { label: 'Hermosillo' },
  { label: 'Mexicali' },
  { label: 'Tijuana' },
];

const Searcher: FC = () => {
  const [visible, toggleDropdown] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.inputWrap}>
        <input
          className={cn(styles.inputControl, styles.searchInput)}
          placeholder="Encuentra celulares"
        />
      </div>
      <div className={styles.selectorWrap}>
        <Dropdown
          visible={visible}
          onClose={() => {
            toggleDropdown(false);
          }}
          parent={
            <div
              role="combobox"
              className={cn(styles.inputControl, styles.locationDropdown)}
              onClick={() => {
                toggleDropdown(!visible);
              }}
            >
              <span role="option">Todo México</span>
              <DownOutlined
                style={{ fontSize: 14 }}
                className={cn(styles.arrowIndicator, { [styles.arrowUp]: visible })}
              />
            </div>
          }
        >
          <div role="menu">
            {locations.map((item) => (
              <span
                key={item.label}
                role="menuitem"
                className="flex flex-row items-center space-x-2 px-1 py-2 text-sm text-brand-darker cursor-pointer rounded-sm hover:bg-brand/10"
              >
                <EnvironmentOutlined style={{ fontSize: 18, color: '#0B477D' }} />
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </Dropdown>
      </div>
      <button className={styles.button}>
        <SearchOutlined />
      </button>
    </div>
  );
};

export default Searcher;
