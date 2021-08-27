import { FC } from 'react';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';

import { Logo } from '~/components/svg';
import Searcher from '~/components/ui/Searcher';

import styles from './Navbar.module.css';
import mainMenu from '../../../config/mainMenu';
import { Button } from '~/components/ui';

const Navbar: FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <nav className={styles.areas}>
          <div className={styles.brandingArea}>
            <label className={styles.drawerTrigger} role="button" htmlFor="menuControl">
              <MenuOutlined style={{ color: 'white', fontSize: 24 }} />
            </label>
            <Link href="/" prefetch={false}>
              <a className={styles.logo}>
                <Logo />
              </a>
            </Link>
          </div>
          <div className={styles.navigationArea}>
            <input type="checkbox" id="menuControl" className={styles.menuControl} />
            <label className={styles.backdrop} role="button" htmlFor="menuControl" />
            <ul className={styles.navigationMenu}>
              {mainMenu.map((item) => (
                <li key={item.id} className={styles.navigationItem}>
                  <Link href={item.href} prefetch={false}>
                    <a>{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <Searcher />
          </div>
          <div className={styles.contextualArea}>
            <Link href="/" prefetch={false}>
              <a className={styles.loginLink}>Iniciar sesión</a>
            </Link>
            <span className={styles.payOnlineLink}>
              <Button size="small" theme="primary" text="Pagar en línea" href="/pagos" />
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
