import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '~/components/ui';
import { InputField } from '~/components/common';

import styles from '../FormContainer.module.css';
import { useState } from 'react';

type FormValues = {
  pago: number;
};

interface Props {
  onSubmit: (data: FormValues) => Promise<void>;
}

const CouponCheckPaymentForm: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const [loading, setLoading] = useState(false);

  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    await onSubmit(data);
    setLoading(false);
  };

  return (
    <div>
      <div className="px-4">
        <h1 className="text-2xl mb-4">Maxilana Vales</h1>
        <p>Paga directamente a tu distribuidora</p>
      </div>
      <div className="py-6 sm:px-4">
        <form className={styles.root} onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <p className="text-sm text-secondary">Distribuidor:</p>
            <p className="text-primary font-semibold">Lilia Concepción Valencia Rojo</p>
            <div className="grid gap-4">
              <div>
                <p className="text-sm text-secondary">
                  El importe que se muestra acontinuación es para la quincena{' '}
                  <span className="text-primary font-semibold">15 Mayo 2020</span>
                </p>
              </div>
              <div>
                <InputField
                  checked
                  type="radio"
                  label="Pago de $17,201.33"
                  {...register('pago', {
                    value: 17201.33,
                  })}
                />
              </div>
              <Button fullWidth theme="primary" text="Pagar quincena" onClick={() => {}} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CouponCheckPaymentForm;
