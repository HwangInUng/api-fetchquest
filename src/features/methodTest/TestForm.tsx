import { methodState } from 'atoms';
import {
  ChangeInputEvent,
  ChangeTextAreaEvent,
  CommonObject,
  ITestFormValues,
} from 'models';
import { useEffect } from 'react';
import { BiEdit, BiRefresh } from 'react-icons/bi';
import { useRecoilState } from 'recoil';
import { TestFormBody, TestFormContainer, TestFormHeader } from 'styles';

interface ITestFormProps {
  methodType: string;
  selectFormTab: string;
  methodRawData: string;
  formValues: ITestFormValues[];
  atomKey: string;
}

const TestForm = ({
  methodType,
  selectFormTab,
  methodRawData,
  formValues,
  atomKey,
}: ITestFormProps) => {
  const [rawData, setRawData] = useRecoilState(
    methodState.currentFieldRaw(atomKey),
  );
  const defaultValues = formValues.reduce((acc, current) => {
    acc = { ...acc, [current.name]: current.example };
    return acc;
  }, {});
  const [fieldValues, setFieldValues] = useRecoilState<CommonObject>(
    methodState.currentFieldParam(atomKey),
  );
  const isPost = methodType === 'POST';

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
          {isPost ? (
            <div className='py-10 text-center text-sm'>
              this method not available
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
                <TestFormBody key={field.name}>
                  <div className='form-key pl-2'>{field.name}</div>
                  <div className='form-format pl-2'>
                    {field.format || '-'}
                  </div>
                  <div className='form-value'>
                    <input
                      type={field.type}
                      name={field.name}
                      value={fieldValues[field.name] || ''}
                      onChange={editParamValues}
                      className='w-full bg-transparent outline-none'
                    />
                    <BiEdit onClick={() => handleEdit(field.name)} />
                  </div>
                </TestFormBody>
              ))}
            </>
          )}
        </TestFormContainer>
      ) : (
        <div className='mt-2'>
          <textarea
            className='w-full h-[400px] bg-transparent border border-slate-500 rounded-md resize-none outline-none py-1 px-2 text-sm'
            value={rawData}
            onChange={handleRawData}
            autoComplete='off'
            spellCheck='false'
          />
        </div>
      )}
    </>
  );
};

export default TestForm;
