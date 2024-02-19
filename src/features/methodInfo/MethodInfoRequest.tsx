import { IMethodInfoProps } from 'models';
import { MethodContentWrapper } from 'styles';

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
