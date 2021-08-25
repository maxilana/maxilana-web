import { FC } from 'react';

import { Button, Calendar } from '~/components/ui';

import styles from '../FormContainer.module.css';

interface Props {
  onSubmit: () => void;
}

const PawnCalculateForm: FC<Props> = ({ onSubmit }) => {
  return (
    <div>
      <div className="px-4">
        <h1 className="text-2xl mb-4">Boleta de empeño</h1>
        <p>
          La consulta muestra la información al dia de hoy, al seleccionar una fecha de cálculo
          diferente los montos cambiarán automaticamente
        </p>
      </div>
      <div className="py-6 sm:px-4">
        <form className={styles.root}>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <Calendar
                onSelect={(date) => {
                  console.log(date);
                }}
              />
            </div>
            <div>
              <p className="text-sm text-secondary">Cliente:</p>
              <p className="text-primary font-semibold">Camarillo Cervantes Miguel Ángel</p>
              <div className="mb-4">
                <div className="py-2 border-b border-b-[#0C5E9C26]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Número boleta actual:</span>
                    <span className="text-primary font-semibold">118320.00</span>
                  </div>
                </div>
                <div className="py-2 border-b border-b-[#0C5E9C26]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Tipo de empeño:</span>
                    <span className="text-sm text-primary">Mensual 3 meses alhada</span>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Fecha de empeño:</span>
                    <span className="text-sm text-primary">06 Enero 2020</span>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Fecha de vencimiento:</span>
                    <span className="text-sm text-primary">06 Abril 2020</span>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Estado de boleta:</span>
                    <span className="text-sm text-danger">Vencida</span>
                  </div>
                </div>
                <div className="py-2 border-b border-b-[#0C5E9C26]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Monto de préstamo:</span>
                    <span className="text-sm text-primary">$1,000.00</span>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Pago de interés:</span>
                    <span className="text-sm text-primary font-semibold">$1,000.00</span>
                  </div>
                </div>
                <div className="py-2 border-b border-b-[#0C5E9C26]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Desempeño:</span>
                    <span className="text-sm text-primary">$1,401.50</span>
                  </div>
                </div>
              </div>
              <Button fullWidth theme="primary" text="Pagar refrendo" onClick={onSubmit} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PawnCalculateForm;
