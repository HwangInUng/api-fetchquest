import { ChangeTextAreaEvent } from 'models';
import { TestRawContainer } from 'styles';

interface ITestRawProps {
  value: string;
  onChange: (e: ChangeTextAreaEvent) => void;
}

const TestRaw = ({ value, onChange }: ITestRawProps) => {
  return (
    <TestRawContainer>
      <textarea
        value={value}
        onChange={onChange}
        autoComplete='off'
        spellCheck='false'
      />
    </TestRawContainer>
  );
};

export default TestRaw;
