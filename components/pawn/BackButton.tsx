import { FC } from 'react';
import { LeftOutlined } from '@ant-design/icons';

interface Props {
  onBack: () => void;
}

const BackButton: FC<Props> = ({ onBack }) => {
  return (
    <span
      role="button"
      onClick={onBack}
      className="uppercase text-price text-sm inline-flex items-center mb-3"
    >
      <LeftOutlined />
      Regresar
    </span>
  );
};

export default BackButton;
