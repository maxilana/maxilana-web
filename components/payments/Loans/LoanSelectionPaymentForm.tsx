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

const LoanSelectionPaymentForm: FC<Props> = ({ onSubmit }) => {
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
        <h1 className="text-2xl mb-4">Préstamos personales</h1>
        <p>Abona a tu préstamo personal en línea</p>
      </div>
      <div className="py-6 sm:px-4">
        <form className={styles.root} onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <p className="text-sm text-secondary">Cliente:</p>
            <p className="text-primary font-semibold">Maira Jaime Herrera</p>
            <div className="grid gap-4">
              <div>
                <p className="text-sm text-secondary">
                  Seleccione una opción de abono a su préstamo, en caso de seleccionar “Otro
                  importe” habrá de capturar el importe en el recuadro.
                </p>
              </div>
              <div>
                <p className="text-primary font-semibold mb-4">¿Qué desea hacer con su préstamo?</p>
                <InputField
                  checked
                  type="radio"
                  id="abonar"
                  label="$242.43 de abono tiene hasta el 16/05/2021"
                  {...register('pago', {
                    value: 242.43,
                  })}
                />
                <InputField
                  type="radio"
                  id="liquidar"
                  label="$2042.43 para liquidar al 09/09/2021"
                  {...register('pago', {
                    value: 2042.43,
                  })}
                />
              </div>
              <Button fullWidth theme="primary" text="Proceder al pago" loading={loading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanSelectionPaymentForm;
