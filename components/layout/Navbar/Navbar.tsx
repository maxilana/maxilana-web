import cn from 'classnames';
import { FC } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';

import { Logo } from '~/components/svg';
import { LoginForm } from '~/components/auth';
import { SocialMenu } from '~/components/common';
import Searcher from '~/components/ui/Searcher';
import { Button } from '~/components/ui';

import styles from './Navbar.module.css';
import mainMenu from '../../../config/mainMenu';
import useToggleState from '~/hooks/useToggleState';
import useUser from '~/hooks/useUser';
import { City } from '~/types/Models';

interface Props {
  cities?: City[];
}

const Modal = dynamic(() => import('../../common/Modal'));

const Navbar: FC<Props> = ({ cities }) => {
  const { asPath } = useRouter();
  const [showModal, toggleModal] = useToggleState(false);
  const { user } = useUser();

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
            {user !== undefined ? (
              <Link href="/perfil">
                <a className="text-white text-sm inline-flex items-center">
                  <UserOutlined /> <span className="hidden ml-2 sm:inline-block">{user.name}</span>
                </a>
              </Link>
            ) : (
              <span role="button" className="text-xs text-white block" onClick={toggleModal}>
                Iniciar Sesión
              </span>
            )}
            <span className={styles.payOnlineLink}>
              <Button size="small" theme="primary" text="Pagar en línea" href="/pagos" />
            </span>
          </div>
        </nav>
      </div>
      {showModal && (
        <Modal open onClose={toggleModal}>
          <LoginForm />
        </Modal>
      )}
    </header>
  );
};

export default Navbar;
