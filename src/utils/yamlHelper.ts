import yaml from "js-yaml";

interface IData {
  domains: IDomain[];
}
interface IDomain {
  name: string;
  categories: object[];
}

export function parsingYaml() {
  const yamlText = "";
  const parseData = yaml.load(yamlText) as IData;
  const jsonData = JSON.stringify(parseData, null, 2);
}
