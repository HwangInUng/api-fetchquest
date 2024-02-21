import { BiRefresh, BiTrash } from 'react-icons/bi';
import { TestFormBody, TestFormContainer, TestFormHeader } from 'styles';

const TestForm = ({ selectFormTab }: { selectFormTab: string }) => {
  return (
    <>
      {selectFormTab === 'Params' ? (
        <TestFormContainer>
          <TestFormHeader>
            <div className='form-key'>Key</div>
            <div className='form-value'>
              <span>Value</span>
              <BiRefresh />
            </div>
          </TestFormHeader>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <TestFormBody key={index}>
                <div className='form-key pl-2'>STR_DATE</div>
                <div className='form-value'>
                  <input
                    type='text'
                    placeholder='ex : YYYY-MM-DD'
                    className='w-full bg-transparent outline-none'
                  />
                  <BiTrash />
                </div>
              </TestFormBody>
            ))}
        </TestFormContainer>
      ) : (
        <div className='mt-2'>
          <textarea className='w-full h-[400px] bg-transparent border border-slate-500 rounded-md resize-none outline-none py-1 px-2 text-sm' />
        </div>
      )}
    </>
  );
};

export default TestForm;
