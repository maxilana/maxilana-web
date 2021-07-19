import { FC } from "react";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

import styles from './SocialMenu.module.css';

const SocialMenu: FC = () => {
  return (
    <ul className={styles.root}>
      <li className={styles.item}>
        <a>
          <FacebookOutlined />
        </a>
      </li>
      <li className={styles.item}>
        <a>
          <InstagramOutlined />
        </a>
      </li>
      <li className={styles.item}>
        <a>
          <LinkedinOutlined />
        </a>
      </li>
      <li className={styles.item}>
        <a>
          <TwitterOutlined />
        </a>
      </li>
    </ul>
  )
}

export default SocialMenu;
