import { FC, useReducer } from 'react';

import PawnRequest from './PawnRequest';
import Calculator from './Calculator';
import PawnSelectableCity from './PawnSelectableCity';
import SelectArticle from './SelectArticle';
import RequestForm from './RequestForm';
import { RequestPawn } from '~/types/Requests/RequestPawn';
import getCalculatedPawn from '~/api/getCalculatedPawn';
import { PawnCalculation } from '~/types/Models/PawnCalculation';

type Status =
  | 'idle'
  | 'show_whatsapp_list'
  | 'show_articles'
  | 'show_request_form'
  | 'show_calculator';

type State = {
  status: Status;
  category: number;
  article: number;
  pawnConfig: PawnCalculation | null;
};

const initialState: State = {
  status: 'idle',
  category: 0,
  article: -1,
  pawnConfig: null,
};

const reducer = (state: any, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case 'SHOW_START':
      return initialState;
    case 'SHOW_CITIES':
      return { ...state, status: 'show_whatsapp_list' };
    case 'SHOW_ARTICLES':
      return {
        ...state,
        category: payload.category,
        status: 'show_articles',
      };
    case 'SHOW_REQUEST_FORM':
      return {
        ...state,
        status: 'show_request_form',
        article: payload.article,
      };
    case 'SHOW_CALCULATOR':
      return {
        ...state,
        status: 'show_calculator',
        pawnConfig: payload.config,
      };
    default:
      throw new Error('No existe esa acción');
  }
};

const PawnRequestFlow: FC = () => {
  const [state, dispatch] = useReducer<(state: State, action: any) => State>(reducer, initialState);

  const handleRequestForm = async (data: RequestPawn) => {
    const params = {
      ...data,
      codigoarticulo: state.article,
    };

    const config = await getCalculatedPawn(params);

    dispatch({
      type: 'SHOW_CALCULATOR',
      payload: { config },
    });
  };

  const goToStart = () => {
    dispatch({ type: 'SHOW_START' });
  };

  if (state.status === 'show_whatsapp_list') {
    return <PawnSelectableCity onBack={goToStart} />;
  }

  if (state.status === 'show_articles') {
    return (
      <SelectArticle
        onBack={goToStart}
        category={state.category}
        onSelectArticle={(article) => {
          dispatch({
            type: 'SHOW_REQUEST_FORM',
            payload: { article },
          });
        }}
      />
    );
  }

  if (state.status === 'show_request_form') {
    return <RequestForm onBack={goToStart} onSubmit={handleRequestForm} />;
  }

  if (state.status === 'show_calculator' && state.pawnConfig) {
    return (
      <Calculator
        data={state.pawnConfig}
        onWhatsappClick={() => {
          dispatch({ type: 'SHOW_CITIES' });
        }}
      />
    );
  }

  return (
    <PawnRequest
      onSelect={(category) => {
        dispatch({
          type: 'SHOW_ARTICLES',
          payload: { category },
        });
      }}
      onWhatsappClick={() => {
        dispatch({ type: 'SHOW_CITIES' });
      }}
    />
  );
};

export default PawnRequestFlow;
