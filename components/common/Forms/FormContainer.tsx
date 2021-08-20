import { FC, ReactNode } from "react";

import styles from './FormContainer.module.css';

interface Props {
  children: ReactNode;
}

const FormContainer: FC<Props> = ({ children }) => {
  return (
    <form className={styles.root}>
      {children}
    </form>
  )
}


export default FormContainer;
