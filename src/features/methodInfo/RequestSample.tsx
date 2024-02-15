import { useState } from "react";
import { ParamInfoBox, ParamTitle } from "styles";
import ParamProperty from "./ParamProperty";
import { IParam } from "models";

const params: IParam[] = [
  {
    name: "name",
    properties: { type: "string", required: true, minLength: 8 },
    desc: "원하는 파라미터의 이름",
  },
  {
    name: "code",
    properties: { type: "string", format: "YYYY-MM-DD" },
    desc: "원하는 데이터의 코드",
  },
  {
    name: "type",
    properties: { type: "string", minLength: 4 },
    desc: "해당 파라미터의 타입",
  },
];

const RequestSample = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ParamTitle onClick={handleOpen}>
        <span>{isOpen ? "param -" : "param +"}</span>
      </ParamTitle>
      {isOpen &&
        params.map((param, index) => (
          <ParamInfoBox key={index}>
            <div className="param-name">- {param.name}</div>
            <ParamProperty param={param} />
          </ParamInfoBox>
        ))}
    </div>
  );
};

export default RequestSample;
