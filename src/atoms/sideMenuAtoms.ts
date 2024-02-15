import { IDomain, ISideMethod } from "models";
import { atom, selector } from "recoil";

const sideMenus = atom<IDomain[]>({
  key: "sideMenus",
  default: [],
});

const searchMethod = atom({
  key: "searchMethod",
  default: "",
});

const sideMethodList = atom<ISideMethod[]>({
  key: "sideMethodList",
  default: [],
});

const searchMethodList = selector<ISideMethod[]>({
  key: "searchMethodList",
  get: ({ get }) => {
    const target = get(searchMethod);
    const methodList = get(sideMethodList);

    if (!target || target.length === 0) return [];

    const newMethodList = methodList.filter((method) =>
      method.name.includes(target)
    );

    return newMethodList;
  },
  set: ({ get, set, reset }, newValue) => {
    if (!Array.isArray(newValue)) return;

    const target = newValue[0] as ISideMethod;

    set(selectSideCategory, target.upperCode);
    set(selectSideMethod, target.name);
    reset(searchMethod);
    reset(searchMethodList);
  },
});

const currentCategory = atom({
  key: "currentCategory",
  default: "",
});

const selectSideCategory = selector({
  key: "selectSideCategory",
  get: ({ get }) => {
    return get(currentCategory);
  },
  set: ({ get, set, reset }, targetCategory) => {
    const selectCategory = get(currentCategory);

    if (targetCategory === selectCategory) reset(currentCategory);
    else set(currentCategory, targetCategory);
  },
});

const currentMethod = atom({
  key: "currentMethod",
  default: "",
});

const selectSideMethod = selector({
  key: "selectSideMethod",
  get: ({ get }) => {
    return get(currentMethod);
  },
  set: ({ get, set, reset }, newValue) => {
    const targetMethodName = newValue as string;
    const selectMethod = get(currentMethod);

    if (targetMethodName === selectMethod) reset(currentMethod);
    else set(currentMethod, targetMethodName);
  },
});

export const sideMenuState = {
  sideMenus,
  searchMethod,
  sideMethodList,
  searchMethodList,
  selectSideCategory,
  selectSideMethod,
};
