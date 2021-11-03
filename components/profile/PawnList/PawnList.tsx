import cn from 'classnames';
import { FC, useCallback, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { RightOutlined as ArrowRight } from '@ant-design/icons';

import { Button } from '~/components/ui';
import { PawnAccount } from '~/types/Models';
import { formatPrice } from '~/modules/hooks/usePrice';
import useEffectOnUpdate from '~/hooks/useEffectOnUpdate';
import roundDecimals from '~/utils/roundDecimals';

interface Props {
  data: PawnAccount[];
  onAddAccount: () => void;
}

type Status = 'idle' | 'selection';

const statusStyles = {
  Activa: {
    textColor: 'text-[#0BBF69]',
    borderColor: 'border-l-[#0BBF69]',
  },
  'Proceso comercial': {
    textColor: 'text-danger',
    borderColor: 'border-l-[#EF3A3ADE]',
  },
  Vencida: {
    textColor: 'text-danger',
    borderColor: 'border-l-[#EF3A3ADE]',
  },
  Extraviada: {
    textColor: 'text-danger',
    borderColor: 'border-l-[#EF3A3ADE]',
  },
};

dayjs.extend(localizedFormat);
const LOCALE = 'es-MX';

const PawnList: FC<Props> = ({ data, onAddAccount }) => {
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  const [ballots, setBallotsToPay] = useState<PawnAccount[]>(data);

  useEffectOnUpdate(() => {
    if (status === 'selection') {
      setCheckedState(new Array(ballots.length).fill(false));
    }
  }, [status]);

  const setIdle = useCallback(() => {
    setBallotsToPay(data);
    setCheckedState([]);
    setStatus('idle');
    setTotal(0);
  }, [status]);

  const handleSelectBallots = () => {
    const payableBallots = data.filter((item) => item.status === 'Activa');
    setBallotsToPay(payableBallots);
    setStatus('selection');
  };

  const handleSelectPayment = (idx: number) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === idx ? !item : item));
    setCheckedState(updatedCheckedState);

    const subtotal = updatedCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + ballots[index].paymentAmount;
      }
      return sum;
    }, 0);

    const totalAmount = roundDecimals(subtotal);
    setTotal(totalAmount);
  };

  return (
    <div className="relative">
      <div className="sticky top-0 border-gray-200 border-b flex px-2 pb-4 justify-between items-center">
        {status === 'idle' ? (
          <>
            <Button size="small" text="Agregar boleta" onClick={onAddAccount} />
            <Button
              size="small"
              theme="primary"
              text="Pagar boletas"
              onClick={handleSelectBallots}
            />
          </>
        ) : (
          <>
            <Button theme="secondary" variant="link" size="small" text="Cerrar" onClick={setIdle} />
            <Button
              size="small"
              theme="primary"
              text={`Pagar refrendos $${total}`}
              onClick={handleSelectBallots}
            />
          </>
        )}
      </div>
      <ul>
        {ballots.map((item, idx) => {
          const textStyle = statusStyles[item.status].textColor;
          const borderStyle = statusStyles[item.status].borderColor;
          const dueDate = dayjs(item.dueDate, 'YYYY-MM-DD').locale('es').format('DD MMM YYYY');
          const paymentAmount = formatPrice({ amount: item.paymentAmount, locale: LOCALE }); // PAGO DE REFRENDO
          const cannotBePaid = item.accountBlocked || item.status === 'Proceso comercial';

          const link = cannotBePaid ? '/sucursales' : `/perfil/boleta?id=${item.accountNumber}`;

          if (status === 'selection') {
            return (
              <li
                key={item.accountNumber}
                className={cn('block border-l-4 border-b', borderStyle, 'hover:cursor-pointer')}
                onClick={() => {
                  handleSelectPayment(idx);
                }}
              >
                <div
                  className={cn(
                    'grid grid-flow-col-dense gap-1 px-4 py-2',
                    'sm:py-8 sm:items-center',
                  )}
                >
                  <div className="row-span-2 sm:row-span-1">
                    <input
                      type="checkbox"
                      id={`boleta-${item.accountNumber}`}
                      name={`${item.accountNumber}-${item.accountLetter}`}
                      checked={checkedState[idx]}
                    />
                  </div>
                  <div>
                    <span className="block text-xs text-secondary">Estado:</span>
                    <span className={cn('text-sm', textStyle)}>{item.status}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-secondary">Boleta:</span>
                    <span className="text-sm">{item.accountNumber}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-secondary">Vigencia:</span>
                    <span className="text-sm">{dueDate}</span>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="block text-xs text-secondary">Refrendo a día de hoy:</span>
                    <span className="text-sm">{paymentAmount}</span>
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={item.accountNumber} className={cn('block border-l-4 border-b', borderStyle)}>
              <Link href={link}>
                <a
                  className={cn(
                    'flex justify-between px-4 py-2 flex-wrap',
                    'sm:py-8 sm:items-center',
                  )}
                >
                  <div>
                    <span className="block text-xs text-secondary">Estado:</span>
                    <span className={cn('text-sm', textStyle)}>{item.status}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-secondary">Boleta:</span>
                    <span className="text-sm">{item.accountNumber}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-secondary">Vigencia:</span>
                    <span className="text-sm">{dueDate}</span>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    {!cannotBePaid ? (
                      <>
                        <span className="block text-xs text-secondary">Refrendo a día de hoy:</span>
                        <span className="text-sm">{paymentAmount}</span>
                      </>
                    ) : (
                      <>
                        <span className="block text-xs text-secondary">
                          No es posible refrendar.
                        </span>
                        <span className="block text-xs text-secondary">
                          Comunícate con una sucursal.
                        </span>
                      </>
                    )}
                  </div>
                  {!cannotBePaid && (
                    <div className="mt-2 sm:mt-0">
                      <span className="rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center">
                        <ArrowRight />
                      </span>
                    </div>
                  )}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PawnList;
