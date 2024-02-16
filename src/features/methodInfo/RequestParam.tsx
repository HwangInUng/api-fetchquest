import { useState } from "react";
import { ArrayLabel, DetailTitle, FieldInfoBox } from "styles";
import { IData } from "models";
import FieldContent from "./FieldContent";

const param: IData = {
  name: "processCodeList",
  type: "array",
  fields: [
    {
      name: "name",
      attributes: { type: "string", required: true, minLength: 8 },
      desc: "원하는 파라미터의 이름",
    },
    {
      name: "code",
      attributes: { type: "string", format: "YYYY-MM-DD" },
      desc: "원하는 데이터의 코드",
    },
    {
      name: "type",
      attributes: { type: "string", minLength: 4 },
      desc: "해당 파라미터의 타입",
    },
  ],
};

const RequestParam = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const isArray = param.type === "array";
  const paramName = isOpen ? `${param.name} -` : `${param.name} +`;

  return (
    <div>
      <DetailTitle onClick={handleOpen}>
        <span>{paramName}</span>
      </DetailTitle>
      <ArrayLabel $isArray={isArray}>{`Array [ ... ]`}</ArrayLabel>
      {isOpen &&
        param.fields.map((field, index) => (
          <FieldInfoBox key={index}>
            <div className="field-name">- {field.name}</div>
            <FieldContent field={field} />
          </FieldInfoBox>
        ))}
    </div>
  );
};

export default RequestParam;
