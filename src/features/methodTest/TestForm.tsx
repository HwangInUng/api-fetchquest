import { methodState } from 'atoms';
import {
  ChangeInputEvent,
  ChangeTextAreaEvent,
  CommonObject,
  ITestFormValues,
} from 'models';
import { useEffect } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { useRecoilState } from 'recoil';
import { TestFormContainer, TestFormHeader } from 'styles';
import { convertFormToFieldValues } from 'utils/convertHelper';
import TestRaw from './TestRaw';
import TestFormBody from './TestFormBody';

interface ITestFormProps {
  selectFormTab: string;
  methodRawData: string;
  formValues: ITestFormValues[];
  atomKey: string;
  unusableParam: boolean;
}

const TestForm = ({
  selectFormTab,
  methodRawData,
  formValues,
  atomKey,
  unusableParam,
}: ITestFormProps) => {
  const [rawData, setRawData] = useRecoilState(
    methodState.currentFieldRaw(atomKey),
  );
  const defaultValues = convertFormToFieldValues(formValues);
  const [fieldValues, setFieldValues] = useRecoilState<CommonObject>(
    methodState.currentFieldParam(atomKey),
  );

  const handleRawData = (e: ChangeTextAreaEvent) => {
    setRawData(e.target.value);
  };
  const handleEdit = (fieldName: string) => {
    setFieldValues(old => ({
      ...old,
      [fieldName]: '',
    }));
  };
  const editParamValues = (e: ChangeInputEvent) => {
    const name = e.target.name;
    const value = e.target.value;

    setFieldValues(old => ({
      ...old,
      [name]: value,
    }));
  };
  const handleReset = () => {
    setFieldValues(defaultValues);
  };

  useEffect(() => {
    setFieldValues(defaultValues);
  }, [setFieldValues]);

  useEffect(() => {
    setRawData(methodRawData);
  }, [methodRawData]);

  return (
    <>
      {selectFormTab === 'Params' ? (
        <TestFormContainer>
          {unusableParam ? (
            <div className='unusable'>
              파라미터가 2개 이상인 경우 Raw를 이용하세요.
            </div>
          ) : (
            <>
              <TestFormHeader>
                <div className='form-key'>Key</div>
                <div className='form-format'>Format</div>
                <div className='form-value'>
                  <span>Value</span>
                  <BiRefresh onClick={handleReset} />
                </div>
              </TestFormHeader>
              {formValues.map(field => (
                <TestFormBody
                  key={field.name}
                  field={field}
                  value={fieldValues[field.name] || ''}
                  onChange={editParamValues}
                  onClick={handleEdit}
                />
              ))}
            </>
          )}
        </TestFormContainer>
      ) : (
        <TestRaw
          value={rawData}
          onChange={handleRawData}
        />
      )}
    </>
  );
};

export default TestForm;
