import { SideUl } from "./sideMenuStyles";
import SideCategory from "./SideCategory";
import { useEffect, useState } from "react";
import { fetchDomain, parsingYaml } from "utils/yamlHelper";
import { IDomain } from "models";

const SideList = () => {
  const [domains, setDomains] = useState<Array<IDomain>>();

  useEffect(() => {
    const fetchDomainData = async () => {
      const yamlText = await fetchDomain();
      const parseData = parsingYaml(yamlText);
      setDomains(parseData.domains);
    };

    fetchDomainData();
  }, []);

  return (
    <div>
      <SideUl>
        {domains &&
          domains.map((domain) => (
            <li key={domain.name} className="side-title">
              <div className="title-box">{domain.name}</div>
              <SideCategory categories={domain.categories} />
            </li>
          ))}
      </SideUl>
    </div>
  );
};

export default SideList;
