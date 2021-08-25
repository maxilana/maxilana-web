import { FC } from 'react';
import Link from 'next/link';
import { DateTime } from 'luxon';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '../ui';
import { InputField, InputMask } from '../common';
import styles from './FormContainer.module.css';

type FormValues = {
  concepto: string;
  importe: number;
  titular: string;
  numeroTarjeta: string;
  fechaVencimiento: string;
  codigoSeguridad: string;
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
                  {...register('concepto', {
                    value: 'PAGO DE INTERÉS CONTRATO (REFRENDO)',
                  })}
                />
              </div>
              <div className="col-span-2">
                <InputField
                  disabled
                  label="Importe a pagar"
                  value={401.5}
                  {...register('importe', {
                    value: 401.5,
                  })}
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
                <InputMask
                  label="Número de la tarjeta"
                  errors={errors?.numeroTarjeta}
                  placeholder="#### #### #### ####"
                  {...register('numeroTarjeta', {
                    required: 'Campo requerido',
                  })}
                  options={{
                    creditCard: true,
                  }}
                />
              </div>
              <div>
                <InputMask
                  label="Fecha de vencimiento"
                  placeholder="MM/AA"
                  maxLength={5}
                  errors={errors?.fechaVencimiento}
                  options={{
                    date: true,
                    datePattern: ['m', 'Y'],
                  }}
                  {...register('fechaVencimiento', {
                    required: 'Campo requerido',
                    validate: {
                      future: (value) => {
                        const dt = DateTime.fromFormat(value, 'MM/yy');
                        const isFuture = dt.diffNow().isValid;

                        if (dt.isValid && isFuture) {
                          return true;
                        }

                        return 'Fecha inválida';
                      },
                    },
                  })}
                />
              </div>
              <div>
                <InputMask
                  type="password"
                  label="Cod. de seguridad"
                  placeholder="###"
                  maxLength={3}
                  errors={errors?.codigoSeguridad}
                  {...register('codigoSeguridad', {
                    required: 'Campo requerido',
                  })}
                  options={{
                    numericOnly: true,
                  }}
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
