import { FC } from 'react';

import OrderEmptyList from './OrderEmptyList';
import { PageLoader } from '~/components/common';
import useAccountStatus from '~/hooks/useAccountStatus';
import { User } from '~/types/Models';

interface Props {
  user?: User;
}

const OrdersHub: FC<Props> = ({ user = null }) => {
  const { account: data, loading } = useAccountStatus(user?.userCode);

  if (loading) {
    return <PageLoader text="Buscando compras..." />;
  }

  //if (data.length < 1) {
  return <OrderEmptyList />;
  //}

  //return <PawnList data={data} onAddAccount={onAddAccount} />;
};

export default OrdersHub;
