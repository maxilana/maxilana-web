import React, { ChangeEventHandler, FC } from "react";

import styles from './InputField.module.css';

interface Props {
  name: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const InputField: FC<Props> = ({
  name,
  label,
  onChange,
}) => {
  return (
    <React.Fragment>
      <label
        htmlFor={name}
        className={styles.label}
      >
        {label} <span>*</span>
      </label>
      <input
        type="text"
        id={name}
        name={name}
        onChange={onChange}
        className={styles.input}
        placeholder="Escribe tu nombre aquí"
      />
    </React.Fragment>
  )
}

export default InputField;
