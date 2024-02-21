import { TestFormTabBox, TestFormTabButton } from 'styles';
import { TEST_FORM_TABS } from 'utils';

const TestFormTab = ({
  selectFormTab,
  onClick,
}: {
  selectFormTab: string;
  onClick: (formTab: string) => void;
}) => {
  const isSelect = (formTab: string) => selectFormTab === formTab;

  return (
    <TestFormTabBox>
      {TEST_FORM_TABS.map(tab => (
        <TestFormTabButton
          $isSelect={isSelect(tab)}
          onClick={() => onClick(tab)}
        >
          {tab}
        </TestFormTabButton>
      ))}
    </TestFormTabBox>
  );
};

export default TestFormTab;
