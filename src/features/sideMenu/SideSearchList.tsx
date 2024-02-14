import { sideMenuState } from "atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { SideSearchListBox } from "./sideMenuStyles";
import { ISideMethod } from "models";

const SideSearchList = () => {
  const searchMethodList = useRecoilValue(sideMenuState.searchMethodList);
  const hasData = searchMethodList.length === 0;
  const setSearchMethod = useSetRecoilState(sideMenuState.searchMethod);
  const setSelectCategory = useSetRecoilState(sideMenuState.selectSideCategory);
  const setSelectMethod = useSetRecoilState(sideMenuState.selectSideMethod);

  const handleSelect = (target: ISideMethod) => {
    setSelectCategory(target.upperCode);
    setSelectMethod(target.name);
    setSearchMethod("");
  };

  return (
    <SideSearchListBox $hasData={hasData}>
      {searchMethodList.map((method) => (
        <div
          key={method.name}
          className="search-item"
          onClick={() => handleSelect(method)}
        >
          {method.name}
        </div>
      ))}
    </SideSearchListBox>
  );
};

export default SideSearchList;
