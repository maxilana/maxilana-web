import cn from 'classnames';
import { FC } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { RightOutlined as ArrowRight } from '@ant-design/icons';

import { Button } from '~/components/ui';
import { PawnAccount } from '~/types/Models';
import { formatPrice } from '~/modules/hooks/usePrice';

interface Props {
  data: PawnAccount[];
  onAddAccount: () => void;
}

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
  return (
    <div className="relative">
      <div className="sticky top-0 border-gray-200 border-b flex px-2 pb-4 justify-between items-center">
        <Button size="small" text="Agregar boleta" onClick={onAddAccount} />
        <Button size="small" theme="primary" text="Pagar boletas" onClick={() => {}} />
      </div>
      <ul>
        {data.map((item) => {
          const textStyle = statusStyles[item.status].textColor;
          const borderStyle = statusStyles[item.status].borderColor;
          const dueDate = dayjs(item.dueDate, 'YYYY-MM-DD').locale('es').format('DD MMM YYYY');
          const paymentAmount = formatPrice({ amount: item.paymentAmount, locale: LOCALE }); // PAGO DE REFRENDO

          return (
            <li key={item.accountNumber} className={cn('block border-l-4 border-b', borderStyle)}>
              <Link href="/perfil">
                <a className={cn('flex justify-between px-4 py-2 flex-wrap', 'sm:py-8')}>
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
                  <div className="mt-2 sm:mt-0">
                    <span className="rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center">
                      <ArrowRight />
                    </span>
                  </div>
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
