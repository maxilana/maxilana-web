import cn from 'classnames';
import { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState } from 'react';

import inputStyles from './InputField.module.css';

type ChangeEvt = ChangeEvent<HTMLInputElement>;

interface Props {
  length: number;
  label?: string;
  onComplete: (value: string) => void;
}

const InputCode: FC<Props> = ({ length, onComplete, label = '' }) => {
  const [code, setCode] = useState([...Array(length)].map(() => ''));
  const inputs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (e: ChangeEvt, slot: number) => {
    const num = e.target.value;

    if (/[^0-9]/.test(num)) return;

    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);

    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }

    if (newCode.every((num) => num !== '')) {
      onComplete(newCode.join(''));
    }
  };

  const handleKeyUp = (e: KeyboardEvent, slot: number) => {
    if (e.code === 'Backspace' && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = '';
      setCode(newCode);
      inputs?.current[slot - 1].focus();
    }
  };

  return (
    <div>
      {label !== '' && <label className={inputStyles.label}>{label}</label>}
      <div>
        {code.map((num, idx) => (
          <input
            key={idx}
            className={cn(inputStyles.input, inputStyles.inputCode)}
            value={num}
            maxLength={1}
            inputMode="numeric"
            ref={(ref) => {
              if (ref) {
                inputs.current.push(ref);
              }
            }}
            autoFocus={!code[0].length && idx === 0}
            onKeyUp={(evt) => handleKeyUp(evt, idx)}
            onChange={(evt) => handleChange(evt, idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default InputCode;
