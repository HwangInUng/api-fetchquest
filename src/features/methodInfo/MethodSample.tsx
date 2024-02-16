import { IMethodInfoProps } from "models";
import { SampleWrapper } from "styles";

const MethodSample = ({ children, title }: IMethodInfoProps) => {
  return (
    <SampleWrapper>
      <p className="title">{title}</p>
      <div className="content-box sample">{children}</div>
    </SampleWrapper>
  );
};

export default MethodSample;
