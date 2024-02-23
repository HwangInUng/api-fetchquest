import { ChangeInputEvent, ITestFormValues } from 'models';
import { BiEdit } from 'react-icons/bi';
import { TestFormRow } from 'styles';

interface ITestFormBodyProps {
  field: ITestFormValues;
  value: string | number;
  onChange: (e: ChangeInputEvent) => void;
  onClick: (fieldName: string) => void;
}

const TestFormBody = ({
  field,
  value,
  onChange,
  onClick,
}: ITestFormBodyProps) => {
  return (
    <TestFormRow>
      <div className='form-key pl-2'>{field.name}</div>
      <div className='form-format pl-2'>{field.format || '-'}</div>
      <div className='form-value'>
        <input
          type={field.type}
          name={field.name}
          value={value}
          onChange={onChange}
          className='w-full bg-transparent outline-none'
        />
        <BiEdit onClick={() => onClick(field.name)} />
      </div>
    </TestFormRow>
  );
};

export default TestFormBody;
