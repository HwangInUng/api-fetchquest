import { BiTrash } from 'react-icons/bi';
import { TestFormBody, TestFormContainer, TestFormHeader } from 'styles';

const TestForm = () => {
  return (
    <TestFormContainer>
      <TestFormHeader>
        <div className='header-key'>Key</div>
        <div className='header-value'>Value</div>
      </TestFormHeader>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <TestFormBody key={index}>
            <div className='body-key'>key</div>
            <div className='body-value'>
              <input
                type='text'
                className='w-full bg-transparent outline-none'
              />
              <BiTrash />
            </div>
          </TestFormBody>
        ))}
    </TestFormContainer>
  );
};

export default TestForm;
