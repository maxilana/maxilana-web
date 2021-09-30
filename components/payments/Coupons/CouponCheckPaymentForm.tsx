import { FC, useState } from 'react';
import { Form, Radio } from 'antd';

import { Button } from '~/components/ui';
import { usePrice } from '~/modules/hooks';

import styles from '../FormContainer.module.css';
import { CouponAccount } from '~/types/Models';

type FormValues = {
  paymentAmount: number;
};

interface Props {
  account: CouponAccount;
  onSubmit: (data: FormValues) => Promise<void>;
}

const CouponCheckPaymentForm: FC<Props> = ({ account, onSubmit }) => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const { price: paymentAmount } = usePrice({ amount: account.amount });

  const handleFormSubmit = async (data: FormValues) => {
    setLoading(true);
    await onSubmit(data);
    setLoading(false);
  };

  return (
    <Form
      form={form}
      onFinish={handleFormSubmit}
      initialValues={{
        paymentAmount: account.amount,
      }}
    >
      <div className="px-4">
        <h1 className="text-2xl mb-4">Maxilana Vales</h1>
        <p>Paga directamente a tu distribuidora</p>
      </div>
      <div className="py-6 sm:px-4">
        <div className={styles.root}>
          <div>
            <p className="text-sm text-secondary">Distribuidor:</p>
            <p className="text-primary font-semibold">{account.clientName}</p>
            <div className="grid gap-4">
              <div>
                <p className="text-sm text-secondary">
                  El importe que se muestra acontinuación es para la quincena{' '}
                  <span className="text-primary font-semibold">{account.currentDate}</span>
                </p>
              </div>
              <Form.Item name="paymentAmount" rules={[{ required: true }]}>
                <Radio value={account.amount} defaultChecked>
                  <span>
                    Pagar <strong>{paymentAmount}</strong>
                  </span>
                </Radio>
              </Form.Item>
              <Button fullWidth theme="primary" loading={loading} text="Pagar quincena" />
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default CouponCheckPaymentForm;
