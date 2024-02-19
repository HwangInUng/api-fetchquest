import { IInfoResponseProps } from 'models';
import { DetailResponseButton, MethodContentWrapper } from 'styles';

const MethodInfoResponse = ({
  children,
  title,
  type,
  responses,
  selectResponseCode,
}: IInfoResponseProps) => {
  const resKeys = Object.keys(responses).map(key => Number(key));

  return (
    <MethodContentWrapper>
      <div className='title-box'>
        <p className='title'>{title}</p>
        <div className='button-box'>
          {resKeys.map(key => (
            <DetailResponseButton
              key={key}
              onClick={() => selectResponseCode}
            >
              {responses[key].name}
            </DetailResponseButton>
          ))}
        </div>
      </div>
      <div className={`content-box ${type}`}>{children}</div>
    </MethodContentWrapper>
  );
};

export default MethodInfoResponse;
