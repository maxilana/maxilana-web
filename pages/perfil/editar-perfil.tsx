import { NextPage } from 'next';

import { Layout } from '~/components/layout';
import { EditProfileForm } from '~/components/profile';
import Breadcrumbs from '~/components/ui/Breadcrumbs';
import { DefaultPageProps } from '~/types/DefaultPageProps';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

const EditProfilePage: NextPage<DefaultPageProps> = ({ cities, legalPages }) => {
  return (
    <Layout
      cities={cities}
      title="Editar tu perfil"
      legalPages={legalPages}
      meta={{ css: ['/antd/form.css'] }}
    >
      <section className="max-w-2xl mx-auto py-4 sm:px-4 sm:py-8">
        <div className="px-4 sm:px-0">
          <Breadcrumbs
            links={[
              { label: 'Perfil', href: '/perfil' },
              { label: 'Editar perfil', href: '/editar-perfil' },
            ]}
          />
        </div>
        <EditProfileForm />
      </section>
    </Layout>
  );
};

export default EditProfilePage;
