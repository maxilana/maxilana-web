import { FC } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface Props {
  onBack: () => void;
}

const BackButton: FC<Props> = ({ onBack }) => {
  return (
    <span
      role="button"
      onClick={onBack}
      className="uppercase text-price text-sm inline-flex items-center mb-6 space-x-2"
    >
      <ArrowLeftOutlined />
      <span>Regresar</span>
    </span>
  );
};

export default BackButton;
