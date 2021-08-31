import cn from 'classnames';
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { WhatsAppOutlined, LoadingOutlined } from '@ant-design/icons';

import { Button } from '~/components/ui';
import { InputField } from '~/components/common';

import styles from '../LoanCalculator/LoanCalculator.module.css';

export type FormValues = {
  Nombre: string;
  CorreoElectronico: string;
  Telefono: string;
};

interface Props {
  onSubmit: (data: FormValues) => Promise<any>;
}

const LoanRequest: FC<Props> = ({ onSubmit }) => {
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
    <div className={cn(styles.root, { [styles.rootLoading]: loading })}>
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
              label="Nombre completo"
              errors={errors?.Nombre}
              {...register('Nombre', {
                required: 'Campo requerido',
              })}
            />
          </div>
          <div>
            <InputField
              type="email"
              label="Correo electrónico"
              errors={errors?.CorreoElectronico}
              {...register('CorreoElectronico', {
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
              errors={errors?.Telefono}
              {...register('Telefono', {
                required: 'Campo requerido',
              })}
            />
          </div>
          <div>
            <Button fullWidth theme="primary" text="Enviar información" />
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
      {loading && (
        <div className={styles.loaderOverlay}>
          <span className={styles.loader}>
            <LoadingOutlined spin style={{ fontSize: 40 }} />
          </span>
        </div>
      )}
    </div>
  );
};

export default LoanRequest;
