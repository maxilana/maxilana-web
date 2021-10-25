import { FC } from 'react';

import { Button } from '~/components/ui';
import { EmptyPawns } from '../svg';

const Empty = () => (
  <div className="px-4 py-6">
    <div className="flex flex-col items-center justify-center gap-3">
      <EmptyPawns />
      <h5 className="h6 text-center">Aún no tienes ninguna boleta de empeño</h5>
      <p className="text-secondary">Por favor agrega una boleta</p>
      <Button size="small" theme="primary" text="Agregar boleta" />
    </div>
  </div>
);

const PawnList: FC = () => {
  return (
    <div>
      <Empty />
    </div>
  );
};

export default PawnList;
