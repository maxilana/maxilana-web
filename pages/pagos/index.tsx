import { NextPage } from 'next';

import { Button, Card } from '~/components/ui';
import { Container, Layout } from '~/components/layout';
import Image from 'next/image';
import { DefaultPageProps } from '~/types/DefaultPageProps';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

const payments = [
  {
    id: 1,
    title: 'Boleta de empeño',
    description: 'Realiza el pago del refrendo para no perder tu artículo.',
    image: {
      src: '/ilustracion-pago-refrendo.png',
      alt: 'Ilustración de pago de refrendo',
    },
    link: {
      title: 'Pagar refrendo',
      href: '/pagos/empeno',
    },
  },
  {
    id: 2,
    title: 'Préstamo personal',
    description: 'Abona a tu préstamo personal en línea fácil y sencillo',
    image: {
      src: '/ilustracion-pago-prestamo.png',
      alt: 'Ilustración de pago de préstamo',
    },
    link: {
      title: 'Pagar préstamo',
      href: '/pagos/prestamos-personales',
    },
  },
  {
    id: 3,
    title: 'Maxilana Vales',
    description: 'Paga directamente a tu distribuidora.',
    image: {
      src: '/ilustracion-pago-vales.png',
      alt: 'Ilustración de pago de vales',
    },
    link: {
      title: 'Pagar vales',
      href: '/pagos/vales',
    },
  },
];

const PaymentsPage: NextPage<DefaultPageProps> = ({ cities, legalPages }) => {
  return (
    <Layout
      title="Paga online online directamente a tu distribuidora"
      cities={cities}
      legalPages={legalPages}
    >
      <Container>
        <div className="py-12 sm:py-16">
          <div className="mb-11">
            <h1 className="text-2xl mb-4 sm:text-4xl">Pago en línea</h1>
            <p className="text-lg">
              Ahora puedes pagar nuestros servicios desde la comodidad de tu casa.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
            {payments.map((item) => (
              <Card key={item.id}>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Image
                      width={370}
                      height={179}
                      layout="responsive"
                      alt={item.image.alt}
                      src={item.image.src}
                    />
                  </div>
                  <div className="flex-grow text-center">
                    <h2 className="text-lg mb-4">{item.title}</h2>
                    <p className="text-secondary mb-4">{item.description}</p>
                  </div>
                  <Button fullWidth theme="primary" href={item.link.href} text={item.link.title} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default PaymentsPage;
