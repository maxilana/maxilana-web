import { FC } from 'react';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

import styles from './SocialMenu.module.css';

const SocialMenu: FC = () => {
  return (
    <ul className={styles.root}>
      <li className={styles.item}>
        <a href="https://www.facebook.com/maxilana" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined />
        </a>
      </li>
      <li className={styles.item}>
        <a href="https://www.instagram.com/maxilanamx/" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined />
        </a>
      </li>
      <li className={styles.item}>
        <a
          href="https://www.linkedin.com/company/maxilana-casa-de-empe%C3%B1o/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined />
        </a>
      </li>
      <li className={styles.item}>
        <a href="https://twitter.com/MaxilanaMx" target="_blank" rel="noopener noreferrer">
          <TwitterOutlined />
        </a>
      </li>
    </ul>
  );
};

export default SocialMenu;
