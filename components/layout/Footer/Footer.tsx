import { FC } from "react";
import Link from "next/link";
import Image from 'next/image';

import { SocialMenu } from "~/components/common";
import footerMenu from "../../../config/footerMenu";

import styles from './Footer.module.css';

interface Props {
  variant?: "default" | "compact";
}

const Footer: FC<Props> = ({ variant = "default" }) => {
  if (variant === "compact") {
    return (
      <footer className={`${styles.root} ${styles.rootCompact}`}>
        <div className={styles.wrapper}>
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div>
              <Link href="/">
                <a>
                  <Image
                    src="/logo-alt.svg"
                    width={144}
                    height={36}
                    alt="Logotipo blanco de Maxilana"
                  />
                </a>
              </Link>
            </div>
            <Copyright />
          </div>
        </div>
      </footer >
    )
  }

  return (
    <footer className={styles.root}>
      <div className={`${styles.wrapper} ${styles.wrapperDefault}`}>
        <nav className="sm:flex sm:flex-row items-start mb-20">
          <div className="flex-initial sm:mr-12 mb-10 sm:mb-0">
            <div>
              <Link href="/">
                <a>
                  <Image
                    src="/logo-alt.svg"
                    width={144}
                    height={36}
                    alt="Logotipo blanco de Maxilana"
                  />
                </a>
              </Link>
              <span className="block text-sm text-white mb-4">¡Te sacamos del apuro!</span>
            </div>
            <SocialMenu />
          </div>
          <div className="flex-1">
            <ul className={`sm:grid sm:grid-cols-3 xl:grid-cols-5`}>
              {footerMenu.map(section => {
                let items: JSX.Element[] = [];

                if (section.children) {
                  items = section.children.map(link => (
                    <Link key={link.id} href={link.href}>
                      <a className={styles.menuLink}>
                        {link.label}
                      </a>
                    </Link>
                  ));
                }

                return (
                  <li key={section.id} className={styles.menuSection}>
                    <h6 className={styles.menuTitle}>{section.label}</h6>
                    {items}
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </div>
      <Copyright />
    </footer>
  )
}

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <small className={styles.copy}>&copy; Copyright {currentYear} - Todos los derechos reservados</small>
    </div>
  )
}

export default Footer;
