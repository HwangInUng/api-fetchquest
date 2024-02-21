import { MethodTestContainer } from 'styles';
import MethodActionBox from './MethodActionBox';
import MethodTestForm from './MethodTestForm';

const MethodTest = () => {
  return (
    <MethodTestContainer>
      <div className='h-1/2 flex flex-col gap-y-3'>
        <h2>Request</h2>
        <MethodActionBox />
        <MethodTestForm />
      </div>
      <div className='h-1/2'>
        <h2>Response</h2>
        <div className='mt-2 border border-slate-500 p-2 rounded-md text-sm'>
          <pre>
            {`[
  {
    "RMK_CONT": "기초자료",
    "END_YMD": "2024-02-16",
    "STR_YMD": "2023-07-01",
    "PRS_DTT_NM": "관리공정",
    "SRT_SQN": "100001",
    "PRS_HRK_CD": "PRS10",
    "PRS_CD_NM": "식각",
    "PRS_CD": "PRC10"
  }
]`}
          </pre>
        </div>
      </div>
    </MethodTestContainer>
  );
};

export default MethodTest;
