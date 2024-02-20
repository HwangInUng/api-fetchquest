import { sideMenuState } from 'atoms';
import { Content, SideMenu } from 'features';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Loading from 'components/Loading';
import {
  fetchYaml,
  parsingDomain,
  parsingInfoData,
  separateMethodList,
} from 'utils';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const setSideMenus = useSetRecoilState(sideMenuState.sideMenus);
  const setSideMethodList = useSetRecoilState(
    sideMenuState.sideMethodList,
  );

  useEffect(() => {
    const fetchSideMenus = async () => {
      const domainData = await fetchYaml('./yaml/domain.yaml');
      const paramData = await fetchYaml('./yaml/param.yaml');
      const responseData = await fetchYaml('./yaml/response.yaml');

      const domains = parsingDomain(domainData);
      const params = parsingInfoData(paramData);
      const responses = parsingInfoData(responseData);
      const methodList = separateMethodList(domains, {
        params: params,
        responses: responses,
      });

      setSideMenus(domains);
      setSideMethodList(methodList);
      setIsLoading(false);
    };

    fetchSideMenus();
  }, []);

  if (isLoading)
    return (
      <div className='h-screen'>
        <Loading />
      </div>
    );

  return (
    <div className='flex h-screen w-screen lg:flex-row flex-col'>
      <SideMenu />
      <Content />
    </div>
  );
};

export default Home;
