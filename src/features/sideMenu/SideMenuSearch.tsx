import { sideMenuState } from 'atoms';
import { useInputValue } from 'hooks';
import { KeyboardEvent, useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useSetRecoilState } from 'recoil';

const SideMenuSearch = () => {
  const setSearchMethod = useSetRecoilState(sideMenuState.searchMethod);
  const [inputValue, setInputValue] = useInputValue('');

  const handleClick = () => {
    setSearchMethod(inputValue);
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    setSearchMethod(inputValue);
  };

  useEffect(() => {
    if (!inputValue) setSearchMethod('');
  }, [inputValue]);

  return (
    <div className='search-box'>
      <div className='search-field'>
        <input
          type='text'
          value={inputValue}
          onChange={setInputValue}
          onKeyDown={handleEnter}
          placeholder='Search'
        />
        <button onClick={handleClick}>
          <BiSearchAlt />
        </button>
      </div>
    </div>
  );
};

export default SideMenuSearch;
