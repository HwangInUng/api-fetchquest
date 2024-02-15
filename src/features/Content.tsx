import { sideMenuState } from "atoms";
import { useRecoilValue } from "recoil";
import { ContentContainer } from "styles";
import MethodInfo from "./methodInfo/MethodInfo";

const Content = (): JSX.Element => {
  const methods = useRecoilValue(sideMenuState.sideMethodList);
  return (
    <ContentContainer>
      {methods.map((method, index) => (
        <div key={method.name} className="flex border-b">
          <MethodInfo method={method} methodIndex={index}/>
          <div className="bg-slate-700 flex-grow"></div>
        </div>
      ))}
    </ContentContainer>
  );
};

export default Content;
