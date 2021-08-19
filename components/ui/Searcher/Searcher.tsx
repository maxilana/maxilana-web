import cn from 'classnames';
import { FC, useState } from "react";
import { EnvironmentOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';

import Dropdown from "../Dropdown";
import styles from './Searcher.module.css';

const locations = [
  { label: "Culiacán y Navolato" },
  { label: "Mazatlán" },
  { label: "Guadalajara" },
  { label: "Hermosillo" },
  { label: "Mexicali" },
  { label: "Tijuana" }
];

const Searcher: FC = () => {
  const [visible, toggleDropdown] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.inputWrap}>
        <input
          className={cn(
            styles.inputControl,
            styles.searchInput,
          )}
          placeholder="Encuentra celulares"
        />
      </div>
      <div className={styles.selectorWrap}>
        <Dropdown
          visible={visible}
          onClose={() => { toggleDropdown(false) }}
          parent={(
            <div
              role="combobox"
              className={cn(
                styles.inputControl,
                styles.locationDropdown
              )}
              onClick={() => { toggleDropdown(!visible) }}
            >
              <span role="option">Todo México</span>
              <span>
                {
                  visible
                    ? <UpOutlined style={{ fontSize: 14 }} />
                    : <DownOutlined style={{ fontSize: 14 }} />
                }
              </span>
            </div>
          )}
        >
          <div role="menu">
            {locations.map(item => (
              <span
                key={item.label}
                role="menuitem"
                className="flex flex-row items-center space-x-2 p-1 text-sm text-brand-darker"
              >
                <EnvironmentOutlined style={{ fontSize: 18, color: "#0B477D" }} />
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default Searcher;
