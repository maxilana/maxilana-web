import { useEffect } from 'react';
/*
type UDEff<Deps = any[]> = (cb: (...deps: Deps[]) => void, delay:
 number,deps: any[]) => void;
 */

const useDebounceEffect = <Deps = any[]>(
  cb: (...deps: Deps[]) => void,
  delay = 500,
  deps: Deps[],
) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      // eslint-disable-next-line prefer-spread
      cb.apply(null, deps);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, deps);
};

export default useDebounceEffect;
