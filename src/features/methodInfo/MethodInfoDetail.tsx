import { IMethodInfoProps } from "models";
import { SampleWrapper } from "styles";

const MethodInfoDetail = ({ children, title }: IMethodInfoProps) => {
  return (
    <SampleWrapper>
      <p className="title">{title}</p>
      <div className="content-box detail">{children}</div>
    </SampleWrapper>
  );
};

export default MethodInfoDetail;
