import { MethodActionContainer } from 'styles';
import MethodSelect from './MethodSelect';
import MethodUrl from './MethodUrl';
import { ISideMethod } from 'models';

const MethodActionBox = ({ method }: { method: ISideMethod }) => {
  const { method: methodType } = method;
  const upperCaseMethodType = methodType.toLocaleUpperCase();

  return (
    <MethodActionContainer>
      <div className='field-box'>
        <MethodSelect methodType={upperCaseMethodType} />
        <MethodUrl url='/api/AIBI040M01/processCode' />
      </div>
      <div>
        <button className='action-button'>Send</button>
      </div>
    </MethodActionContainer>
  );
};

export default MethodActionBox;
