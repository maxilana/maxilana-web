import { FC } from 'react';
import Slider from 'antd/lib/slider';

import { Button } from '~/components/ui';
import commonStyles from '../Pawn.module.css';

const Calculator: FC = () => {
  return (
    <div className={commonStyles.root}>
      <div className="bg-white p-4">
        <div className="text-center mb-6">
          <h3 className={commonStyles.title}>Valuación de empeño</h3>
        </div>
        <div className="mb-6">
          <dl className="text-center flex flex-col sm:flex-row sm:justify-between sm:text-left">
            <dt className="text-lg">Lo que te prestamos por tu artículo es:</dt>
            <dd className="font-semibold text-xl text-[#0BBF69]">$4,000</dd>
          </dl>
        </div>
        <div className="mb-6">
          <dl className="text-center flex flex-col sm:flex-row sm:justify-between sm:text-left">
            <dt className="text-lg">Elige el período de pagos</dt>
            <dd className="text-lg text-brand">8 pagos semanales</dd>
          </dl>
          <div className="my-4">
            <Slider
              tooltipVisible={false}
              trackStyle={{
                backgroundColor: '#1E83E1',
              }}
              handleStyle={{
                borderColor: '#1E83E1',
              }}
            />
          </div>
        </div>
        <div className="mb-6">
          <p className="text-center text-lg sm:text-left">¿Cuánto pagarías en el período</p>
          <div className="mt-4">
            <dl className="flex items-center">
              <dt className="text-sm w-[40%] sm:w-[65%]">Público general:</dt>
              <dd>
                <span className="p-2 rounded-sm text-sm text-secondary font-semibold">$560.00</span>
                <span className="text-xs text-secondary ml-2">12% Tasa de interés</span>
              </dd>
            </dl>
          </div>
          <div className="mt-4">
            <dl className="flex items-center">
              <dt className="text-sm w-[40%] sm:w-[65%]">Cliente bronce:</dt>
              <dd>
                <span className="p-2 rounded-sm text-sm text-white font-semibold bg-[#CE9550]">
                  $558.12
                </span>
                <span className="text-xs text-secondary ml-2">11.4% Tasa de interés</span>
              </dd>
            </dl>
          </div>
          <div className="mt-4">
            <dl className="flex items-center">
              <dt className="text-sm w-[40%] sm:w-[65%]">Cliente plata:</dt>
              <dd>
                <span className="p-2 rounded-sm text-sm font-semibold bg-gray-300">$557.30</span>
                <span className="text-xs text-secondary ml-2">11.2% Tasa de interés</span>
              </dd>
            </dl>
          </div>
          <div className="mt-4">
            <dl className="flex items-center">
              <dt className="text-sm w-[40%] sm:w-[65%]">Cliente oro:</dt>
              <dd>
                <span className="p-2 rounded-sm text-sm font-semibold bg-accent-dark">$555.00</span>
                <span className="text-xs text-secondary ml-2">11% Tasa de interés</span>
              </dd>
            </dl>
          </div>
        </div>
        <div className="mb-6">
          <Button fullWidth theme="whatsapp" text="Valuar con un experto" />
        </div>
        <small className="inline-block text-secondary text-xxs text-center">
          Este cálculo es informativo y no representa un préstamo formal. Cuando acudas a una
          sucursal Maxilana, uno de nuestros Valuadores Certificados te dirá el valor de tu
          artículo, que dependerá de sus condiciones y características. El monto final del préstamo
          que podemos darte dependerá del avalúo de tu artículo y tu historial como cliente. CAT
          promedio sin I.V.A. para fines informativos y de comparación. Calculado al 1 de enero de
          2019. Todas las operaciones prendarias causarán I.V.A. I.V.A. 16% en Guadalajara,
          Culiacán, Mazatlán, Hermosillo, excepto en: Tijuana, Mexicali, del 8% y se cobrará al
          momento de realizar el Empeño) - Contrato aprobado e inscrito con el No. 1718-2018.
        </small>
      </div>
    </div>
  );
};

export default Calculator;
