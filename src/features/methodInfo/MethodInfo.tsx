import { MethodInfoBox, MethodInfoContainer, MethodSampleBox } from "styles";
import MethodDescription from "./MethodDescription";
import { ISideMethod } from "models";
import RequestSample from "./RequestSample";
import { SIDE_METHOD_COLOR } from "utils/constants";

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
      {isFirst && <h2 className="category-name">{method.upperName}</h2>}
      <MethodInfoBox $typeColor={SIDE_METHOD_COLOR[method.method]}>
        <div className="method-namebox">
          <div className="type">{method.method}</div>
          <span className="name">{method.name}</span>
        </div>
        <MethodDescription list={[]} />
        <MethodSampleBox>
          <div className="content-wrapper">
            <p className="title text-green-600">Request Sample</p>
            <div className="content-box">
              <RequestSample />
              <RequestSample />
            </div>
          </div>
          <div className="content-wrapper">
            <p className="title text-blue-500">Response Sample</p>
            <div className="content-box"></div>
          </div>
        </MethodSampleBox>
      </MethodInfoBox>
    </MethodInfoContainer>
  );
};

export default MethodInfo;
