import {
  ChangeInputEvent,
  ChangeTextAreaEvent,
  CommonObject,
} from 'models';
import { useEffect, useState } from 'react';
import { BiEdit, BiRefresh } from 'react-icons/bi';
import { TestFormBody, TestFormContainer, TestFormHeader } from 'styles';

const TestForm = ({
  selectFormTab,
  methodRawData,
  formValues,
}: {
  selectFormTab: string;
  methodRawData: string;
  formValues: {
    name: string;
    example: string | number | undefined;
    format: string | undefined;
  }[];
}) => {
  const [rawData, setRawData] = useState('');
  const defaultValues = formValues.reduce((acc, current) => {
    acc = { ...acc, [current.name]: current.example };
    return acc;
  }, {});
  const [fieldValues, setFieldValues] =
    useState<CommonObject>(defaultValues);
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
    setRawData(methodRawData);
  }, [methodRawData]);

  return (
    <>
      {selectFormTab === 'Params' ? (
        <TestFormContainer>
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
              <div className='form-format pl-2'>{field.format || '-'}</div>
              <div className='form-value'>
                <input
                  type='text'
                  name={field.name}
                  value={fieldValues[field.name]}
                  onChange={editParamValues}
                  className='w-full bg-transparent outline-none'
                />
                <BiEdit onClick={() => handleEdit(field.name)} />
              </div>
            </TestFormBody>
          ))}
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
