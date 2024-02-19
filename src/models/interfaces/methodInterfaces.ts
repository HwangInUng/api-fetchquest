import { ReactNode } from 'react';

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

export interface IMethodInfoProps {
  children: ReactNode;
  title: string;
  type: string;
}

export interface IInfoResponseProps extends IMethodInfoProps {
  responses: { [key: number]: IData };
  selectResponseCode: number;
  setselectResponseCode: (responseCode: number) => void;
}

export interface ISampleField {
  [key: string]: string | number;
}
