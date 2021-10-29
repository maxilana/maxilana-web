import { FC } from 'react';

import { Button } from '~/components/ui';
import { PawnAccount } from '~/types/Models';
import { EmptyPawns } from '../svg';

interface Props {
  data: PawnAccount[];
  onAddAccount?: () => void;
}

const Empty = ({ onAddAccount }: { onAddAccount?: () => void }) => (
  <div className="px-4 py-6">
    <div className="flex flex-col items-center justify-center gap-3">
      <EmptyPawns />
      <h5 className="h6 text-center">Aún no tienes ninguna boleta de empeño</h5>
      <p className="text-secondary">Por favor agrega una boleta</p>
      <Button size="small" theme="primary" text="Agregar boleta" onClick={onAddAccount} />
    </div>
  </div>
);

const PawnList: FC<Props> = ({ onAddAccount }) => {
  return (
    <div>
      <Empty onAddAccount={onAddAccount} />
    </div>
  );
};

export default PawnList;
