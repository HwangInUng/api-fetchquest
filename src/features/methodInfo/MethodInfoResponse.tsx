import { IInfoResponseProps } from 'models';
import { DetailResponseButton, MethodContentWrapper } from 'styles';
import { ERROR_CODE_TEXT } from 'utils';

const MethodInfoResponse = ({
  children,
  title,
  type,
  responses,
  selectResponseCode,
  setselectResponseCode,
}: IInfoResponseProps) => {
  const resKeys = Object.keys(responses).map(key => Number(key));
  const isSelected = (code: number) => selectResponseCode === code;

  return (
    <MethodContentWrapper>
      <div className='title-box'>
        <p className='title'>{title}</p>
        <div className='button-box'>
          {resKeys.map(key => (
            <DetailResponseButton
              key={key}
              $isError={ERROR_CODE_TEXT[key].isError}
              $isSelect={isSelected(key)}
              onClick={() => setselectResponseCode(key)}
            >
              {ERROR_CODE_TEXT[key].text}
            </DetailResponseButton>
          ))}
        </div>
      </div>
      <div className={`content-box ${type}`}>{children}</div>
    </MethodContentWrapper>
  );
};

export default MethodInfoResponse;
