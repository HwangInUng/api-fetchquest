import { MethodActionContainer } from 'styles';
import MethodSelect from './MethodSelect';
import MethodUrl from './MethodUrl';
import { ISideMethod } from 'models';
import { useRecoilValue } from 'recoil';
import { methodState } from 'atoms';
import axios from 'axios';

const fetchTest = async () => {
  const response = await axios.get('/api/ai/bi/AIBI040M01/code', {
    params: {
      USE_YN: 'Y',
      PRS_NM: '식각',
    },
  });
  console.log(response);
};

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
    // 메서드 url
    // 메서드 타입을 키값으로 해당하는 메서드 호출
    // 메서드 파라미터
    if (currentFormTab === 'Params') {
      fetchTest();
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
