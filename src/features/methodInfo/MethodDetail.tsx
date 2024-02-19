import { MethodContentBox } from 'styles';
import MethodInfoContent from './MethodInfoContent';
import { useRecoilValue } from 'recoil';
import { methodInfoState } from 'atoms';
import DetailData from './DetailData';

const MethodDetail = () => {
  const infoData = useRecoilValue(methodInfoState.infoData);
  return (
    <MethodContentBox>
      <MethodInfoContent
        title='Reqeust Parameter'
        type='detail'
      >
        {infoData.params?.map(param => <DetailData detailData={param} />)}
      </MethodInfoContent>
      <MethodInfoContent
        title='Response Data'
        type='detail'
      >
        {infoData.responses?.map(response => (
          <DetailData detailData={response} />
        ))}
      </MethodInfoContent>
    </MethodContentBox>
  );
};

export default MethodDetail;
