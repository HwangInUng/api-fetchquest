import { IData, ITestFormValues } from 'models';
import { convertSampleData } from './yamlHelper';

interface IMethodParam {
  [key: string]: IData;
}

export const convertParamToRawData = (methodParam: IMethodParam) => {
  const paramKeys = Object.keys(methodParam);
  const convertRawData = paramKeys.reduce((acc, current) => {
    const convertSampleFields = convertSampleData(
      methodParam[current],
    ).fields;
    const fields =
      methodParam[current].type === 'array'
        ? [convertSampleFields]
        : convertSampleFields;
    acc = {
      ...acc,
      [current]: fields,
    };
    return acc;
  }, {});

  const jsonParamData = JSON.stringify(convertRawData, null, 2);

  return jsonParamData;
};

export const convertJson = (object: {
  [key: string]: string | number;
}) => {
  return JSON.stringify(object, null, 2);
};

export const convertFieldToFormValues = (mthodParam: IMethodParam) => {
  const firstParam = Object.keys(mthodParam)[0];
  const formValues = mthodParam[firstParam].fields.map(field => ({
    name: field.name,
    example: field.example,
    format: field.attributes.format,
    type: field.attributes.type,
  }));

  return formValues;
};

export const convertFormToFieldValues = (
  formValues: ITestFormValues[],
) => {
  return formValues.reduce((acc, current) => {
    acc = { ...acc, [current.name]: current.example };
    return acc;
  }, {});
};
