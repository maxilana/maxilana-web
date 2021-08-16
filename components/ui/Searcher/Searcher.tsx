import { FC } from "react";
import cn from 'classnames';

import styles from './Searcher.module.css';

const Searcher: FC = () => {
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
        <select
          className={cn(
            styles.inputControl,
            styles.locationInput
          )}
          placeholder="Toca y selecciona la ciudad"
        >
          <option>Guadalajara</option>
        </select>
      </div>
    </div>
  )
}

export default Searcher;
