import { MethodInfoBox, MethodInfoContainer, MethodSampleBox } from "styles";
import MethodDescription from "./MethodDescription";
import { ISideMethod } from "models";
import { SIDE_METHOD_COLOR } from "utils";
import MethodInfoDetail from "./MethodInfoDetail";
import MethodSample from "./MethodSample";
import { useRecoilValue } from "recoil";
import { methodInfoState } from "atoms";
import SampleData from "./ResponseSample";
import DetailData from "./DetailData";

const MethodInfo = ({
  method,
  methodIndex,
}: {
  method: ISideMethod;
  methodIndex: number;
}) => {
  const isFirst = methodIndex === 0;
  const requestParams = useRecoilValue(methodInfoState.sampleRequest);
  const responses = useRecoilValue(methodInfoState.sampleResponse);
  const infoData = useRecoilValue(methodInfoState.infoData);

  return (
    <MethodInfoContainer>
      {isFirst && <h2 className="category-name">{method.upperName}</h2>}
      <MethodInfoBox $typeColor={SIDE_METHOD_COLOR[method.method]}>
        <div className="method-namebox">
          <div className="type">{method.method}</div>
          <span className="name">{method.name}</span>
        </div>
        <MethodDescription list={[]} />
        <MethodSampleBox>
          <MethodInfoDetail title="Reqeust Parameter">
            {infoData.params?.map((param) => (
              <DetailData detailData={param} />
            ))}
          </MethodInfoDetail>
          <MethodInfoDetail title="Response Data">
            {infoData.responses?.map((response) => (
              <DetailData detailData={response} />
            ))}
          </MethodInfoDetail>
        </MethodSampleBox>
        <MethodSampleBox>
          <MethodSample title="Request Sample">
            {requestParams.map((param) => (
              <SampleData key={param.name} sampleData={param} />
            ))}
          </MethodSample>
          <MethodSample title="Response Sample">
            {responses.map((response) => (
              <SampleData key={response.name} sampleData={response} />
            ))}
          </MethodSample>
        </MethodSampleBox>
      </MethodInfoBox>
    </MethodInfoContainer>
  );
};

export default MethodInfo;
