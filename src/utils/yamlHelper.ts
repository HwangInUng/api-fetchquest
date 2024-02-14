import yaml from "js-yaml";
import { IDomainList } from "models";

export async function fetchDomain() {
  const response = await fetch("./yaml/domain.yaml");
  return response.text();
}

export function parsingDomain(yamlText: string) {
  const parseData = yaml.load(yamlText) as IDomainList;
  const domains = parseData.domains;
  const methodList = domains.flatMap((domain) =>
    domain.categories.flatMap((category) => {
      if (category.methods) {
        return category.methods.flatMap((method) => ({
          ...method,
          upperCode: category.code,
        }));
      }
      return [];
    })
  );
  return { domains, methodList };
}
