import { sideMenuState } from 'atoms';
import { IInitialSideMethod } from 'models';
import { useRecoilState } from 'recoil';
import { SideMethodBox } from 'styles';
import { SIDE_METHOD_COLOR, onMoveToScroll } from 'utils';

interface ISideMethodProps {
  methods?: IInitialSideMethod[];
}

const SideMethod = ({ methods = [] }: ISideMethodProps): JSX.Element => {
  const [selectMethod, setSelectMethod] = useRecoilState(
    sideMenuState.selectSideMethod,
  );
  const isSelect = (targetName: string) => selectMethod === targetName;

  const handleClick = (methodName: string) => {
    onMoveToScroll(methodName);
    setSelectMethod(methodName);
  };

  return (
    <div>
      {methods.map(method => (
        <SideMethodBox
          key={method.name}
          $isSelect={isSelect(method.name)}
          $typeColor={SIDE_METHOD_COLOR[method.method]}
          onClick={() => handleClick(method.name)}
        >
          <span className='method-type'>{method.method}</span>
          <div>{method.name}</div>
        </SideMethodBox>
      ))}
    </div>
  );
};

export default SideMethod;
