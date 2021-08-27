import { City } from '~/types/Models';

const empresa = {
  id: 1,
  label: 'Empresa',
  href: '/empresa',
  children: [
    {
      id: 1,
      label: 'Inicio',
      href: '/',
    },
    {
      id: 2,
      label: 'Quiénes Somos',
      href: '/empresa',
    },
    {
      id: 3,
      label: 'Empleos',
      href: '/empleos',
    },
    {
      id: 4,
      label: 'Contacto',
      href: '/contacto',
    },
  ],
};

const servicios = {
  id: 2,
  label: 'Servicios',
  children: [
    {
      id: 1,
      label: 'Empeños',
      href: '/empeno',
    },
    {
      id: 2,
      label: 'Préstamos',
      href: '/prestamos-personales',
    },
    {
      id: 3,
      label: 'Maxilana Vales',
      href: '/vales',
    },
    {
      id: 4,
      label: 'Remates',
      href: '/remates',
    },
    {
      id: 5,
      label: 'Otros Servicios',
      href: '/otros-servicios',
    },
  ],
};

const legal = {
  id: 4,
  label: 'Legal',
  children: [
    {
      id: 1,
      label: 'Aviso de privacidad',
      href: '/legal/aviso-privacidad',
    },
    {
      id: 2,
      label: 'Términos y condiciones',
      href: '/legal/terminos-condiciones',
    },
    {
      id: 3,
      label: 'Contrato de adhesión',
      href: '/legal/contrato-adhesion',
    },
    {
      id: 4,
      label: 'Registro Público',
      href: '/legal/registro-publico',
    },
  ],
};

const recursos = {
  id: 5,
  label: 'Recursos',
  children: [
    {
      id: 1,
      label: 'Pago en línea',
      href: '/pagos',
    },
    {
      id: 2,
      label: 'Facturación',
      href: 'https://facturacion.maxilana.com/',
    },
    {
      id: 3,
      label: 'Ayuda y Soporte',
      href: '/ayuda-soporte',
    },
  ],
};

const footerMenu = (cities: City[]) => {
  const sucursales = {
    id: 3,
    label: 'Sucursales',
    href: '/sucursales',
    children: cities?.length
      ? cities.map((item) => ({
          id: item.id,
          label: item?.name,
          href: `/sucursales/ciudad/${item.slug}`,
        }))
      : [],
  };
  return [empresa, servicios, sucursales, legal, recursos];
};

export default footerMenu;
