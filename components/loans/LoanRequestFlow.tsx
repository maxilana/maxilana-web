import { useState } from 'react';
import { FC } from 'react';

import LoanRequest from './LoanRequest';
import LoanResponse from './LoanResponse';
import LoanCalculator from './LoanCalculator';
import type { LoanRequestData } from './LoanRequest';
// import sendLoanProspect from "~/api/loans/sendLoandProspect";

type Status = 'calculate' | 'form' | 'response';

type Config = {
  cityCode: number;
  policy: string;
  amount: number;
};

const LoanRequestFlow: FC = () => {
  const [status, setStatus] = useState<Status>('calculate');
  const [loanConfig, setLoanConfig] = useState<Config | null>(null);

  const handleRequestLoan = (data: LoanRequestData) => {
    if (loanConfig !== null) {
      const params = {
        ...data,
        CodigoPlaza: loanConfig.cityCode,
        MontoSolicitado: loanConfig.amount,
        CodigoPolitica: loanConfig.policy,
      };

      console.log(params);
      setStatus('response');

      return Promise.resolve();
    }

    return Promise.reject(Error('Faltan datos para enviar la petición de préstamo'));
  };

  if (status === 'calculate') {
    return (
      <LoanCalculator
        onSubmit={(data) => {
          setStatus('form');
          setLoanConfig(data as Config);
        }}
      />
    );
  }

  if (status === 'form') {
    return <LoanRequest onSubmit={handleRequestLoan} />;
  }

  return (
    <LoanResponse
      onReturn={() => {
        setLoanConfig(null);
        setStatus('calculate');
      }}
    />
  );
};

export default LoanRequestFlow;
