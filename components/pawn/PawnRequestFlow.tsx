import { FC, useState } from 'react';

import PawnRequest from './PawnRequest';
import PawnSelectableCity from './PawnSelectableCity';

type Status = 'request' | 'select_city';

const PawnRequestFlow: FC = () => {
  const [status, setStatus] = useState<Status>('request');

  if (status === 'request') {
    return (
      <PawnRequest
        onWhatsappClick={() => {
          setStatus('select_city');
        }}
      />
    );
  }

  return (
    <PawnSelectableCity
      onBack={() => {
        setStatus('request');
      }}
    />
  );
};

export default PawnRequestFlow;
