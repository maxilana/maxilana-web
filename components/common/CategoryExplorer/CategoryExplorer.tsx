import { FC } from "react";

import styles from './CategoryExplorer.module.css';

interface Props {
  categories?: any[];
}

const CategoryExplorer: FC<Props> = ({ categories }) => {
  return (
    <div className={styles.root}>
      <div className={styles.gridWrapper}>
        {demo.map((item, idx) => {
          return (
            <div key={item.id} className={styles.gridElement}>
              <div className={styles.link}>
                <div className="w-[56px] h-[56px]" />
                <span className={styles.linkLabel}>{item.label}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

const demo = [
  { id: 1, label: "Joyería" },
  { id: 2, label: "Relojes" },
  { id: 3, label: "Computadoras" },
  { id: 4, label: "Herramientas" },
  { id: 5, label: "Instrumentos musicales" },
  { id: 6, label: "Lentes" },
  { id: 7, label: "Celulares" },
  { id: 8, label: "Electrodomésticos" },
  { id: 9, label: "Videojuegos" },
  { id: 10, label: "Línea blanca" }
];

export default CategoryExplorer;
