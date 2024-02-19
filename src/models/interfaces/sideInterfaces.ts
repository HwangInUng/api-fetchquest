import { IData } from './methodInterfaces';

export interface IInitialSideMethod {
  name: string;
  method: 'get' | 'post' | 'put' | 'delete';
  description: string[];
  upperCode: string;
  upperName: string;
  url?: string;
  param: { name: string }[];
  res: { code: number; name: string }[];
}

export interface ISideMethod {
  name: string;
  method: 'get' | 'post' | 'put' | 'delete';
  description: string[];
  upperCode: string;
  upperName: string;
  url?: string;
  param: { [key: string]: IData };
  res: { [key: number]: IData };
}

export interface ISideMethodProps {
  methods?: IInitialSideMethod[];
}

export interface ISideCategory {
  code: string;
  name: string;
  upperCode: string;
  upperName: string;
  methods?: IInitialSideMethod[];
}

export interface ISideCategoryProps {
  categories: ISideCategory[];
}

export interface IDomainList {
  domains: IDomain[];
}

export interface IDomain {
  name: string;
  code: string;
  categories: ISideCategory[];
}
