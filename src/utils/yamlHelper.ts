import yaml from "js-yaml";
import { IData } from "models";

export async function fetchDomain() {
  const response = await fetch("./yaml/domain.yaml");
  return response.text();
}

export function parsingYaml(yamlText: string) {
  const parseData = yaml.load(yamlText) as IData;
  // const jsonData = JSON.stringify(parseData, null, 2);
  return parseData;
}
