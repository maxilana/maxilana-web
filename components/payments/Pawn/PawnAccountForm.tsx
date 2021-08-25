import { FC } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '~/components/ui';
import { InputField } from '~/components/common';
import styles from '../FormContainer.module.css';

type FormValues = {
  numeroBoleta: string;
  letra: string;
  monto: string;
};

interface Props {
  onSubmit: (data: FormValues) => Promise<void>;
}

const PawnAccountForm: FC<Props> = ({ onSubmit }) => {
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
        <h1 className="text-2xl mb-4">Boleta de empeño</h1>
        <p>
          No pierdas tu artículo y paga tu refrendo. Consulta aquí el estado de cuenta de tu boleta
          de empeño, y controla mejor tus gastos.
        </p>
      </div>
      <div className="py-6 sm:px-4">
        <div className="flex flex-col gap-6 items-center sm:flex-row">
          <div>
            <Image
              width={328}
              height={139}
              layout="fixed"
              src="/imagen-boleta.jpg"
              alt="Imagen muestra de boleta de empeño"
            />
          </div>
          <form className={styles.root} onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mb-6">
              <h2 className="text-lg mb-4">Consulta el estado de cuenta de tu boleta</h2>
              <p>Ingresa los datos que vienen escritos en tu boleta</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="col-span-2">
                <InputField
                  maxLength={5}
                  label="Número de boleta"
                  errors={errors?.numeroBoleta}
                  {...register('numeroBoleta', {
                    required: 'Campo requerido',
                  })}
                />
              </div>
              <div>
                <InputField
                  label="Letra"
                  maxLength={1}
                  errors={errors?.letra}
                  {...register('letra', {
                    required: 'Campo requerido',
                  })}
                />
              </div>
              <div>
                <InputField
                  placeholder="$0.00"
                  label="Monto del préstamo"
                  errors={errors?.monto}
                  {...register('monto', {
                    required: 'Campo requerido',
                  })}
                />
              </div>
              <div className="col-span-2">
                <Button fullWidth text="Consultar" theme="primary" loading={false} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PawnAccountForm;
