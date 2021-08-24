import cn from 'classnames';
import React, { FC } from 'react';
import Link from 'next/link';
import { EnvironmentOutlined, UnorderedListOutlined } from '@ant-design/icons';
import useToggleState from '~/hooks/useToggleState';
import { Branch, City } from '~/types/Models';
import { Button, CheckableTag } from '~/components/ui';
import slugify from '~/utils/slugify';
import BranchCard from '../BranchCard';

import styles from './BranchesMap.module.css';

interface Props {
  cities: City[];
  branches: Branch[];
  currentCity?: City;
}

const BranchesMap: FC<Props> = ({ cities, branches, currentCity }) => {
  const [mapVisible, toggleMap] = useToggleState();

  return (
    <main className={cn(styles.root, { [styles.visible]: mapVisible })}>
      <aside className={styles.container}>
        <h1 className={styles.title}>Ubica tu sucursal</h1>
        <p>Elige tu ciudad para ver las sucursales más cercanas</p>
        <div key={currentCity?.name || 'all'}>
          <Link href="/sucursales">
            <a>
              <CheckableTag className={styles.city} checked={!Boolean(currentCity)}>
                Todas
              </CheckableTag>
            </a>
          </Link>
          {cities.map((city) => (
            <Link href={`/sucursales/ciudad/${city?.slug}`} key={city.id}>
              <a>
                <CheckableTag className={styles.city} checked={city?.id === currentCity?.id}>
                  {city.name}
                </CheckableTag>
              </a>
            </Link>
          ))}
        </div>
        <span className={styles.count}>{branches?.length} sucursales</span>
        {branches.map((branch) => (
          <BranchCard data={branch} key={branch?.id} />
        ))}
      </aside>
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/d/embed?mid=zqXiv51ICI8g.kRua7qr6zNBg" />
      </div>
      <Button
        text={mapVisible ? 'Ver lista' : 'Ver mapa'}
        theme="secondary"
        icon={
          mapVisible ? (
            <UnorderedListOutlined style={{ fontSize: 20 }} />
          ) : (
            <EnvironmentOutlined style={{ fontSize: 20 }} />
          )
        }
        className={styles.mapOpener}
        onClick={() => toggleMap()}
      />
    </main>
  );
};

export default BranchesMap;
