import cn from 'classnames';
import React, { InputHTMLAttributes, Ref } from 'react';

import styles from './InputField.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  inline?: boolean;
  errors?: string[];
}

const InputField = React.forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  const { name, label, required, inline, errors = [], ...rest } = props;
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
      <input {...rest} ref={ref} name={name} id={id ?? name} className={styles.input} />
      {/* {errors && <span className={styles.errorMessage}>{errors.message}</span>} */}
      {errors.length > 0 && <span className={styles.errorMessage}>{errors[0]}</span>}
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField;
