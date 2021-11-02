import { FC } from 'react';

import { PawnAccount } from '~/types/Models';
import PawnList from '../PawnList';
import PawnEmptyList from '../PawnEmptyList';

interface Props {
  data: PawnAccount[];
  onAddAccount?: () => void;
}

const noop = () => {};

const PawnProfileHub: FC<Props> = ({ data, onAddAccount = noop }) => {
  if (!data || data.length < 1) {
    return <PawnEmptyList onAddAccount={onAddAccount} />;
  }

  console.log(data);

  return <PawnList data={data} />;
};

export default PawnProfileHub;
