import { FC } from 'react';

import { User } from '~/types/Models';
import PawnList from '../PawnList';
import PawnEmptyList from '../PawnEmptyList';
import useAccountStatus from '~/hooks/useAccountStatus';
import { PageLoader } from '~/components/common';

interface Props {
  user?: User;
  onAddAccount?: () => void;
}

const noop = () => {};

const PawnProfileHub: FC<Props> = ({ user = null, onAddAccount = noop }) => {
  const { account: data, loading } = useAccountStatus(4);

  if (loading) {
    return <PageLoader text="Obteniendo la información..." />;
  }

  if (data.length < 1) {
    return <PawnEmptyList onAddAccount={onAddAccount} />;
  }

  console.log(data);

  return <PawnList data={data} onAddAccount={onAddAccount} />;
};

export default PawnProfileHub;
