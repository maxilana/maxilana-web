import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '~/components/ui';
import { InputField } from '~/components/common';

import styles from '../FormContainer.module.css';
import { useState } from 'react';

type FormValues = {
  numeroDistribuidor: string;
  password: string;
};

interface Props {
  onSubmit: (data: FormValues) => Promise<void>;
}

const CouponAccountForm: FC<Props> = ({ onSubmit }) => {
  const {
    register,
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
        <h1 className="text-2xl mb-4">Maxilana Vales</h1>
        <p>Paga directamente a tu distribuidora</p>
      </div>
      <div className="py-6 sm:px-4">
        <form className={styles.root} onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-6">
            <h2 className="text-lg mb-4">Consulta el estado de cuenta a la quincena actual</h2>
            <p>Ingresa los datos de tu distribuidor</p>
          </div>
          <div className="grid gap-4">
            <div>
              <InputField
                type="number"
                label="Número de distribuidor"
                errors={errors?.numeroDistribuidor}
                {...register('numeroDistribuidor', {
                  required: 'Campo requerido',
                })}
              />
            </div>
            <div>
              <InputField
                type="password"
                label="Contraseña"
                errors={errors?.password}
                {...register('password', {
                  required: 'Campo requerido',
                })}
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

export default CouponAccountForm;
