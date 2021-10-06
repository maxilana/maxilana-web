import cn from 'classnames';
import { FC } from 'react';
import BackButton from '~/components/pawn/BackButton';

import useCitiesForPawns from '~/hooks/useCitiesForPawns';

import styles from './Form.module.css';
import commonStyles from '../Pawn.module.css';
import { RequestPawn } from '~/types/Requests/RequestPawn';
import JewelryForm from './JewelryForm';
import WatchesForm from './WatchesForm';
import CommonForm from './CommonForm';
import { CMSCategory } from '~/types/Models/CMSCategory';

type FormValues = RequestPawn;
type FormType = CMSCategory['formType'];

interface Props {
  formType: FormType;
  onBack: () => void;
  onSubmit: (data: FormValues) => Promise<void>;
}

const RequestForm: FC<Props> = ({ onBack, onSubmit, formType = 'default' }) => {
  const { cities, isLoading, error } = useCitiesForPawns();
  let Form = CommonForm;

  if (formType === 'joyas') {
    Form = JewelryForm;
  } else if (formType === 'relojes') {
    Form = WatchesForm;
  }

  return (
    <div className={cn(commonStyles.root, styles.root)}>
      {(() => {
        if (error) {
          return (
            <div className={commonStyles.loaderOverlay}>
              <span className={commonStyles.loader}>
                Ocurrió un error vuelve en otra ocasión para poder usar la calculadora.
              </span>
            </div>
          );
        }

        if (isLoading) {
          return (
            <div className={commonStyles.loaderOverlay}>
              <span className={commonStyles.loader}>Cargando datos...</span>
            </div>
          );
        }

        return (
          <div>
            <BackButton onBack={onBack} />
            <h3 className={commonStyles.title}>Contesta las siguientes preguntas</h3>
            <Form cities={cities} onSubmit={onSubmit} />
          </div>
        );
      })()}
    </div>
  );
};

export default RequestForm;
