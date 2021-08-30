import cn from 'classnames';
import { FC } from 'react';
import Radio from 'antd/lib/radio';
import Slider from 'antd/lib/slider';

import { SelectField } from '~/components/common';
import { Button } from '~/components/ui';

import styles from './LoanCalculator.module.css';
import { useState } from 'react';
import { usePrice } from '~/modules/hooks';

type PaymentTerms = 'quincenal' | 'semanal';

const cities = [
  {
    value: 'culiacán',
    label: 'Culiacán y Navolato',
  },
  {
    value: 'mazatlán',
    label: 'Mazatlán',
  },
];

const LoanCalculator: FC = () => {
  const [loan, setLoan] = useState(4000);
  const [paymentTerm, setPaymentTerm] = useState<PaymentTerms>('quincenal');

  const { price: formattedLoan } = usePrice({ amount: loan });
  const formattedPaymentTerm = {
    quincenal: 'quincenales',
    semanal: 'semanales',
  };

  return (
    <div className={styles.root}>
      <h5 className={styles.title}>Calculadora de préstamo</h5>
      <div className={styles.field}>
        <div className={styles.split}>
          <label htmlFor="ciudad" className={styles.label}>
            Elige tu ciudad:
          </label>
          <div className={styles.splitAway}>
            <SelectField
              id="ciudad"
              name="ciudad"
              placeholder="Selecciona tu ciudad"
              options={cities}
            />
          </div>
        </div>
      </div>
      <div className={cn(styles.field, styles.fieldCenter)}>
        <label htmlFor="monto" className={styles.label}>
          ¿Cuánto necesitas?
        </label>
        <span className={styles.result}>{formattedLoan}</span>
        <div className="my-4">
          <Slider
            min={2000}
            max={20000}
            step={2000}
            tooltipVisible={false}
            defaultValue={loan}
            trackStyle={{
              backgroundColor: '#1E83E1',
            }}
            handleStyle={{
              borderColor: '#1E83E1',
            }}
            onChange={(value) => {
              setLoan(value);
            }}
          />
        </div>
      </div>
      <div className={cn(styles.field, styles.fieldCenter)}>
        <label htmlFor="plazo" className={styles.label}>
          ¿Cada cuánto quieres pagar?
        </label>
        <div className="my-2">
          <Radio.Group
            name="plazo"
            size="large"
            defaultValue={paymentTerm}
            onChange={({ target }) => {
              setPaymentTerm(target.value);
            }}
          >
            <Radio.Button value="quincenal">Quincenal</Radio.Button>
            <Radio.Button value="semanal">Semanal</Radio.Button>
          </Radio.Group>
        </div>
      </div>
      <div className={cn(styles.field, styles.fieldCenter)}>
        <label htmlFor="rango" className={styles.label}>
          Elige cómo quieres pagarlo
        </label>
        <span className={cn(styles.result, styles.resultSmall)}>
          <strong>8</strong>
          {` pagos ${formattedPaymentTerm[paymentTerm]}`}
        </span>
        <div className="my-4">
          <Slider
            min={2}
            max={10}
            step={2}
            tooltipVisible={false}
            trackStyle={{
              backgroundColor: '#1E83E1',
            }}
            handleStyle={{
              borderColor: '#1E83E1',
            }}
          />
        </div>
      </div>
      <div className={cn(styles.field, styles.fieldCenter)}>
        <h6>¿Cuánto pagarías en el período</h6>
        <span className={cn(styles.result, styles.resultFinal)}>$854.73</span>
      </div>
      <div>
        <Button fullWidth theme="primary" text="Solicitar préstamo" />
      </div>
    </div>
  );
};

export default LoanCalculator;
