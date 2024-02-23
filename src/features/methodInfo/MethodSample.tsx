import { CopyButton, MethodContentBox } from 'styles';
import SampleData from './SampleData';
import { ISideMethod } from 'models';
import { convertSampleData } from 'utils';
import MethodInfoRequest from './MethodInfoRequest';
import MethodInfoResponse from './MethodInfoResponse';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { methodState } from 'atoms';
import TextCopyButton from 'components/CopyButton';
import { convertJson, convertParamToRawData } from 'utils/convertHelper';

const MethodSample = ({ method }: { method: ISideMethod }) => {
  const [selectResponseCode, setSelectResponseCode] = useState(200);
  const paramsKeys = Object.keys(method.param);
  const atomKey = `${method.upperCode}-${method.name}`;
  const setMethodRawData = useSetRecoilState(
    methodState.methodRawData(atomKey),
  );
  const paramRawData = convertParamToRawData(method.param);
  const responseSampleData = convertSampleData(
    method.res[selectResponseCode],
  );
  const jsonResponseSample = convertJson(responseSampleData.fields);
  const handleMethodRawData = (rawData: string) => {
    setMethodRawData(rawData);
  };
  const handleSelectResponseCode = (responseCode: number) => {
    setSelectResponseCode(responseCode);
  };

  return (
    <MethodContentBox>
      <MethodInfoRequest
        title='Request Sample'
        type='sample'
      >
        <CopyButton onClick={() => handleMethodRawData(paramRawData)}>
          Copy to Raw
        </CopyButton>
        {paramsKeys.map(key => (
          <SampleData
            key={key}
            sampleData={convertSampleData(method.param[key])}
          />
        ))}
      </MethodInfoRequest>
      <MethodInfoResponse
        title='Response Sample'
        type='sample'
        responses={method.res}
        selectResponseCode={selectResponseCode}
        setselectResponseCode={handleSelectResponseCode}
      >
        <TextCopyButton
          title='Copy To ClipBoard'
          copyValue={jsonResponseSample}
        />
        <SampleData sampleData={responseSampleData} />
      </MethodInfoResponse>
    </MethodContentBox>
  );
};

export default MethodSample;
