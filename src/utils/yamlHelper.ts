import yaml from 'js-yaml';
import {
  IData,
  IDataList,
  IDomain,
  IDomainList,
  ISideCategory,
} from 'models';

export async function fetchYaml(filePath: string) {
  const response = await fetch(filePath);
  return response.text();
}

export function parsingDomain(yamlText: string) {
  const parseData = yaml.load(yamlText) as IDomainList;

  const domains = addUpperInfoToItems(parseData.domains);
  const methodList = separateMethodList(domains);
  return { domains, methodList };
}

export function parsingInfoData(yamlText: string) {
  const parseData = yaml.load(yamlText) as IDataList;

  if (parseData.params) return parseData.params;
  if (parseData.responses) return parseData.responses;
}

export function separateMethodList(domains: Array<IDomain>) {
  return domains.flatMap(domain =>
    domain.categories.flatMap(category => category.methods || []),
  );
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

export function convertSampleData(sampleData: IData[]) {
  const convertedSampleData = sampleData.map(data => {
    let temp = {};

    for (const field of data.fields) {
      temp = { [field.name]: field.example, ...temp };
    }

    const newSampleData = { ...data, fields: temp };
    return newSampleData;
  });
  return convertedSampleData;
}
