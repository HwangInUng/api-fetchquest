import { useState } from 'react';
import TestForm from './TestForm';
import TestFormTab from './TestFormTab';

const MethodTestForm = () => {
  const [selectFormTab, setSelectFormTab] = useState('');
  const handleSelect = (formTab: string) => {
    setSelectFormTab(formTab);
  };

  return (
    <div>
      <TestFormTab
        selectFormTab={selectFormTab}
        onClick={handleSelect}
      />
      <TestForm selectFormTab={selectFormTab} />
    </div>
  );
};

export default MethodTestForm;
