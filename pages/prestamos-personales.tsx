import Image from 'next/image';
import { NextPage } from 'next';

import { FullBleedBanner, Hero, ServicePaymentCards } from '~/components/common';
import { Layout, Navbar, Container } from '~/components/layout';
import { Card } from '~/components/ui';

const PrestamosPage: NextPage = () => {
  return (
    <Layout title="Prestamos personales">
      <Hero
        title="Te prestamos para lo que necesites"
        subtitle="Resuelve tus imprevistos fácil y rápido"
        cover={
          <Image
            layout="fill"
            src="/demo-hero-prestamos.jpg"
            alt="Mujer hablando por teléfono, consiguiendo clientes"
            objectFit="cover"
          />
        }
        actions={<p className="text-lg text-accent-dark uppercase">De $2,000 hasta $20,000</p>}
      />
      <Container>
        <section className="my-12 max-w-5xl mx-auto sm:my-24">
          <ServicePaymentCards
            actionCard={{
              title: 'Paga en línea',
              imageSource: '/pagar-prestamos.png',
              description: 'Paga tu préstamo cómodamente y sin contratiempos',
              buttonLabel: 'Pagar préstamo personal',
              buttonHref: '/pagos/prestamo-personal',
            }}
            contextCard={{
              title: 'Realiza abonos de tu préstamo sin acudir a sucursal',
              description: 'Por medio de depósito o transferencia en:',
            }}
          />
        </section>
        <section>
          <FullBleedBanner backgroundColor="#EBF1F6">
            <div className="container mx-auto px-4 py-12 sm:py-24">
              <h2 className="text-xl text-center sm:text-2xl">
                Requisitos para el préstamo personal de Maxilana
              </h2>
              <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {requisitos.map((item) => (
                  <Card key={item.id}>
                    <div>
                      <div className="w-[186px] h-[186px] relative mx-auto">
                        <Image
                          width={186}
                          height={186}
                          layout="responsive"
                          src={item.imageSrc}
                          alt={item.label}
                          objectFit="contain"
                        />
                      </div>
                      <p className="text-lg text-center font-semibold">{item.label}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </FullBleedBanner>
        </section>
        <section className="py-12 sm:py-24">
          <h2 className="text-2xl text-center">¿Cómo funciona?</h2>
          <div className="grid gap-6 mt-12 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.id} className="text-center p-2">
                <div className="w-[162px] h-[162px] relative mx-auto mb-4">
                  <Image
                    width={162}
                    height={162}
                    layout="responsive"
                    src={item.imageSrc}
                    alt={item.title}
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-lg mb-4">{`${item.id}. ${item.title}`}</h3>
                <p className="text-sm text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-12 sm:py-24">
          <h2 className="text-2xl">Beneficios de los préstamos personales Maxilana</h2>
          <div className="mt-12 grid gap-6 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.id} className="p-2">
                <div className="w-[80px] h-[80px] relative mb-4">
                  <Image
                    width={80}
                    height={80}
                    layout="responsive"
                    src={item.imageSrc}
                    alt={item.title}
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-lg mb-4">{item.title}</h3>
                <p className="text-sm text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
};

const requisitos = [
  {
    id: 1,
    label: 'IFE o INE Vigente',
    imageSrc: '/requisitos-prestamo-01.png',
  },
  {
    id: 2,
    label: 'Comprobante de ingresos (último mes)',
    imageSrc: '/requisitos-prestamo-02.png',
  },
  {
    id: 3,
    label: 'Comprobante de domicilio reciente (no más de 3 meses)',
    imageSrc: '/requisitos-prestamo-03.png',
  },
  {
    id: 4,
    label: '2 referencias personales y familiares',
    imageSrc: '/requisitos-prestamo-04.png',
  },
];

const howItWorks = [
  {
    id: 1,
    imageSrc: '/pasos-prestamo-01.png',
    title: 'Simula tu crédito y solicita tu préstamo',
    description: 'Ingresa la información solicitada en el formularío. Empieza ya.',
  },
  {
    id: 2,
    imageSrc: '/pasos-prestamo-02.png',
    title: 'El equipo de Maxilana se comunicará contigo',
    description: 'Espera la llamada, a la brevedad un agente de Maxilana se comunicara contigo.',
  },
  {
    id: 3,
    imageSrc: '/pasos-prestamo-03.png',
    title: 'Acude a tu sucursal más cercana',
    description:
      'Visita una de nuestras sucursales, con todos los requisitos solicitados y en una plazo de 24 horas resolvemos.',
  },
  {
    id: 4,
    imageSrc: '/pasos-prestamo-04.png',
    title: 'Te entregamos tu dinero',
    description: 'A partir de ese momento, puedes hacer pagos a capital y reducir tus pagos.',
  },
];

const benefits = [
  {
    id: 1,
    imageSrc: '/pasos-prestamo-01.png',
    title: 'Pago a capital',
    description:
      'Abona a capital cuando lo decidas, baja tu deuda y tus pagos parciales. Sin penalización.',
  },
  {
    id: 2,
    imageSrc: '/pasos-prestamo-02.png',
    title: 'Pago puntual',
    description: 'Al pagar puntualmente tu crédito el último abono se te bonifica.',
  },
  {
    id: 3,
    imageSrc: '/pasos-prestamo-03.png',
    title: 'Tasa de interés personalizada',
    description:
      'Si tu primer crédito fue pagado puntual el segundo obtiene un beneficio de una tasa más baja.',
  },
  {
    id: 4,
    imageSrc: '/pasos-prestamo-04.png',
    title: 'Restructuración de tu crédito',
    description:
      'Tu crédito puede ser reestructurado a la mitad de tiempo estimado (se liquida el préstamo actual y se otorga la diferencia)',
  },
];

export default PrestamosPage;
