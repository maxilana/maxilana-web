import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '~/components/ui';
import { InputMask } from '~/components/common';

import styles from '../FormContainer.module.css';

type FormValues = {
  numeroPrestamo: string;
  importePrestamo: number;
};

interface Props {
  onSubmit: (data: FormValues) => Promise<void>;
}

const LoanAccountForm: FC<Props> = ({ onSubmit }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

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
          <div className="mb-6">
            <h2 className="text-lg mb-4">Consulta el estado de cuenta de tu préstamo personal</h2>
            <p>Ingresa los datos de tu préstamo</p>
          </div>
          <div className="grid gap-4">
            <div>
              <InputMask
                label="Número de préstamo"
                errors={errors?.numeroPrestamo}
                placeholder="#-######"
                {...register('numeroPrestamo', {
                  required: true,
                })}
                options={{
                  blocks: [1, 6],
                  delimiter: '-',
                }}
              />
            </div>
            <div>
              <InputMask
                label="Importe del préstamo"
                errors={errors?.importePrestamo}
                {...register('importePrestamo', {
                  required: true,
                  valueAsNumber: true,
                })}
                options={{
                  prefix: '$',
                  numeral: true,
                  numeralPositiveOnly: true,
                  rawValueTrimPrefix: true,
                }}
                onChange={({ target }) => {
                  // @ts-ignore
                  setValue('importePrestamo', target.rawValue); // rawValue viene de Cleave.js
                }}
              />
            </div>
            <div>
              <Button
                fullWidth
                theme="primary"
                loading={loading}
                text={loading ? 'Buscando...' : 'Buscar'}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanAccountForm;
