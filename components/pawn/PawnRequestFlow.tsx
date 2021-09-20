import { FC, useState } from 'react';

import PawnRequest from './PawnRequest';
import Calculator from './Calculator';
import PawnSelectableCity from './PawnSelectableCity';
import RequestForm from './RequestForm';
import SelectArticle from './SelectArticle';

type Status =
  | 'idle'
  | 'show_whatsapp_list'
  | 'show_articles'
  | 'show_request_form'
  | 'show_calculator';

const PawnRequestFlow: FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [request, setRequest] = useState(null);
  const [category, setCategory] = useState<number | null>(null);

  const handleRequestPawn = (data: any) => {
    console.log(data);
    setRequest(data);
    return Promise.resolve();
  };

  const goToStart = () => {
    setStatus('idle');
  };

  if (status === 'idle') {
    return (
      <PawnRequest
        onSelect={(category) => {
          setCategory(category);
          setStatus('show_articles');
        }}
        onWhatsappClick={() => {
          setStatus('show_whatsapp_list');
        }}
      />
    );
  }

  if (status === 'show_articles' && category) {
    return <SelectArticle onBack={goToStart} category={category} />;
  }

  if (status === 'show_request_form') {
    return <RequestForm onBack={goToStart} onSubmit={handleRequestPawn} />;
  }

  if (status === 'show_calculator') {
    return <Calculator />;
  }

  return <PawnSelectableCity onBack={goToStart} />;
};

export default PawnRequestFlow;
