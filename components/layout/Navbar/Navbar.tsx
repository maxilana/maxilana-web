import { FC } from "react";
import Link from "next/link";
import { MenuOutlined } from '@ant-design/icons';

import { Logo } from "~/components/svg";
import Searcher from "~/components/ui/Searcher";

import styles from './Navbar.module.css';
import mainMenu from '../../../config/mainMenu';
import { Button } from "~/components/ui";

const Navbar: FC = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.areas}>
          <div className={styles.brandingArea}>
            <span className={styles.menu} role="button">
              <MenuOutlined style={{ color: "white", fontSize: 28 }} />
            </span>
            <div className={styles.logoContainer}>
              <Link href="/">
                <a className={styles.logo}>
                  <Logo />
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.navigationArea}>
            <Searcher />
            <ul className={styles.navigationMenu}>
              {mainMenu.map(item => (
                <li key={item.id} className={styles.navigationItem}>
                  <Link href={item.href}>
                    <a>{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.contextualArea}>
            <Link href="/">
              <a className={styles.loginLink}>
                Iniciar sesión
              </a>
            </Link>
            <Button
              size="small"
              theme="primary"
              text="Pagar en línea"
              href="/pago-en-linea"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;
