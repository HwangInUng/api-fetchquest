import SideCategory from './SideCategory';
import { useRecoilValue } from 'recoil';
import { sideMenuState } from 'atoms';
import { SideListBox, SideUl } from 'styles';

const SideList = () => {
  const domains = useRecoilValue(sideMenuState.sideMenus);

  return (
    <SideListBox>
      <SideUl>
        {domains.map(domain => (
          <li
            key={domain.name}
            className='side-title'
          >
            <div className='title-box'>{domain.name}</div>
            <SideCategory categories={domain.categories} />
          </li>
        ))}
      </SideUl>
    </SideListBox>
  );
};

export default SideList;
