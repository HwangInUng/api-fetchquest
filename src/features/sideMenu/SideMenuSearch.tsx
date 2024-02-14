import { sideMenuState } from "atoms";
import { useInputValue } from "hooks";
import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useSetRecoilState } from "recoil";

const SideMenuSearch = () => {
  const setSearchMethod = useSetRecoilState(sideMenuState.searchMethod);
  const [inputValue, setInputValue] = useInputValue("");

  const handleSearch = () => {
    setSearchMethod(inputValue);
  };

  useEffect(() => {
    if (!inputValue) setSearchMethod("");
  }, [inputValue]);

  return (
    <div className="search-box">
      <div className="search-field">
        <input
          type="text"
          value={inputValue}
          onChange={setInputValue}
          placeholder="Search"
        />
        <button onClick={handleSearch}>
          <BiSearchAlt />
        </button>
      </div>
    </div>
  );
};

export default SideMenuSearch;
