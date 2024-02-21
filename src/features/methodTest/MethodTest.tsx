import { MethodTestContainer } from 'styles';
import MethodActionBox from './MethodActionBox';
import MethodTestForm from './MethodTestForm';

const MethodTest = () => {
  return (
    <MethodTestContainer>
      <div className='h-1/2 flex flex-col gap-y-3'>
        <MethodActionBox />
        <MethodTestForm />
      </div>
      <div className='h-1/2 border'>응답 필드</div>
    </MethodTestContainer>
  );
};

export default MethodTest;
