import { FC } from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '../ui';
import { InputField } from '../common';
import styles from './FormContainer.module.css';

type FormValues = {
  concepto: string;
  importe: string;
  titular: string;
  numeroTarjeta: string;
  fechaVencimiento: string;
  codigoSeguridad: number;
  correoElectronico: string;
};

interface Props {
  title: string;
  description: string;
  onSubmit: (data: FormValues) => void;
}

const PaymentForm: FC<Props> = ({ title, description, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    onSubmit(data);
  };

  return (
    <div>
      <div className="px-4">
        <h1 className="text-2xl mb-4">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="py-6 sm:px-4">
        <form className={styles.root} onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <h5 className="text-lg mb-6">Información de pago</h5>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="col-span-2">
                <InputField
                  disabled
                  label="Concepto"
                  value="PAGO DE INTERÉS CONTRATO (REFRENDO)"
                  {...register('concepto')}
                />
              </div>
              <div className="col-span-2">
                <InputField
                  disabled
                  label="Importe a pagar"
                  value={401.5}
                  {...register('importe')}
                />
              </div>
              <div className="col-span-2">
                <InputField
                  label="Titular de la tarjeta"
                  errors={errors?.titular}
                  placeholder="Nombre del titular de la tarjeta"
                  {...register('titular', {
                    required: 'Campo requerido',
                  })}
                />
              </div>
              <div className="col-span-2">
                <InputField
                  maxLength={16}
                  label="Número de la tarjeta"
                  errors={errors?.numeroTarjeta}
                  placeholder="#### #### #### ####"
                  {...register('numeroTarjeta', {
                    required: 'Campo requerido',
                  })}
                />
              </div>
              <div>
                <InputField
                  label="Fecha de vencimiento"
                  placeholder="MM/AA"
                  maxLength={5}
                  errors={errors?.fechaVencimiento}
                  {...register('fechaVencimiento', {
                    required: 'Campo requerido',
                  })}
                />
              </div>
              <div>
                <InputField
                  type="password"
                  label="Cod. de seguridad"
                  placeholder="###"
                  maxLength={3}
                  errors={errors?.codigoSeguridad}
                  {...register('codigoSeguridad', {
                    required: 'Campo requerido',
                  })}
                />
              </div>
              <div className="col-span-2">
                <InputField
                  type="email"
                  label="Correo Electrónico"
                  errors={errors?.correoElectronico}
                  {...register('correoElectronico', {
                    required: 'Campo requerido',
                  })}
                />
              </div>
              <div className="col-span-2">
                <Button fullWidth text="Realizar Pago" theme="primary" loading={false} />
              </div>
            </div>
            <div className="mt-4">
              <small className="text-xs text-center block">
                Al hacer click en &quot;Realizar Pago&quot; aceptas los{' '}
                <Link href="/legal/terminos-condiciones">
                  <a className="text-price underline">TÉRMINOS Y CONDICIONES</a>
                </Link>
              </small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
