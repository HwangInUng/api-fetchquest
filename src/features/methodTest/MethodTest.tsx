import { MethodTestContainer } from 'styles';
import MethodActionBox from './MethodActionBox';
import MethodTestForm from './MethodTestForm';
import { ISideMethod } from 'models';

const sample = `[
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
]`;

const MethodTest = ({ method }: { method: ISideMethod }) => {
  return (
    <MethodTestContainer>
      <div className='flex flex-col gap-y-3 mb-3'>
        <h2>Request</h2>
        <MethodActionBox method={method} />
        <MethodTestForm method={method} />
      </div>
      <div className='flex-grow'>
        <h2>Response</h2>
        <div className='mt-2 border border-slate-500 p-2 rounded-md text-sm'>
          <pre>{sample}</pre>
        </div>
      </div>
    </MethodTestContainer>
  );
};

export default MethodTest;
