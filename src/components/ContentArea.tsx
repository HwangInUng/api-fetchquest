import { sideMenuState } from "atoms";
import { useRecoilValue } from "recoil";

const ContentArea = (): JSX.Element => {
  const methods = useRecoilValue(sideMenuState.sideMethodList);

  return (
    <div className="flex h-full flex-grow">
      <div className="w-[60%] overflow-y-scroll p-4">
        <h1 className="text-[1.5rem] text-blue-950 border-b">
          {methods[0].upperName}
        </h1>
        {methods.map((method) => (
          <div key={method.name} className="flex flex-col gap-y-2">
            <div className="h-[900px] border-b">{method.name}</div>
          </div>
        ))}
      </div>
      <div className="bg-blue-950 flex-grow"></div>
    </div>
  );
};

export default ContentArea;
