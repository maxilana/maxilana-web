import cn from 'classnames';
import React, { FC } from 'react';
import Link from 'next/link';
import { Branch, City } from '~/types/Models';
import { CheckableTag } from '~/components/ui';
import slugify from '~/utils/slugify';
import BranchCard from '../BranchCard';

import styles from './BranchesMap.module.css';

interface Props {
  cities: City[];
  branches: Branch[];
  currentCity?: City;
}

const BranchesMap: FC<Props> = ({ cities, branches, currentCity }) => {
  return (
    <main className={styles.root}>
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
            <Link href={`/sucursales/ciudad/${slugify(city?.name)}`} key={city.code}>
              <a>
                <CheckableTag className={styles.city} checked={city?.code === currentCity?.code}>
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
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/d/embed?mid=zqXiv51ICI8g.kRua7qr6zNBg"
      />
    </main>
  );
};

export default BranchesMap;
