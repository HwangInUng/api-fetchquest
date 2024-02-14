import { sideMenuState } from "atoms";
import { SideMenu } from "features";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { fetchDomain, parsingDomain } from "utils/yamlHelper";

const Home = () => {
  const setSideMenus = useSetRecoilState(sideMenuState.sideMenus);
  const setSideMethodList = useSetRecoilState(sideMenuState.sideMethodList);

  useEffect(() => {
    const fetchSideMenus = async () => {
      const response = await fetchDomain();
      const { domains, methodList } = parsingDomain(response);

      setSideMenus(domains);
      setSideMethodList(methodList);
    };

    fetchSideMenus();
  }, []);

  return (
    <div className="flex h-screen w-screen">
      <SideMenu />
    </div>
  );
};

export default Home;
