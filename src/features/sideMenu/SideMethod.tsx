import { sideMenuState } from "atoms";
import { ISideMethodProps } from "models";
import { useRecoilState } from "recoil";
import { SIDE_METHOD_COLOR } from "utils/constants";

const SideMethod = ({ methods = [] }: ISideMethodProps): JSX.Element => {
  const [selectMethod, setSelectMethod] = useRecoilState(
    sideMenuState.selectSideMethod
  );
  const isSelect = (targetName: string) => selectMethod === targetName;

  return (
    <div>
      {methods.map((method) => (
        <div
          key={method.name}
          className={`
            side-method
            ${isSelect(method.name) && "select"}
          `}
          onClick={() => setSelectMethod(method.name)}
        >
          <span
            className="method-type"
            style={{ backgroundColor: SIDE_METHOD_COLOR[method.method] }}
          >
            {method.method}
          </span>
          <div>{method.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideMethod;
