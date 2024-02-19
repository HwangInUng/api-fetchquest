import { methodInfoState, sideMenuState } from 'atoms';
import { Content, SideMenu } from 'features';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Loading from 'components/Loading';
import { fetchYaml, parsingDomain, parsingInfoData } from 'utils';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const setSideMenus = useSetRecoilState(sideMenuState.sideMenus);
  const setSideMethodList = useSetRecoilState(
    sideMenuState.sideMethodList,
  );
  const setInfoData = useSetRecoilState(methodInfoState.infoData);

  useEffect(() => {
    const fetchSideMenus = async () => {
      const domainData = await fetchYaml('./yaml/domain.yaml');
      const paramData = await fetchYaml('./yaml/param.yaml');
      const responseData = await fetchYaml('./yaml/response.yaml');

      const { domains, methodList } = parsingDomain(domainData);
      const params = parsingInfoData(paramData);
      const responses = parsingInfoData(responseData);

      setSideMenus(domains);
      setSideMethodList(methodList);
      setInfoData(old => ({
        ...old,
        params: params,
        responses: responses,
      }));
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
    <div className='flex h-screen w-screen'>
      <SideMenu />
      <Content />
    </div>
  );
};

export default Home;
