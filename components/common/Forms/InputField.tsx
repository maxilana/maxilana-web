import cn from 'classnames';
import React, { FC, InputHTMLAttributes } from 'react';

import styles from './InputField.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  inline?: boolean;
}

const InputField: FC<Props> = ({ name, label, required, inline, ...rest }) => {
  const { id, type } = rest;
  let isInline = false;

  if (inline || type === 'radio') {
    isInline = true;
  }

  return (
    <div className={cn(styles.root, { [styles.inline]: isInline })}>
      <label htmlFor={id ?? name} className={styles.label}>
        {label}
        {required && <span> *</span>}
      </label>
      <input {...rest} name={name} id={id ?? name} className={styles.input} />
    </div>
  );
};

export default InputField;
