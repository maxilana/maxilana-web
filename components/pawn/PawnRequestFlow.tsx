import { FC, useState } from 'react';

import PawnRequest from './PawnRequest';
import Calculator from './Calculator';
import PawnSelectableCity from './PawnSelectableCity';
import RequestForm from './RequestForm';

type Status = 'idle' | 'show_whatsapp_list' | 'show_request_form' | 'show_calculator';

const PawnRequestFlow: FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [request, setRequest] = useState(null);

  const handleRequestPawn = (data: any) => {
    console.log(data);
    setRequest(data);
    return Promise.resolve();
  };

  if (status === 'idle') {
    return (
      <PawnRequest
        onSelect={() => {
          setStatus('show_request_form');
        }}
        onWhatsappClick={() => {
          setStatus('show_whatsapp_list');
        }}
      />
    );
  }

  if (status === 'show_request_form') {
    return (
      <RequestForm
        onBack={() => {
          setStatus('idle');
        }}
        onSubmit={handleRequestPawn}
      />
    );
  }

  if (status === 'show_calculator') {
    return <Calculator />;
  }

  return (
    <PawnSelectableCity
      onBack={() => {
        setStatus('idle');
      }}
    />
  );
};

export default PawnRequestFlow;
