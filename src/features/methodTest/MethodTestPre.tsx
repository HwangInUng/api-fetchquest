import { MethodPreContainer } from 'styles';

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

const MethodTestPre = () => {
  return (
    <>
      <h2>Response</h2>
      <MethodPreContainer>
        <pre>{sample}</pre>
      </MethodPreContainer>
    </>
  );
};

export default MethodTestPre;
