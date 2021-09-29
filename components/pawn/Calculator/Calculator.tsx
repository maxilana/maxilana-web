import cn from 'classnames';
import Slider from 'antd/lib/slider';
import { FC, useMemo, useState } from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';
import BackButton from '~/components/pawn/BackButton';

import { Button } from '~/components/ui';
import { CMSWhatsApp } from '~/types/Models/CMSWhatsApp';
import commonStyles from '../Pawn.module.css';
import { PawnCalculation } from '~/types/Models/PawnCalculation';
import { usePrice } from '~/modules/hooks';
import { formatPrice } from '~/modules/hooks/usePrice';

interface Props {
  data: PawnCalculation;
  whatsapp: CMSWhatsApp;
  onBack: () => void;
}

const datatable = [
  {
    id: 1,
    label: 'Público general',
    percent: 100,
    amount: 10,
    customClass: '',
  },
  {
    id: 2,
    label: 'Cliente bronce',
    percent: 100,
    amount: 10,
    customClass: 'text-white bg-[#CE9550]',
  },
  {
    id: 3,
    label: 'Cliente plata',
    percent: 100,
    amount: 10,
    customClass: 'bg-gray-300',
  },
  {
    id: 4,
    label: 'Cliente oro',
    percent: 100,
    amount: 10,
    customClass: 'bg-accent-dark',
  },
];

const Calculator: FC<Props> = ({ data, whatsapp, onBack }) => {
  const [monthlySpan, setMonthlySpan] = useState(1);
  const { price: amount } = usePrice({ amount: data.amount });

  const config = useMemo(() => {
    const interestArray = [
      data.monthlyInterest,
      data.bronzeInterest,
      data.silverInterest,
      data.goldInterest,
    ];

    const table = datatable.map((item, idx) => {
      const span = data.amount / monthlySpan;
      const amount = span * interestArray[idx] + span;
      const percent = interestArray[idx] * 100;

      return {
        ...item,
        percent,
        amount: formatPrice({ amount, locale: 'es-MX' }),
      };
    });

    return table;
  }, [monthlySpan]);

  return (
    <div className={commonStyles.root}>
      <div className="bg-white p-4">
        <BackButton onBack={onBack} />
        <div className="text-center mb-6">
          <h3 className={commonStyles.title}>Valuación de empeño</h3>
        </div>
        <div className="mb-6">
          <dl className="text-center flex flex-col sm:flex-row sm:justify-between sm:text-left">
            <dt className="text-lg">El préstamo aproximado por tu artículo es:</dt>
            <dd className="font-semibold text-xl text-[#0BBF69]">{amount}</dd>
          </dl>
        </div>
        {data.maxMonthlyPaymentLimit > 1 ? (
          <div className="mb-6">
            <dl className="text-center flex flex-col sm:flex-row sm:justify-between sm:text-left">
              <dt className="text-lg">Elige el período de pagos:</dt>
              <dd className="text-lg text-brand">
                {monthlySpan > 1 ? `${monthlySpan} pagos mensuales` : '1 solo pago'}
              </dd>
            </dl>
            <div className="my-4">
              <Slider
                min={1}
                step={1}
                max={data.maxMonthlyPaymentLimit}
                value={monthlySpan}
                tooltipVisible={false}
                trackStyle={{
                  backgroundColor: '#1E83E1',
                }}
                handleStyle={{
                  borderColor: '#1E83E1',
                }}
                onChange={setMonthlySpan}
              />
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <dl className="text-center flex flex-col sm:flex-row sm:justify-between sm:text-left">
              <dt className="text-lg">Período máximo:</dt>
              <dd className="text-lg text-brand">1 mes</dd>
            </dl>
          </div>
        )}
        <div className="mb-6">
          <p className="text-center text-lg sm:text-left">¿Cuánto pagarías en el período?</p>
          {config.map((item) => (
            <div key={item.id} className="mt-4">
              <dl className="grid grid-cols-2 items-center">
                <dt className="text-sm">{`${item.label}:`}</dt>
                <dd>
                  <span
                    className={cn(
                      'p-2 rounded-sm text-sm text-secondary font-semibold',
                      item.customClass,
                    )}
                  >
                    {item.amount}
                  </span>
                  <span className="block p-2 text-xs text-secondary sm:inline-block sm:ml-4 sm:p-0">
                    {`${item.percent.toFixed(2)}% Tasa de interés`}
                  </span>
                </dd>
              </dl>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <Button
            fullWidth
            size="large"
            theme="whatsapp"
            text="Valuar con un experto"
            href={`https://api.whatsapp.com/send?phone=521${whatsapp.number}/text=Hola me gustaría solicitar un empeño`}
            icon={<WhatsAppOutlined style={{ fontSize: 20, color: '#FFF' }} />}
            target="_blank"
          />
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
