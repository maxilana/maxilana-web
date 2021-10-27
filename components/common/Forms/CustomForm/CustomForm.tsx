import { Form, FormProps } from 'antd';
import defaultValidateMessages from 'config/validationMessages';
import { FC, PropsWithChildren, useState } from 'react';
import useToggleState from '~/hooks/useToggleState';
import { FetcherError } from '~/modules/lib/errors';
import FormFeedback from '../../FormFeedback';

interface Props extends FormProps {
  containerType?: 'default' | 'modal';
  onSubmit: (data: any) => Promise<any>;
}

/**
 * Un componente que se estaba repitiendo a lo largo de
 *  la web app.
 *
 * TODO: Valorar si es posible cambiarlo en todas partes
 */
const CustomForm: FC<PropsWithChildren<Props>> = ({
  children,
  onSubmit,
  containerType = 'default',
  ...antdFormProps
}) => {
  const [error, setError] = useState<string>('');
  const [showFeedback, toggleFeedback] = useToggleState(false);
  const containerClass = containerType === 'default' ? 'formContainer' : 'formContainerModal';

  const handleSubmit = (values: any) => {
    setError('');

    onSubmit(values).catch((err) => {
      setError((err as FetcherError).message);
      toggleFeedback();
    });
  };

  return (
    <Form {...antdFormProps} onFinish={handleSubmit} validateMessages={defaultValidateMessages}>
      <div className={containerClass}>
        <FormFeedback errorMessage={error} visible={showFeedback} onDismiss={toggleFeedback}>
          {children}
        </FormFeedback>
      </div>
    </Form>
  );
};

export default CustomForm;
