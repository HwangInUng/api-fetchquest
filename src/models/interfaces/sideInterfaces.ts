export interface ISideMethod {
  name: string;
  method: "get" | "post" | "put" | "delete";
  // url?: string;
}

export interface ISideMethodProps {
  methods?: Array<ISideMethod>;
}

export interface ISideCategory {
  name: string;
  methods?: Array<ISideMethod>;
}

export interface ISideCategoryProps {
  categories: Array<ISideCategory>;
}

export interface IData {
  domains: Array<IDomain>;
}

export interface IDomain {
  name: string;
  categories: Array<ISideCategory>;
}
