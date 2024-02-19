export interface ISideMethod {
  name: string;
  method: 'get' | 'post' | 'put' | 'delete';
  upperCode: string;
  upperName: string;
  // url?: string;
}

export interface ISideMethodProps {
  methods?: Array<ISideMethod>;
}

export interface ISideCategory {
  code: string;
  name: string;
  upperCode: string;
  upperName: string;
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
  code: string;
  categories: Array<ISideCategory>;
}
