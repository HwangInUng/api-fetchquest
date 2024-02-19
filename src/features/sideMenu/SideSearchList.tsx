import { sideMenuState } from 'atoms';
import { useRecoilState } from 'recoil';
import { ISideMethod } from 'models';
import { SideSearchListBox } from 'styles';

const SideSearchList = () => {
  const [searchMethodList, resetSearchMethodList] = useRecoilState(
    sideMenuState.searchMethodList,
  );
  const hasData = searchMethodList.length === 0;

  const handleSelect = (target: ISideMethod) => {
    resetSearchMethodList([target]);
  };

  return (
    <SideSearchListBox $hasData={hasData}>
      {searchMethodList.map(method => (
        <div
          key={method.name}
          className='search-item'
          onClick={() => handleSelect(method)}
        >
          {method.name}
        </div>
      ))}
    </SideSearchListBox>
  );
};

export default SideSearchList;
