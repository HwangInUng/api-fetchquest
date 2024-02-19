import { MethodContentBox } from 'styles';
import SampleData from './SampleData';
import { ISideMethod } from 'models';
import { convertSampleData } from 'utils';
import MethodInfoRequest from './MethodInfoRequest';
import MethodInfoResponse from './MethodInfoResponse';
import { useState } from 'react';

const MethodSample = ({ method }: { method: ISideMethod }) => {
  const [selectResponseCode, setSelectResponseCode] = useState(200);
  const paramsKeys = Object.keys(method.param);
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
          />
        ))}
      </MethodInfoRequest>
      <MethodInfoResponse
        title='Response Sample'
        type='sample'
        responses={method.res}
        selectResponseCode={handleSelectResponseCode}
      >
        <SampleData
          sampleData={convertSampleData(method.res[selectResponseCode])}
        />
      </MethodInfoResponse>
    </MethodContentBox>
  );
};

export default MethodSample;
