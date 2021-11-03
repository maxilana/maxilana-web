import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Layout } from '~/components/layout';
import { Breadcrumbs } from '~/components/ui';
import { PageLoader } from '~/components/common';
import PaymentFlow from '~/components/profile/PaymentFlow';
import useAccountStatus from '~/hooks/useAccountStatus';
import { DefaultPageProps } from '~/types/DefaultPageProps';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

const PawnBallotProfilePage: NextPage<DefaultPageProps> = ({ cities, legalPages }) => {
  const router = useRouter();
  const { account } = useAccountStatus(4);
  const { id } = router.query;
  let ballot = null;

  if (account) {
    ballot = account.find((item) => item.accountNumber === id);
  }

  return (
    <Layout
      cities={cities}
      title="Detalle de boleta"
      legalPages={legalPages}
      meta={{ css: ['/antd/form.css', '/antd/radio.css'] }}
    >
      <section className="max-w-2xl mx-auto py-4 sm:py-8">
        <div className="px-4">
          <Breadcrumbs
            links={[
              { label: 'Perfil', href: '/perfil' },
              { label: 'Detalle de boleta', href: '/perfil/boleta' },
            ]}
          />
        </div>
        {ballot !== null && ballot !== undefined ? (
          <PaymentFlow data={ballot} />
        ) : (
          <PageLoader text="Obteniendo la boleta..." />
        )}
      </section>
    </Layout>
  );
};

export default PawnBallotProfilePage;
