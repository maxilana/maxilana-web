import cn from 'classnames';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { FC, FormEventHandler, useState, useEffect } from 'react';
import Image from 'next/image';
import { EnvironmentOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import useEffectOnUpdate from '~/hooks/useEffectOnUpdate';
import { City } from '~/types/Models';
import parseQuery from '~/utils/parseQuery';

import Dropdown from '../Dropdown';
import MexicoMap from '../../../public/svg/mexico.svg';
import styles from './Searcher.module.css';

const locations = [
  { name: 'Culiacán y Navolato', id: 1 },
  { name: 'Mazatlán', id: 3 },
  { name: 'Guadalajara', id: 5 },
  { name: 'Hermosillo', id: 4 },
  { name: 'Mexicali', id: 7 },
  { name: 'Tijuana', id: 6 },
];

interface Props {
  cities?: City[];
}

const Searcher: FC<Props> = ({ cities }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [visible, toggleDropdown] = useState(false);
  const [city, setCity] = useState<{ label?: string; id?: number } | null>();

  useEffect(() => {
    if (router) {
      const {
        query: { q },
      } = router;
      setSearchText((q as string) || '');
    }
  }, [router]);

  const goToSearch = () => {
    const { query = {} } = router;
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
                  <div className="hidden md:inline-block">
                    <Image src={MexicoMap} alt="Mexico" />
                  </div>
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
            {(cities?.length ? cities : locations)
              .filter((item) => item.id !== city?.id)
              .map((item) => (
                <span
                  key={item.id}
                  role="menuitem"
                  className="flex flex-row items-center space-x-2 px-1 py-2 text-sm text-brand-darker cursor-pointer rounded-sm hover:bg-brand/10"
                  onClick={() => setCity(item)}
                >
                  <EnvironmentOutlined style={{ fontSize: 18, color: '#0B477D' }} />
                  <span>{item.name}</span>
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
