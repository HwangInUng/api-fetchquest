export interface IDataList {
  params?: { [key: string]: { [key: string]: IData } };
  responses?: { [key: string]: { [key: string]: IData } };
}

export interface IData {
  name: string;
  type: string;
  fields: IField[];
}

export interface IField {
  name: string;
  attributes: IAttributes;
  desc: string;
  example?: string | number;
}

export interface IAttributes {
  type: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  format?: string;
}

export interface ISampleData {
  name: string;
  type: string;
  fields: ISampleField;
}

export interface ISampleField {
  [key: string]: string | number;
}

export interface ITestFormValues {
  name: string;
  example: string | number | undefined;
  format: string | undefined;
  type: string;
}
