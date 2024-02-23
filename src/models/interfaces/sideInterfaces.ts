import { IData } from './methodInterfaces';

// default SideMethod를 생성하고 extends로 처리 필요
export interface IInitialSideMethod {
  name: string;
  method: 'get' | 'post' | 'put' | 'delete';
  description: string[];
  upperCode: string;
  upperName: string;
  url: string;
  param: { name: string }[];
  res: { code: number; name: string }[];
}

export interface ISideMethod {
  name: string;
  method: 'get' | 'post' | 'put' | 'delete';
  description: string[];
  upperCode: string;
  upperName: string;
  url: string;
  param: { [key: string]: IData };
  res: { [key: number]: IData };
}

export interface ISideCategory {
  code: string;
  name: string;
  upperCode: string;
  upperName: string;
  methods?: IInitialSideMethod[];
}

export interface IDomainList {
  domains: IDomain[];
}

export interface IDomain {
  name: string;
  code: string;
  categories: ISideCategory[];
}
