import { ISideMethodProps } from "models";
import { SIDE_METHOD_COLOR } from "utils/constants";

const SideMethod = ({ methods = [] }: ISideMethodProps): JSX.Element => {
  return (
    <div>
      {methods.map((method) => (
        <div key={method.name} className="side-method">
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
