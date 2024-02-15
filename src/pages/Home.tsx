import { sideMenuState } from "atoms";
import { Content, SideMenu } from "features";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { fetchDomain, parsingDomain } from "utils/yamlHelper";
import Loading from "components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const setSideMenus = useSetRecoilState(sideMenuState.sideMenus);
  const setSideMethodList = useSetRecoilState(sideMenuState.sideMethodList);

  useEffect(() => {
    const fetchSideMenus = async () => {
      const response = await fetchDomain();
      const { domains, methodList } = parsingDomain(response);

      setSideMenus(domains);
      setSideMethodList(methodList);
      setIsLoading(false);
    };

    fetchSideMenus();
  }, []);

  if (isLoading)
    return (
      <div className="h-screen">
        <Loading />
      </div>
    );

  return (
    <div className="flex h-screen w-screen">
      <SideMenu />
      <Content />
    </div>
  );
};

export default Home;
