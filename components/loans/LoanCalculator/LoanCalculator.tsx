import cn from 'classnames';
import Radio from 'antd/lib/radio';
import Slider from 'antd/lib/slider';
import React, { FC, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

import { Button } from '~/components/ui';
import { SelectField } from '~/components/common';

import { usePrice } from '~/modules/hooks';
import useLoanConfig from '~/hooks/useLoanConfig';
import useCitiesForLoans from '~/hooks/useCitiesForLoans';

import styles from './LoanCalculator.module.css';
import useCalculateLoan from '~/hooks/useCalculateLoan';
import useEffectOnUpdate from '~/hooks/useEffectOnUpdate';

const humanizedTimeLimit: { [key: string]: string } = {
  A: 'semanales',
  C: 'quincenales',
};

interface Props {
  onSubmit: (data: { [key: string]: any }) => void;
}

const LoanCalculator: FC<Props> = ({ onSubmit }) => {
  const [cityCode, setCityCode] = useState('');
  const { cities, isLoading, error } = useCitiesForLoans();
  const { config, isLoading: isUpdating } = useLoanConfig(cityCode);

  const [policy, setPolicy] = useState(null);
  const [uiAmount, setUIAmount] = useState(1000);
  const [amount, setAmount] = useState(uiAmount);

  const loanAtPeriod = useCalculateLoan(policy ?? '', amount);
  const { price: formattedAmount } = usePrice({ amount: uiAmount });

  useEffectOnUpdate(() => {
    setPolicy(null);
    setAmount(1000);
    setUIAmount(1000);
  }, [cityCode]);

  const handleSubmit = () => {
    const data = { cityCode, policy, amount };
    onSubmit(data);
  };

  return (
    <div className={cn(styles.root, { [styles.rootLoading]: isUpdating })}>
      {(() => {
        if (error) {
          return (
            <div className={styles.loaderOverlay}>
              <span className={styles.loader}>
                Ocurrió un error vuelve en otra ocasión para poder usar la calculadora.
              </span>
            </div>
          );
        }

        if (isLoading) {
          return (
            <div className={styles.loaderOverlay}>
              <span className={styles.loader}>Cargando datos...</span>
            </div>
          );
        }

        const policies = config?.periodicity.flatMap((item) => {
          return item.policies.map((policy) => ({
            ...policy,
            code: item.code,
          }));
        });

        return (
          <React.Fragment>
            <h5 className={styles.title}>Calculadora de préstamo</h5>
            <div className={styles.field}>
              <div className={styles.split}>
                <label htmlFor="ciudad" className={styles.label}>
                  Elige tu ciudad:
                </label>
                <div className={styles.splitAway}>
                  <SelectField
                    id="ciudad"
                    name="ciudad"
                    defaultValue="default"
                    options={
                      cities !== undefined
                        ? cities.map((item) => ({
                            value: item.code,
                            label: item.name,
                          }))
                        : []
                    }
                    onChange={({ target }) => {
                      setCityCode(target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={cn(styles.field, styles.fieldCenter)}>
              <label htmlFor="monto" className={styles.label}>
                ¿Cuánto necesitas?
              </label>
              <span className={styles.result}>{formattedAmount}</span>
              <div className="my-4">
                <Slider
                  value={uiAmount}
                  disabled={!config}
                  min={config?.minAmount || 0}
                  max={config?.maxAmount || 0}
                  step={config?.amountInterval || 0}
                  tooltipVisible={false}
                  trackStyle={{
                    backgroundColor: '#1E83E1',
                  }}
                  handleStyle={{
                    borderColor: '#1E83E1',
                  }}
                  onChange={setUIAmount}
                  onAfterChange={setAmount}
                />
              </div>
            </div>
            <div className={cn(styles.field, styles.fieldCenter)}>
              <label htmlFor="plazo" className={styles.label}>
                Elige el periodo de pagos
              </label>
              <div className="my-2">
                <Radio.Group
                  value={policy}
                  onChange={({ target }) => {
                    setPolicy(target.value);
                  }}
                >
                  {policies?.map((item) => (
                    <span key={item.policyCode} className="p-2 inline-block">
                      <Radio value={item.policyCode}>
                        {`${item.timeLimit} pagos ${humanizedTimeLimit[item.code]}`}
                      </Radio>
                    </span>
                  ))}
                </Radio.Group>
              </div>
            </div>
            <div className={cn(styles.field, styles.fieldCenter)}>
              <h6>Esto pagarías cada período</h6>
              <span className={cn(styles.result, styles.resultFinal)}>
                {loanAtPeriod !== '' ? loanAtPeriod : '...'}
              </span>
            </div>
            <div>
              <Button fullWidth theme="primary" text="Solicitar préstamo" onClick={handleSubmit} />
            </div>
            {isUpdating && (
              <div className={styles.loaderOverlay}>
                <span className={styles.loader}>
                  <LoadingOutlined spin style={{ fontSize: 40 }} />
                </span>
              </div>
            )}
          </React.Fragment>
        );
      })()}
    </div>
  );
};

export default LoanCalculator;
