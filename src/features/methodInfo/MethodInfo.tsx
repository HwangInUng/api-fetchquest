import { MethodInfoBox, MethodInfoContainer } from 'styles';
import MethodDescription from './MethodDescription';
import { ISideMethod } from 'models';
import { SIDE_METHOD_COLOR } from 'utils';
import MethodDetail from './MethodDetail';
import MethodSample from './MethodSample';

const MethodInfo = ({
  method,
  methodIndex,
}: {
  method: ISideMethod;
  methodIndex: number;
}) => {
  const isFirst = methodIndex === 0;

  return (
    <MethodInfoContainer>
      {isFirst && <h2 className='category-name'>{method.upperName}</h2>}
      <MethodInfoBox $typeColor={SIDE_METHOD_COLOR[method.method]}>
        <div className='method-namebox'>
          <div className='type'>{method.method}</div>
          <span className='name'>{method.name}</span>
        </div>
        <MethodDescription
          description={method.description}
          url='test'
        />
        <MethodDetail method={method} />
        <MethodSample method={method} />
      </MethodInfoBox>
    </MethodInfoContainer>
  );
};

export default MethodInfo;
