import { IMethodInfoProps } from 'models';
import { MethodContentWrapper } from 'styles';

const MethodInfoContent = ({
  children,
  title,
  type,
}: IMethodInfoProps) => {
  const className = `${type} content-box`;
  return (
    <MethodContentWrapper>
      <p className='title'>{title}</p>
      <div className={className}>{children}</div>
    </MethodContentWrapper>
  );
};

export default MethodInfoContent;
