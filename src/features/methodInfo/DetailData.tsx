import { useState } from 'react';
import { ArrayLabel, DetailTitle, FieldInfoBox } from 'styles';
import FieldContent from './FieldContent';
import { IData } from 'models';

const DetailData = ({ detailData }: { detailData: IData }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const isArray = detailData.type === 'array';
  const paramName = isOpen
    ? `${detailData.name} -`
    : `${detailData.name} +`;

  return (
    <div>
      <DetailTitle onClick={handleOpen}>
        <span>{paramName}</span>
      </DetailTitle>
      <ArrayLabel $isArray={isArray}>{`Array [ ... ]`}</ArrayLabel>
      {isOpen &&
        detailData.fields.map((field, index) => (
          <FieldInfoBox key={index}>
            <div className='field-name'>- {field.name}</div>
            <FieldContent field={field} />
          </FieldInfoBox>
        ))}
    </div>
  );
};

export default DetailData;
