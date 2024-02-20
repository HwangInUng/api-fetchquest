import yaml from 'js-yaml';
import {
  IData,
  IDataList,
  IDomain,
  IDomainList,
  ISideCategory,
  ISideMethod,
} from 'models';

export async function fetchYaml(filePath: string) {
  const response = await fetch(filePath);
  return response.text();
}

export function parsingDomain(yamlText: string) {
  const parseData = yaml.load(yamlText) as IDomainList;

  const domains = addUpperInfoToItems(parseData.domains);
  return domains;
}

export function parsingInfoData(yamlText: string) {
  const parseData = yaml.load(yamlText) as IDataList;

  if (parseData.params) return parseData.params;
  if (parseData.responses) return parseData.responses;
}

export function separateMethodList(
  domains: IDomain[],
  dataList: IDataList,
): ISideMethod[] {
  if (!dataList.params || !dataList.responses) return [];

  const params = dataList.params;
  const response = dataList.responses;
  const flatMethods = domains.flatMap(domain =>
    domain.categories.flatMap(category => category.methods || []),
  );

  const separatedMethodList = flatMethods.map(method => {
    let methodParam = {};
    let methodRes = {};
    const currentParams = params[method.upperCode];
    const currentResponses = response[method.upperCode];

    method?.param?.forEach(
      param =>
        (methodParam = {
          ...methodParam,
          [param.name]: { ...currentParams[param.name], name: param.name },
        }),
    );
    method?.res?.forEach(
      res =>
        (methodRes = {
          ...methodRes,
          [res.code]: { ...currentResponses[res.name], name: res.name },
        }),
    );

    return { ...method, param: methodParam, res: methodRes };
  });

  return separatedMethodList;
}

export function addUpperInfoToItems(domains: Array<IDomain>) {
  const addedDomains = domains.map(domain => ({
    ...domain,
    categories: addUpperInfoToCategories(domain),
  }));
  return addedDomains;
}

export function addUpperInfoToCategories(domain: IDomain) {
  return domain.categories.map(category => ({
    ...category,
    upperCode: domain.code,
    upperName: domain.name,
    methods: addUpperInfoToMethods(category),
  }));
}

export function addUpperInfoToMethods(category: ISideCategory) {
  if (!category.methods) return [];

  const addedMethods = category.methods.map(method => ({
    ...method,
    upperCode: category.code,
    upperName: category.name,
  }));

  return addedMethods;
}

export function convertSampleData(sampleData: IData) {
  if (!sampleData.name) return { name: '', type: '', fields: {} };

  const fields = sampleData?.fields;

  let temp = {};

  for (const field of fields) {
    temp = { [field.name]: field.example, ...temp };
  }

  const newSampleData = { ...sampleData, fields: temp };
  return newSampleData;
}
