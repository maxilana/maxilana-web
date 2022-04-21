import { FC, useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import { Order } from '~/types/Models';
import { useRouter } from 'next/router';
import { PawnAccount } from '~/types/Models';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import { formatPrice } from '~/modules/hooks/usePrice';
interface Props {
  data: PawnAccount[];
}

type Status = 'idle' | 'selection';

const ResumeList: FC<Props> = ({ data }) => {
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState<Status>('idle');
  const [checkedState, setCheckedState] = useState<boolean[]>([]);
  const [ballots, setBallotsToPay] = useState<PawnAccount[]>(data);
  let Count = ballots.length;
  let User = capitalizarPalabras(ballots[0].name);
  let totalRef = 0;
  let totalPre = 0;
  let totalDes = 0;
  let totalDescNocom = 0;
  let strTotalDesempeno = ''; //;
  let strTotalPrestamo = ''; //;
  let strTotalRefrendo = ''; //;
  console.log(ballots);
  ballots.forEach((ball) => {
    totalRef = totalRef + ball.paymentAmount;
    strTotalRefrendo = formatPrice({ amount: totalRef, locale: LOCALE });

    totalPre = totalPre + ball.loanAmount;
    strTotalPrestamo = formatPrice({ amount: totalPre, locale: LOCALE });

    (totalDescNocom = totalDescNocom + ball.paymenAmounNocomision),
      (totalDes = totalDescNocom + totalPre);
    strTotalDesempeno = formatPrice({ amount: totalDes, locale: LOCALE });
  });
  const LOCALE = 'es-MX';
  function capitalizarPalabras(val: string) {
    return val
      .toLowerCase()
      .trim()
      .split(' ')
      .map((v) => v[0].toUpperCase() + v.substring(1))
      .join(' ');
  }
  return (
    <ul>
      {
        /* {data.map((order) => (*/
        <li key="PedroMiranta">
          <a>
            <div className="flex" style={{ marginTop: '10px' }}>
              <div style={{ marginLeft: '1.5rem', width: '100%' }}>
                <p>Nombre del cliente</p>
              </div>
              <div style={{ marginLeft: '1.5rem', width: '100%' }}>
                <p>{User}</p>
              </div>
            </div>
            <div className="flex" style={{ marginTop: '10px' }}>
              <div style={{ marginLeft: '1.5rem', width: '100%' }}>
                <p>Empeños vigentes</p>
              </div>
              <div style={{ marginLeft: '1.5rem', width: '100%' }}>
                <p>{Count}</p>
              </div>
            </div>
            <div className="flex" style={{ marginTop: '10px' }}>
              <div style={{ marginLeft: '1.5rem', width: '100%' }}>
                <p>Total de préstamo</p>
              </div>
              <div style={{ marginLeft: '1.5rem', width: '100%' }}>
                <p>{strTotalPrestamo}</p>
              </div>
            </div>
            <div className="flex" style={{ marginTop: '10px' }}>
              <div style={{ marginLeft: '1.5rem', width: '100%' }}>
                <p>Total para refrendar</p>
              </div>
              <div style={{ marginLeft: '1.5rem', width: '100%' }}>
                <p>{strTotalRefrendo}</p>
              </div>
            </div>
            <div className="flex" style={{ marginTop: '10px' }}>
              <div style={{ marginLeft: '1.5rem', width: '100%' }}>
                <p>Total para desempeñar</p>
              </div>
              <div style={{ marginLeft: '1.5rem', width: '100%' }}>
                <p>{strTotalDesempeno}</p>
              </div>
            </div>
          </a>
        </li>
        /* ))} */
      }
    </ul>
  );
};

export default ResumeList;
