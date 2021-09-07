import { FC } from 'react';
import { Img } from '~/components/ui';
import { CMSCategory } from '~/types/Models/CMSCategory';

import styles from './CategoryExplorer.module.css';

interface Props {
  categories: Array<Partial<CMSCategory>>;
}

const CategoryExplorer: FC<Props> = ({ categories }) => {
  return (
    <div className={styles.root}>
      <div className={styles.gridWrapper}>
        {categories.map((item) => (
          <div key={item.id} className={styles.gridElement}>
            <div className={styles.link}>
              <div className="w-[56px] h-[56px]">
                {!!item?.image?.url && (
                  <Img
                    src={item?.image?.url}
                    width={item?.image?.width}
                    height={item?.image?.height}
                    layout="fixed"
                    alt={item?.image?.alternativeText || item?.name}
                  />
                )}
              </div>
              <span className={styles.linkLabel}>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryExplorer;
