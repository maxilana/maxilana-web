import { NextPage } from 'next';
import { Layout } from '~/components/layout';
import { Card } from '~/components/ui';
import { DefaultPageProps } from '~/types/DefaultPageProps';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

const OtrosServicios: NextPage<DefaultPageProps> = ({ cities, legalPages }) => {
  return (
    <Layout title="Otros servicios" cities={cities} legalPages={legalPages}>
      <main className="container mx-auto p-4">
        <div className="max-w-5xl space-y-24 pt-12 mx-auto">
          <h1 className="text-center h2">Otros Servicios</h1>
          <div className="grid md:grid-cols-2 gap-24">
            <Card className="prose max-w-none">
              <h2>Tiempo aire y pago de servicios</h2>
              <p>
                Contamos con tiempo aire para todas las compañías celulares y puedes recargar a
                partir de $20.00
              </p>
              <p>
                También puedes pagar tus servicios vigentes como son: agua, luz, teléfono y servicio
                de cable.
              </p>
            </Card>
            <Card className="prose max-w-none">
              <h2>Envíos de dinero</h2>
              <p>
                Contamos con tiempo aire para todas las compañías celulares y puedes recargar a
                partir de $20.00
              </p>
              <p>
                También puedes pagar tus servicios vigentes como son: agua, luz, teléfono y servicio
                de cable.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default OtrosServicios;
