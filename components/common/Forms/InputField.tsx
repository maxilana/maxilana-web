import React, { ChangeEventHandler, FC, HTMLAttributes, InputHTMLAttributes } from 'react';

import styles from './InputField.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const InputField: FC<Props> = ({ name, label, required, ...rest }) => {
  return (
    <React.Fragment>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span> *</span>}
      </label>
      <input {...rest} id={name} name={name} className={styles.input} />
    </React.Fragment>
  );
};

export default InputField;
