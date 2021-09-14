import cn from 'classnames';
import React, { FC, useState, useCallback } from 'react';
import Link from 'next/link';
import { EnvironmentOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import useToggleState from '~/hooks/useToggleState';
import { Branch, City } from '~/types/Models';
import { Button, CheckableTag } from '~/components/ui';
import BranchCard from '../BranchCard';

import styles from './BranchesMap.module.css';

interface Props {
  cities: City[];
  branches: Branch[];
  currentCity?: City;
}

const BranchesMap: FC<Props> = ({ cities, branches, currentCity }) => {
  const [mapVisible, toggleMap] = useToggleState();
  if (!process.env.NEXT_PUBLIC_GM_API) console.warn('NEXT_PUBLIC_GM_API variable does not exist');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GM_API as string,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(_map) {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      const { LatLngBounds } = window?.google?.maps || {};
      const bounds = new LatLngBounds();
      _map.fitBounds(bounds);
      setMap(_map);
    }
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

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
          {!!cities?.length &&
            cities.map((city) => (
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
        {!!branches?.length &&
          branches.map((branch) => <BranchCard data={branch} key={branch?.id} />)}
      </aside>
      <div className={styles.map}>
        {isLoaded && (
          <GoogleMap
            onLoad={onLoad}
            onUnmount={onUnmount}
            center={{
              lat: branches[0].latitud,
              lng: branches[0].longitud,
            }}
            zoom={6}
          >
            {branches
              .filter((branch) => branch?.latitud && branch?.longitud)
              .map((branch) => {
                return (
                  <Marker
                    icon="data:image/png;base64,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"
                    position={{
                      lat: branch?.latitud,
                      lng: branch?.longitud,
                    }}
                    key={branch?.id}
                  />
                );
              })}
          </GoogleMap>
        )}
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
