import { MethodTestContainer } from 'styles';
import MethodActionBox from './MethodActionBox';
import MethodTestForm from './MethodTestForm';
import { ISideMethod } from 'models';
import MethodTestPre from './MethodTestPre';

const MethodTest = ({ method }: { method: ISideMethod }) => {
  return (
    <MethodTestContainer>
      <div className='flex flex-col gap-y-3 mb-3'>
        <h2>Request</h2>
        <MethodActionBox method={method} />
        <MethodTestForm method={method} />
      </div>
      <div className='flex-grow'>
        <MethodTestPre />
      </div>
    </MethodTestContainer>
  );
};

export default MethodTest;
