import { MethodActionContainer } from 'styles';
import MethodSelect from './MethodSelect';
import MethodUrl from './MethodUrl';

const MethodActionBox = () => {
  return (
    <MethodActionContainer>
      <div className='field-box'>
        <MethodSelect />
        <MethodUrl />
      </div>
      <div>
        <button className='action-button'>Send</button>
      </div>
    </MethodActionContainer>
  );
};

export default MethodActionBox;
