import { useState, useRef, useEffect, LegacyRef } from 'react';

const useImageLoaded = (): [LegacyRef<HTMLImageElement> | undefined, boolean, () => void] => {
  const [loaded, setLoaded] = useState(false);
  const ref: LegacyRef<HTMLImageElement> | undefined = useRef<any>();

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (ref?.current?.complete) {
      onLoad();
    }
  });

  return [ref, loaded, onLoad];
};

export default useImageLoaded;
