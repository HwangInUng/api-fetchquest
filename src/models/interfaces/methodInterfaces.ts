import { ReactNode } from "react";

export interface IDataList {
  params?: IData[];
  responses?: IData[];
}

export interface IData {
  name: string;
  type: string;
  fields: Array<IField>;
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

export interface IMethodInfoProps {
  children: ReactNode;
  title: string;
}

export interface ISampleField {
  [key: string]: string | number;
}
