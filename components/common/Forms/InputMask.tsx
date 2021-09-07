import Cleave from 'cleave.js/react';
import { CleaveOptions } from 'cleave.js/options';
import React, { InputHTMLAttributes, Ref } from 'react';

import styles from './InputField.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  options: CleaveOptions;
  errors?: { [key: string]: any };
}

/**
 * @TODO: Declarar la ref correcta para el componente Cleave
 */
const InputMask = React.forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  const { name, label, required, options, errors = null, ...rest } = props;
  const { id } = rest;

  return (
    <div className={styles.root}>
      <label htmlFor={id ?? name} className={styles.label}>
        {label}
        {required && <span> *</span>}
      </label>
      <Cleave
        {...rest}
        // @ts-ignore
        ref={ref}
        name={name}
        id={id ?? name}
        options={options}
        className={styles.input}
      />
      {errors && <span className={styles.errorMessage}>{errors.message}</span>}
    </div>
  );
});

InputMask.displayName = 'InputMask';

export default InputMask;
