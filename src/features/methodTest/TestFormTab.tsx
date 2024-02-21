import { TestFormTabBox } from 'styles';
import { TEST_FORM_TABS } from 'utils';

const TestFormTab = () => {
  return (
    <TestFormTabBox>
      {TEST_FORM_TABS.map(tab => (
        <button className='tab-button'>{tab}</button>
      ))}
    </TestFormTabBox>
  );
};

export default TestFormTab;
