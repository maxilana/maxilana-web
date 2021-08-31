import cn from 'classnames';
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { WhatsAppOutlined } from '@ant-design/icons';

import { Button } from '~/components/ui';
import { InputField } from '~/components/common';

import styles from '../LoanCalculator/LoanCalculator.module.css';

type FormValues = {
  nombre: string;
  correo: string;
  telefono: string;
};

interface Props {
  onSubmit: (data: FormValues) => void;
}

const ProspectForm: FC<Props> = ({ onSubmit }) => {
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
    <div className={styles.root}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-6 text-center">
          <h5 className={cn(styles.title, 'mb-4')}>Información de contacto</h5>
          <p>
            Al llenar la solicitud recibirás una llamada de parte de un miembro del equipo de
            Maxilana.
          </p>
        </div>
        <div className="grid gap-4">
          <div>
            <InputField
              label="Número de préstamo"
              errors={errors?.nombre}
              {...register('nombre', {
                required: 'Campo requerido',
              })}
            />
          </div>
          <div>
            <InputField
              type="email"
              label="Correo electrónico"
              errors={errors?.correo}
              {...register('correo', {
                required: 'Campo requerido',
              })}
            />
          </div>
          <div>
            <InputField
              type="tel"
              label="Teléfono"
              maxLength={10}
              placeholder="##########"
              errors={errors?.telefono}
              {...register('telefono', {
                required: 'Campo requerido',
              })}
            />
          </div>
          <div>
            <Button fullWidth theme="primary" loading={loading} text="Enviar información" />
          </div>
          <div>
            <Button
              fullWidth
              theme="whatsapp"
              text="Comunícate con un asesor"
              icon={<WhatsAppOutlined />}
              onClick={(evt) => {
                evt.preventDefault();
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProspectForm;
