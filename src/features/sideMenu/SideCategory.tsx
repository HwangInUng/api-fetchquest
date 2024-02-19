import { BiSolidChevronRight } from 'react-icons/bi';
import SideMethod from './SideMethod';
import { ISideCategoryProps } from 'models';
import { useRecoilState } from 'recoil';
import { sideMenuState } from 'atoms';
import { SideCategoryBox } from 'styles';

const SideCategory = ({ categories }: ISideCategoryProps): JSX.Element => {
  const [selectCategory, setSelectCategory] = useRecoilState(
    sideMenuState.selectSideCategory,
  );
  const isSelect = (categoryCode: string) => {
    return selectCategory === categoryCode;
  };

  return (
    <div>
      {categories.map(category => (
        <div key={category.code}>
          <SideCategoryBox
            $isSelect={isSelect(category.code)}
            onClick={() => setSelectCategory(category.code)}
          >
            <span>{category.name}</span>
            <BiSolidChevronRight
              className={`${isSelect(category.code) && 'rotate-90'}`}
            />
          </SideCategoryBox>
          {isSelect(category.code) && (
            <SideMethod methods={category.methods} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SideCategory;
