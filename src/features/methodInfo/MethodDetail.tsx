import { MethodContentBox } from 'styles';
import DetailData from './DetailData';
import { ISideMethod } from 'models';
import MethodInfoRequest from './MethodInfoRequest';
import MethodInfoResponse from './MethodInfoResponse';
import { useState } from 'react';

const MethodDetail = ({ method }: { method: ISideMethod }) => {
  const [selectResponseCode, setSelectResponseCode] = useState(200);
  const paramsKeys = Object.keys(method.param);
  const handleSelectResponseCode = (responseCode: number) => {
    setSelectResponseCode(responseCode);
  };

  return (
    <MethodContentBox>
      <MethodInfoRequest
        title='Reqeust Parameter'
        type='detail'
      >
        {paramsKeys?.map(key => (
          <DetailData
            key={key}
            detailData={method.param[key]}
          />
        ))}
      </MethodInfoRequest>
      <MethodInfoResponse
        title='Response Data'
        type='detail'
        responses={method.res}
        selectResponseCode={selectResponseCode}
        setselectResponseCode={handleSelectResponseCode}
      >
        <DetailData detailData={method.res[selectResponseCode]} />
      </MethodInfoResponse>
    </MethodContentBox>
  );
};

export default MethodDetail;
