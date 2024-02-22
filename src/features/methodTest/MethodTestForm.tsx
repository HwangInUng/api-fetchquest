import { useEffect } from 'react';
import TestForm from './TestForm';
import TestFormTab from './TestFormTab';
import { ISideMethod } from 'models';
import { useRecoilState, useRecoilValue } from 'recoil';
import { methodState } from 'atoms';

const MethodTestForm = ({ method }: { method: ISideMethod }) => {
  const atomKey = `${method.upperCode}-${method.name}`;
  const [selectFormTab, setSelectFormTab] = useRecoilState(
    methodState.currentFormTab(atomKey),
  );
  const methodType = method.method.toLocaleUpperCase();
  const methodRawData = useRecoilValue(methodState.methodRawData(atomKey));
  const handleSelect = (formTab: string) => {
    setSelectFormTab(formTab);
  };
  const methodParam = Object.keys(method.param)[0];
  const formValues = method.param[methodParam].fields.map(field => ({
    name: field.name,
    example: field.example,
    format: field.attributes.format,
    type: field.attributes.type,
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
        methodType={methodType}
        selectFormTab={selectFormTab}
        methodRawData={methodRawData}
        formValues={formValues}
        atomKey={atomKey}
      />
    </div>
  );
};

export default MethodTestForm;
