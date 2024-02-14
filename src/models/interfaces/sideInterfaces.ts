export interface ISideMethod {
  name: string;
  method: "get" | "post" | "put" | "delete";
  upperCode: string;
  // url?: string;
}

export interface ISideMethodProps {
  methods?: Array<ISideMethod>;
}

export interface ISideCategory {
  code: string;
  name: string;
  methods?: Array<ISideMethod>;
}

export interface ISideCategoryProps {
  categories: Array<ISideCategory>;
}

export interface IDomainList {
  domains: Array<IDomain>;
}

export interface IDomain {
  name: string;
  categories: Array<ISideCategory>;
}
