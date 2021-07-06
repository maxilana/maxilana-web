import styles from './Link.module.css';

const Link = ({ title, children }) => (
  <a className={styles.linkContainer}>
    <h2 className={styles.linkTitle}>{title}</h2>
    {children}
  </a>
);

export default Link;
