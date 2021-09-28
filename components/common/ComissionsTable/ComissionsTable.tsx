import { FC } from 'react';
import Link from 'next/link';

const ComissionsTable: FC = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto my-6">
        <table className="w-full table-auto text-center text-sm">
          <thead>
            <tr>
              <th className="sm:p-2 bg-surface-dark text-left text-xs">Plaza</th>
              <th className="sm:p-2 bg-surface-dark text-xs">
                <span className="text-base">CAT</span> Promedio
              </th>
              <th className="sm:p-2 bg-surface-dark text-xs">Costo Mensual Totalizado</th>
              <th className="sm:p-2 bg-surface-dark text-xs">Costo Diario Totalizado</th>
            </tr>
          </thead>
          <tbody>
            {comissions.map((item) => (
              <tr key={item.id}>
                <td className="p-2 bg-white border-surface-dark border-b-2 text-sm text-left">
                  {item.branch}
                </td>
                <td className="p-2 bg-white border-surface-dark border-b-2 text-sm">
                  {item.avgCat}
                </td>
                <td className="p-2 bg-white border-surface-dark border-b-2 text-sm">{item.cmt}</td>
                <td className="p-2 bg-white border-surface-dark border-b-2 text-sm">{item.cdt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="max-w-6xl mx-auto my-6">
        <div className="grid gap-4 text-center sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
          <div>
            <a
              href="http://www.banxico.org.mx/CAT/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-price hover:underline"
            >
              Calculadora de CAT
            </a>
          </div>
          <div>
            <a
              href="http://www.banxico.org.mx/ley-de-transparencia/consultas-frecuentes/costo-anual-total.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-price hover:underline"
            >
              Explicación y metodología del CAT
            </a>
          </div>
          <div>
            <a
              href="https://rpce.profeco.gob.mx/casa_empeno.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-price hover:underline"
            >
              Registro público de casas de empeño [RPCE-0338-2015]
            </a>
          </div>
          <div>
            <Link href="/legal/contrato-adhesion">
              <a className="text-xs text-price hover:underline">
                Contrato de adhesión registrado ante PROFECO
              </a>
            </Link>
          </div>
          <div>
            <Link href="/preguntas-frecuentes/empenos">
              <a className="text-xs text-price hover:underline">
                Explicación de operación y empeño
              </a>
            </Link>
          </div>
          <div>
            <Link href="/sucursales">
              <a className="text-xs text-price hover:underline">
                Horarios de operación, atención al cliente y aclaraciones
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const comissions = [
  {
    id: 1,
    branch: 'Culiacán',
    avgCat: '207.34%',
    cmt: '17.28%',
    cdt: '0.58%',
  },
  {
    id: 2,
    branch: 'Hermosillo',
    avgCat: '207.34%',
    cmt: '17.28%',
    cdt: '0.58%',
  },
  {
    id: 3,
    branch: 'Tijuana',
    avgCat: '221.42%',
    cmt: '18.45%',
    cdt: '0.62%',
  },
  {
    id: 4,
    branch: 'Mazatlán',
    avgCat: '207.77%',
    cmt: '17.31%',
    cdt: '0.58%',
  },
  {
    id: 5,
    branch: 'Guadalajara',
    avgCat: '209.49%',
    cmt: '17.46%',
    cdt: '0.58%',
  },
];

export default ComissionsTable;
