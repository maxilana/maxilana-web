import cn from 'classnames';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { FC, FormEventHandler, useState } from 'react';
import Image from 'next/image';
import { EnvironmentOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import useEffectOnUpdate from '~/hooks/useEffectOnUpdate';
import parseQuery from '~/utils/parseQuery';

import Dropdown from '../Dropdown';
import MexicoMap from '../../../public/svg/mexico.svg';
import styles from './Searcher.module.css';

const locations = [
  { label: 'Culiacán y Navolato', id: 1 },
  { label: 'Mazatlán', id: 3 },
  { label: 'Guadalajara', id: 5 },
  { label: 'Hermosillo', id: 4 },
  { label: 'Mexicali', id: 7 },
  { label: 'Tijuana', id: 6 },
];

const Searcher: FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [visible, toggleDropdown] = useState(false);
  const [city, setCity] = useState<{ label?: string; id?: number } | null>();

  const goToSearch = () => {
    const query: ParsedUrlQuery = {};
    if (searchText) query.q = searchText;
    if (city) query.ciudad = `${city.id}`;
    router.push(`/busqueda?${parseQuery(query)}`);
  };

  useEffectOnUpdate(goToSearch, [city]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    goToSearch();
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <div className={styles.inputWrap}>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
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
              {!city ? (
                <span role="option" className="flex items-center space-x-2">
                  <Image src={MexicoMap} alt="Mexico" />
                  <span>Todo México</span>
                </span>
              ) : (
                <span role="option" className="flex items-center space-x-2">
                  <span>{city?.label}</span>
                </span>
              )}
              <DownOutlined
                style={{ fontSize: 14 }}
                className={cn(styles.arrowIndicator, { [styles.arrowUp]: visible })}
              />
            </div>
          }
        >
          <div role="menu">
            {!city && (
              <span
                role="menuitem"
                className="flex flex-row items-center space-x-2 px-1 py-2 text-sm text-brand-darker cursor-pointer rounded-sm hover:bg-brand/10"
                onClick={() => setCity(null)}
              >
                <EnvironmentOutlined style={{ fontSize: 18, color: '#0B477D' }} />
                <span>Todo México</span>
              </span>
            )}
            {locations
              .filter((item) => item.id !== city?.id)
              .map((item) => (
                <span
                  key={item.label}
                  role="menuitem"
                  className="flex flex-row items-center space-x-2 px-1 py-2 text-sm text-brand-darker cursor-pointer rounded-sm hover:bg-brand/10"
                  onClick={() => setCity(item)}
                >
                  <EnvironmentOutlined style={{ fontSize: 18, color: '#0B477D' }} />
                  <span>{item.label}</span>
                </span>
              ))}
          </div>
        </Dropdown>
      </div>
      <button className={styles.button} type="submit">
        <SearchOutlined />
      </button>
    </form>
  );
};

export default Searcher;
