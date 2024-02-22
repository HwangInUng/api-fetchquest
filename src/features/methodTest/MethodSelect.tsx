import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import {
  MethodSelectContainer,
  MethodSelectOption,
  MethodSelectOptions,
} from 'styles';
import { METHOD_TYPE_BUTTONS } from 'utils';

interface IRequestMethodType {
  name: string;
  color: string;
}

const MethodSelect = ({ methodType }: { methodType: string }) => {
  const [optionOpen, setOptionOpen] = useState(false);
  const defaultMethod = METHOD_TYPE_BUTTONS.find(
    type => type.name === methodType,
  );
  const [selectMethodType, setSelectMethodType] = useState<
    IRequestMethodType | undefined
  >(defaultMethod);
  const handleOpen = () => {
    setOptionOpen(!optionOpen);
  };
  const handleSelectMethodType = (type: IRequestMethodType) => {
    setSelectMethodType(type);
    setOptionOpen(false);
  };

  return (
    <div className='relative'>
      <MethodSelectContainer onClick={handleOpen}>
        <span className={selectMethodType?.color}>
          {selectMethodType?.name}
        </span>
        <BiChevronRight />
      </MethodSelectContainer>
      {optionOpen && (
        <MethodSelectOptions>
          {METHOD_TYPE_BUTTONS.map(methodType => (
            <MethodSelectOption
              key={methodType.name}
              className={methodType.color}
              onClick={() => handleSelectMethodType(methodType)}
            >
              {methodType.name}
            </MethodSelectOption>
          ))}
        </MethodSelectOptions>
      )}
    </div>
  );
};

export default MethodSelect;
