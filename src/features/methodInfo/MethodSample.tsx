import { MethodContentBox } from 'styles';
import MethodInfoContent from './MethodInfoContent';
import SampleData from './SampleData';
import { useRecoilValue } from 'recoil';
import { methodInfoState } from 'atoms';

const MethodSample = () => {
  const requestParams = useRecoilValue(methodInfoState.sampleRequest);
  const responses = useRecoilValue(methodInfoState.sampleResponse);
  return (
    <MethodContentBox>
      <MethodInfoContent
        title='Request Sample'
        type='sample'
      >
        {requestParams.map(param => (
          <SampleData
            key={param.name}
            sampleData={param}
          />
        ))}
      </MethodInfoContent>
      <MethodInfoContent
        title='Response Sample'
        type='sample'
      >
        {responses.map(response => (
          <SampleData
            key={response.name}
            sampleData={response}
          />
        ))}
      </MethodInfoContent>
    </MethodContentBox>
  );
};

export default MethodSample;
