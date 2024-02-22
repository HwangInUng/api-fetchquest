import { ReactNode } from 'react';
import { MethodContentWrapper } from 'styles';

export interface IMethodInfoProps {
  children: ReactNode;
  title: string;
  type: string;
}

const MethodInfoRequest = ({
  children,
  title,
  type,
}: IMethodInfoProps) => {
  return (
    <MethodContentWrapper>
      <div className='title-box'>
        <p className='title'>{title}</p>
      </div>
      <div className={`content-box ${type}`}>{children}</div>
    </MethodContentWrapper>
  );
};

export default MethodInfoRequest;
