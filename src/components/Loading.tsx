import { Spinner } from 'assets';
import { LoadingBox } from 'styles';

const Loading = () => {
  return (
    <LoadingBox>
      <img
        src={Spinner}
        alt='loading'
      />
    </LoadingBox>
  );
};

export default Loading;
