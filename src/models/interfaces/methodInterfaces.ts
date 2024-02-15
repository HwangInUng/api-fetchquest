export interface IParam {
  name: string;
  properties: IParamProperties;
  desc: string;
}

export interface IParamProperties {
  type: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  format?: string;
}
