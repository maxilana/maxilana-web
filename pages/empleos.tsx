import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import { ExportOutlined } from '@ant-design/icons';
import getAllLegalPages from '~/api/cms/getAllLegalPages';
import getAllCities from '~/api/getAllCities';
import { Layout } from '~/components/layout';
import { City, CMSLegal } from '~/types/Models';

interface GSProps {
  cities: City[];
  legalPages: CMSLegal[];
}

const sections = [
  {
    id: 1,
    name: 'Indeed',
    href: 'https://mx.indeed.com/cmp/Maxilana-Casa-De-Empe%C3%B1o/reviews',
    image: 'https://res.cloudinary.com/adhocti/image/upload/v1631732884/pin-48x48_ikfgau.png',
  },
  {
    id: 2,
    name: 'Computrabajo',
    href: 'https://www.computrabajo.com.mx/la-nacional-pignoraciones-y-remates',
    image: 'https://res.cloudinary.com/adhocti/image/upload/v1631732884/pin-48x48_ikfgau.png',
  },
  {
    id: 3,
    name: 'OCC',
    href: 'https://www.occ.com.mx/perfiles-empresas/163104194179693-la-nacional-pignoraciones-y-remates-de-cv',
    image: 'https://res.cloudinary.com/adhocti/image/upload/v1631732884/pin-48x48_ikfgau.png',
  },
  {
    id: 4,
    name: 'Jooble',
    href: 'https://mx.jooble.org/trabajo-maxilana-casa-empe%C3%B1o',
    image: 'https://res.cloudinary.com/adhocti/image/upload/v1631732884/pin-48x48_ikfgau.png',
  },
];

export const getStaticProps: GetStaticProps<GSProps> = async () => {
  const cities = await getAllCities();
  const legalPages = await getAllLegalPages();

  return {
    props: {
      cities,
      legalPages,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const JobsPage: NextPage<Props> = ({ cities, legalPages }) => {
  return (
    <Layout title="Empleos" cities={cities} legalPages={legalPages}>
      <main className="container mx-auto p-4 my-12 grid gap-8 lg:grid-cols-3">
        <div>
          <h1 className="h4 mb-4">Empleos</h1>
          <p className="text-secondary">
            Permítenos ser parte de tu desarrollo personal y profesional
          </p>
        </div>
        <div className="grid gap-4 md:col-span-2 md:grid-cols-2">
          {sections?.map?.((section) => (
            <a
              key={section.id}
              target="_blank"
              href={section.href}
              rel="noreferrer noopener"
              className="rounded bg-white border hover:bg-surface-dark"
            >
              <div className="py-4 px-3 flex justify-between items-center space-x-4 h-full sm:p-6">
                <Image
                  priority
                  width={56}
                  height={56}
                  layout="fixed"
                  src={section.image}
                  alt={`Logo de ${section.name}`}
                />
                <div className="flex-1">
                  <h3 className="h6">{section.name}</h3>
                </div>
                <span className="circleRight">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path
                      d="M16.6667 9.66667C16.4457 9.66667 16.2337 9.75446 16.0774 9.91074C15.9211 10.067 15.8333 10.279 15.8333 10.5V15.5C15.8333 15.721 15.7455 15.933 15.5893 16.0893C15.433 16.2455 15.221 16.3333 15 16.3333H5C4.77899 16.3333 4.56702 16.2455 4.41074 16.0893C4.25446 15.933 4.16667 15.721 4.16667 15.5V5.5C4.16667 5.27899 4.25446 5.06702 4.41074 4.91074C4.56702 4.75446 4.77899 4.66667 5 4.66667H10C10.221 4.66667 10.433 4.57887 10.5893 4.42259C10.7455 4.26631 10.8333 4.05435 10.8333 3.83333C10.8333 3.61232 10.7455 3.40036 10.5893 3.24408C10.433 3.0878 10.221 3 10 3H5C4.33696 3 3.70107 3.26339 3.23223 3.73223C2.76339 4.20107 2.5 4.83696 2.5 5.5V15.5C2.5 16.163 2.76339 16.7989 3.23223 17.2678C3.70107 17.7366 4.33696 18 5 18H15C15.663 18 16.2989 17.7366 16.7678 17.2678C17.2366 16.7989 17.5 16.163 17.5 15.5V10.5C17.5 10.279 17.4122 10.067 17.2559 9.91074C17.0996 9.75446 16.8877 9.66667 16.6667 9.66667Z"
                      fill="#000F34"
                      fillOpacity="0.87"
                    />
                    <path
                      d="M13.3382 4.66667H14.6549L9.41319 9.9C9.33508 9.97747 9.27308 10.0696 9.23078 10.1712C9.18847 10.2727 9.16669 10.3817 9.16669 10.4917C9.16669 10.6017 9.18847 10.7106 9.23078 10.8121C9.27308 10.9137 9.33508 11.0059 9.41319 11.0833C9.49065 11.1614 9.58282 11.2234 9.68437 11.2657C9.78592 11.308 9.89484 11.3298 10.0049 11.3298C10.1149 11.3298 10.2238 11.308 10.3253 11.2657C10.4269 11.2234 10.519 11.1614 10.5965 11.0833L15.8382 5.85V7.16667C15.8382 7.38768 15.926 7.59964 16.0823 7.75592C16.2385 7.9122 16.4505 8 16.6715 8C16.8925 8 17.1045 7.9122 17.2608 7.75592C17.4171 7.59964 17.5049 7.38768 17.5049 7.16667V3.83333C17.5049 3.61232 17.4171 3.40036 17.2608 3.24408C17.1045 3.0878 16.8925 3 16.6715 3H13.3382C13.1172 3 12.9052 3.0878 12.7489 3.24408C12.5926 3.40036 12.5049 3.61232 12.5049 3.83333C12.5049 4.05435 12.5926 4.26631 12.7489 4.42259C12.9052 4.57887 13.1172 4.66667 13.3382 4.66667Z"
                      fill="#000F34"
                      fillOpacity="0.87"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </Layout>
  );
};
export default JobsPage;
