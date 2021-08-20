import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <main className="container mx-auto px-4">{children}</main>;
};

export default Container;
