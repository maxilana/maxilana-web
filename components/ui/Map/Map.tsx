import React, { FC, useCallback, useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Branch } from '~/types/Models';

interface Props {
  branches: Branch[];
  zoom?: number;
  onLoad?: (map: any) => void;
}

const Map: FC<Props> = ({ branches, zoom = 6, onLoad }) => {
  const [map, setMap] = useState(null);
  if (!process.env.NEXT_PUBLIC_GM_API) console.warn('NEXT_PUBLIC_GM_API variable does not exist');
  if (!process.env.NEXT_PUBLIC_MARKER_IMAGE_URL) {
    console.warn('NEXT_PUBLIC_MARKER_IMAGE_URL variable does not exist');
  }
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GM_API as string,
  });

  const setMapCenter = (_map: any): void => {
    /*if (typeof window !== 'undefined') {
      // @ts-ignore
      const { LatLngBounds } = window?.google?.maps || {};
      const bounds = new LatLngBounds();
      _map.fitBounds(bounds);
      console.log('center', bounds);
    }*/
  };

  useEffect(() => {
    if (map && isLoaded) {
      setTimeout(() => setMapCenter(map), 300);
    }
  }, [isLoaded, map]);

  const handleLoad = useCallback(function callback(_map) {
    setMapCenter(_map);
    setMap(_map);
    onLoad?.(_map);
  }, []);
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (!isLoaded) return null;
  return (
    <GoogleMap
      onLoad={handleLoad}
      onUnmount={onUnmount}
      center={{
        lat: branches[0].latitud,
        lng: branches[0].longitud,
      }}
      zoom={zoom}
      options={{ streetViewControl: false, mapTypeControl: false }}
    >
      {branches
        .filter((branch) => branch?.latitud && branch?.longitud)
        .map((branch) => {
          return (
            <Marker
              icon={process.env.NEXT_PUBLIC_MARKER_IMAGE_URL}
              position={{
                lat: branch?.latitud,
                lng: branch?.longitud,
              }}
              key={branch?.id}
            />
          );
        })}
    </GoogleMap>
  );
};

export default Map;
