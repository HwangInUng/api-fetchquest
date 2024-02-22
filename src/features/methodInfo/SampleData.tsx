import TextCopyButton from 'components/CopyButton';
import { ISampleData } from 'models';
import { useState } from 'react';
import { CopyButton, SamplePre, SampleTitle } from 'styles';

const SampleData = ({
  sampleData,
  type,
  setRawData = () => {
    /* empty*/
  },
}: {
  sampleData: ISampleData;
  type: string;
  setRawData?: (rawData: string) => void;
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);
  const dataName = isOpen
    ? `${sampleData.name} -`
    : `${sampleData.name} +`;
  const fields =
    sampleData.type === 'array' ? [sampleData.fields] : sampleData.fields;
  const jsonData = JSON.stringify(fields, null, 2);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <SampleTitle onClick={handleOpen}>
        <span>{dataName}</span>
      </SampleTitle>
      {type === 'request' ? (
        <CopyButton onClick={() => setRawData(jsonData)}>
          Sample Copy to Raw
        </CopyButton>
      ) : (
        <TextCopyButton
          title='Sample Copy to ClipBoard'
          copyValue={jsonData}
        />
      )}
      {isOpen && <SamplePre>{jsonData}</SamplePre>}
    </div>
  );
};

export default SampleData;
