import { MethodContentBox } from 'styles';
import SampleData from './SampleData';
import { ISideMethod } from 'models';
import { convertSampleData } from 'utils';
import MethodInfoRequest from './MethodInfoRequest';
import MethodInfoResponse from './MethodInfoResponse';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { methodState } from 'atoms';

const MethodSample = ({ method }: { method: ISideMethod }) => {
  const [selectResponseCode, setSelectResponseCode] = useState(200);
  const paramsKeys = Object.keys(method.param);
  const atomKey = `${method.upperCode}-${method.name}`;
  const setMethodRawData = useSetRecoilState(
    methodState.methodRawData(atomKey),
  );
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
        {paramsKeys.map(key => (
          <SampleData
            key={key}
            sampleData={convertSampleData(method.param[key])}
            type='request'
            setRawData={handleMethodRawData}
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
        <SampleData
          sampleData={convertSampleData(method.res[selectResponseCode])}
          type='response'
        />
      </MethodInfoResponse>
    </MethodContentBox>
  );
};

export default MethodSample;
