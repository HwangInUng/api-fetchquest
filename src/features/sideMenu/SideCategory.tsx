import { BiSolidChevronRight } from "react-icons/bi";
import SideMethod from "./SideMethod";
import { useState } from "react";
import { ISideCategoryProps } from "models";

const SideCategory = ({ categories }: ISideCategoryProps): JSX.Element => {
  const [selectCategory, setSelectCategory] = useState("");
  const isSelect = (categoryName: string) => {
    return selectCategory === categoryName;
  };
  const handleSelectCategory = (categoryName: string) => {
    if (categoryName === selectCategory) {
      setSelectCategory("");
    } else {
      setSelectCategory(categoryName);
    }
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.name}>
          <div
            className={`
              side-category
              ${isSelect(category.name) && "bg-slate-200"}
            `}
            onClick={() => handleSelectCategory(category.name)}
          >
            <span>{category.name}</span>
            <BiSolidChevronRight
              className={`${isSelect(category.name) && "rotate-90"}`}
            />
          </div>
          {isSelect(category.name) && <SideMethod methods={category.methods} />}
        </div>
      ))}
    </div>
  );
};

export default SideCategory;
