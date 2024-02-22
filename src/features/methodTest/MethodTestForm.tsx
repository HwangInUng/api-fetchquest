import { useEffect, useState } from 'react';
import TestForm from './TestForm';
import TestFormTab from './TestFormTab';
import { ISideMethod } from 'models';
import { useRecoilValue } from 'recoil';
import { methodTestState } from 'atoms';

const MethodTestForm = ({ method }: { method: ISideMethod }) => {
  const [selectFormTab, setSelectFormTab] = useState('Params');
  const atomKey = `${method.upperCode}-${method.name}`;
  const methodRawData = useRecoilValue(
    methodTestState.methodRawData(atomKey),
  );
  const handleSelect = (formTab: string) => {
    setSelectFormTab(formTab);
  };
  const methodParam = Object.keys(method.param)[0];
  const formValues = method.param[methodParam].fields.map(field => ({
    name: field.name,
    example: field.example,
    format: field.attributes.format,
  }));

  useEffect(() => {
    if (methodRawData) {
      setSelectFormTab('Raw');
    }
  }, [methodRawData]);

  return (
    <div>
      <TestFormTab
        selectFormTab={selectFormTab}
        onClick={handleSelect}
      />
      <TestForm
        selectFormTab={selectFormTab}
        methodRawData={methodRawData}
        formValues={formValues}
      />
    </div>
  );
};

export default MethodTestForm;
