import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { FC, useReducer } from 'react';
import useEffectOnUpdate from '~/hooks/useEffectOnUpdate';
import { CMSCategory } from '~/types/Models/CMSCategory';
import parseQuery from '~/utils/parseQuery';

import PawnRequest from './PawnRequest';
import Calculator from './Calculator';
import SelectCity from './SelectCity';
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
  category: number | null;
  article: number;
  pawnConfig: PawnCalculation | null;
};

interface Props {
  categories: CMSCategory[];
}

const initialState: State = {
  status: 'idle',
  category: null,
  article: -1,
  pawnConfig: null,
};

const reducer = (state: any, action: any) => {
  const { payload, type } = action;

  switch (type) {
    case 'SHOW_START':
      return initialState;
    case 'IDLE':
      return initialState;
    case 'SHOW_WHATSAPP_LIST':
      return { ...state, status: 'show_whatsapp_list' };
    case 'SHOW_ARTICLES':
      return {
        ...state,
        category: payload?.category || state.category,
        status: 'show_articles',
      };
    case 'SHOW_REQUEST_FORM':
      return {
        ...state,
        status: 'show_request_form',
        ...(payload.article ? { article: payload.article } : {}),
      };
    case 'SHOW_CALCULATOR':
      return {
        ...state,
        status: 'show_calculator',
        pawnConfig: payload.config,
      };
    case 'SET':
      return {
        ...state,
        ...payload,
      };
    default:
      console.log(type);
    // throw new Error('No existe esa acción');
  }
};

const PawnRequestFlow: FC<Props> = ({ categories }) => {
  const router = useRouter();
  const [state, dispatch] = useReducer<(state: State, action: any) => State>(reducer, initialState);

  useEffectOnUpdate(() => {
    const query: ParsedUrlQuery = { status: state.status };
    if (state.category) query.category = `${state?.category}`;
    if (state.article > -1) query.article = `${state?.article}`;
    if (state.status !== 'idle' || Object.keys(router.query).length) {
      router.push(`?${parseQuery(query)}`, undefined, { shallow: true });
    }
  }, [state.status, state.article]);

  useEffectOnUpdate(() => {
    dispatch({
      type: 'SET',
      payload: { ...state, ...router.query },
    });
  }, [router.query]);

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

  if (state.status === 'show_whatsapp_list') {
    return <SelectCity onBack={router.back} />;
  }

  if (state.status === 'show_articles' && state.category !== null) {
    return (
      <SelectArticle
        onBack={router.back}
        category={categories.find((item) => item.id === state.category)}
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
    return <RequestForm onBack={router.back} onSubmit={handleRequestForm} />;
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
      categories={categories}
      onSelect={(category) => {
        if (category?.subcategories?.length) {
          dispatch({
            type: 'SHOW_ARTICLES',
            payload: { category: category.id },
          });
        } else {
          dispatch({
            type: 'SHOW_REQUEST_FORM',
            payload: { article: category?.code || 2 },
          });
        }
      }}
      onWhatsappClick={() => {
        dispatch({ type: 'SHOW_WHATSAPP_LIST' });
      }}
    />
  );
};

export default PawnRequestFlow;
