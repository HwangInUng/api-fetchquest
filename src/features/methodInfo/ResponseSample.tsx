import { ISampleData } from "models";
import { useState } from "react";
import { SamplePre, SampleTitle } from "styles";

const SampleData = ({
  sampleData,
}: {
  sampleData: ISampleData;
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const dataName = isOpen ? `${sampleData.name} -` : `${sampleData.name} +`;
  const fields =
    sampleData.type === "array" ? [sampleData.fields] : sampleData.fields;
  const jsonData = JSON.stringify(fields, null, 2);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <SampleTitle onClick={handleOpen}>
        <span>{dataName}</span>
      </SampleTitle>
      {isOpen && <SamplePre>{jsonData}</SamplePre>}
    </div>
  );
};

export default SampleData;
