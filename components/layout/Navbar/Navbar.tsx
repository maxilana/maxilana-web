import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';

import { Logo } from '~/components/svg';
import { SocialMenu } from '~/components/common';
import Searcher from '~/components/ui/Searcher';
import { City } from '~/types/Models';

import styles from './Navbar.module.css';
import mainMenu from '../../../config/mainMenu';
import { Button } from '~/components/ui';

interface Props {
  cities?: City[];
}

const Navbar: FC<Props> = ({ cities }) => {
  const { asPath } = useRouter();
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
                <li
                  key={item.id}
                  className={cn(styles.navigationItem, {
                    [styles.current]: asPath !== '/' && item.href.includes(asPath),
                  })}
                >
                  <Link href={item.href} prefetch={false}>
                    <a target={item?.target || '_self'}>{item.label}</a>
                  </Link>
                </li>
              ))}
              <li className={cn(styles.navigationItem, styles.navigationItemPayment)}>
                <Button
                  size="small"
                  theme="primary"
                  text="Pagar en línea"
                  href="/pagos"
                  fullWidth
                />
              </li>
              <li className={styles.navigationItemSocial}>
                <SocialMenu brand size="small" />
              </li>
            </ul>
            <Searcher cities={cities} />
          </div>
          <div className={styles.contextualArea}>
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
