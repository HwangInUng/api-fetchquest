import { ChangeEvent, useState } from 'react';
import { MethodUrlInput } from 'styles';

const MethodUrl = ({ url }: { url: string }) => {
  const [requestUrl, setRequestUrl] = useState(url);
  const handleChangeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setRequestUrl(e.target.value);
  };

  return (
    <MethodUrlInput
      type='text'
      placeholder='URL 입력'
      value={requestUrl}
      onChange={handleChangeUrl}
    />
  );
};

export default MethodUrl;
