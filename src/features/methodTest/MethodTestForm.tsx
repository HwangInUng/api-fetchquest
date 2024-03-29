import { useEffect } from 'react';
import TestForm from './TestForm';
import TestFormTab from './TestFormTab';
import { ISideMethod } from 'models';
import { useRecoilState, useRecoilValue } from 'recoil';
import { methodState } from 'atoms';
import { convertFieldToFormValues } from 'utils/convertHelper';

const MethodTestForm = ({ method }: { method: ISideMethod }) => {
  const atomKey = `${method.upperCode}-${method.name}`;
  const [selectFormTab, setSelectFormTab] = useRecoilState(
    methodState.currentFormTab(atomKey),
  );
  const methodRawData = useRecoilValue(methodState.methodRawData(atomKey));
  const formValues = convertFieldToFormValues(method.param);
  const isPost = method.method === 'post';
  const multiParam = Object.keys(method.param).length > 1;

  const handleSelect = (formTab: string) => {
    setSelectFormTab(formTab);
  };

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
        atomKey={atomKey}
        unusableParam={isPost && multiParam}
      />
    </div>
  );
};

export default MethodTestForm;
