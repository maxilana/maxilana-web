import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import getAllLegalPages from '~/api/cms/getAllLegalPages';
import getPaymentsList from '~/api/cms/getPayments';
import getAllCities from '~/api/getAllCities';
import getPaymentBySlug from '~/api/getPaymentBySlug';
import { Layout } from '~/components/layout';
import { DefaultPageProps } from '~/types/DefaultPageProps';
import { CMSPayment } from '~/types/Models';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const payments = await getPaymentsList();
  return {
    paths: payments.map((payment) => ({ params: { slug: payment.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  DefaultPageProps<{ payment: CMSPayment }>,
  { slug: string }
> = async (ctx) => {
  const cities = await getAllCities();
  const legalPages = await getAllLegalPages();
  const payment = await getPaymentBySlug(`${ctx?.params?.slug}`);
  return {
    props: {
      cities,
      legalPages,
      payment,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const PaymentPage: NextPage<Props> = ({ cities, legalPages, payment }) => {
  return (
    <Layout meta={payment?.seo} cities={cities} legalPages={legalPages}>
      <h1>{payment.title}</h1>
    </Layout>
  );
};

export default PaymentPage;
