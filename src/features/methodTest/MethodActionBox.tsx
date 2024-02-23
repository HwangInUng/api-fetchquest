import { MethodActionContainer } from 'styles';
import MethodSelect from './MethodSelect';
import MethodUrl from './MethodUrl';
import { ISideMethod } from 'models';
import { useRecoilValue } from 'recoil';
import { methodState } from 'atoms';

const MethodActionBox = ({ method }: { method: ISideMethod }) => {
  const { method: methodType } = method;
  const atomKey = `${method.upperCode}-${method.name}`;
  const upperCaseMethodType = methodType.toLocaleUpperCase();
  const currentFieldValues = useRecoilValue(
    methodState.currentFieldParam(atomKey),
  );
  const currentFieldRaw = useRecoilValue(
    methodState.currentFieldRaw(atomKey),
  );
  const currentFormTab = useRecoilValue(
    methodState.currentFormTab(atomKey),
  );

  const handleSand = () => {
    if (currentFormTab === 'Params') {
      console.log(currentFieldValues);
    } else {
      console.log(JSON.parse(currentFieldRaw));
    }
  };

  return (
    <MethodActionContainer>
      <div className='field-box'>
        <MethodSelect methodType={upperCaseMethodType} />
        <MethodUrl url={method.url} />
      </div>
      <div>
        <button
          className='action-button'
          onClick={handleSand}
        >
          Send
        </button>
      </div>
    </MethodActionContainer>
  );
};

export default MethodActionBox;
