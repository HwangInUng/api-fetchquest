import { MethodInfoBox, MethodInfoContainer, MethodSampleBox } from "styles";
import MethodDescription from "./MethodDescription";
import { ISideMethod } from "models";
import { SIDE_METHOD_COLOR } from "utils";
import MethodInfoDetail from "./MethodInfoDetail";
import RequestParam from "./RequestParam";
import MethodSample from "./MethodSample";
import ResponseData from "./ResponseData";
import { useRecoilValue } from "recoil";
import { methodInfoState } from "atoms";

const MethodInfo = ({
  method,
  methodIndex,
}: {
  method: ISideMethod;
  methodIndex: number;
}) => {
  const isFirst = methodIndex === 0;
  const responses = useRecoilValue(methodInfoState.sampleResponse);

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
            <RequestParam />
          </MethodInfoDetail>
          <MethodInfoDetail title="Response Data">
            <div>test</div>
          </MethodInfoDetail>
        </MethodSampleBox>
        <MethodSampleBox>
          <MethodSample title="Request Sample">
            <div>test</div>
          </MethodSample>
          <MethodSample title="Response Sample">
            {responses.map((response) => (
              <ResponseData key={response.name} sampleData={response} />
            ))}
          </MethodSample>
        </MethodSampleBox>
      </MethodInfoBox>
    </MethodInfoContainer>
  );
};

export default MethodInfo;
