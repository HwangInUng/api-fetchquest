import { sideMenuState } from 'atoms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ContentContainer } from 'styles';
import MethodInfo from './methodInfo/MethodInfo';
import { useEffect, useRef } from 'react';
import { selectMethodByScroll } from 'utils';

const Content = (): JSX.Element => {
  const methods = useRecoilValue(
    sideMenuState.methodListByCurrentCategory,
  );
  const setSelectMethod = useSetRecoilState(
    sideMenuState.selectSideMethod,
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (!container) return;
      selectMethodByScroll(container, setSelectMethod);
    };

    if (container) container.addEventListener('scroll', handleScroll);
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ContentContainer ref={containerRef}>
      {methods.map((method, index) => (
        <div
          key={method.name}
          className='flex border-b lg:flex-row flex-col lg:p-0 px-2 py-1'
          id={method.name}
        >
          <MethodInfo
            method={method}
            methodIndex={index}
          />
          <div className='bg-slate-700 flex-grow rounded-lg lg:rounded-none'>
            test
          </div>
        </div>
      ))}
    </ContentContainer>
  );
};

export default Content;
