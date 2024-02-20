import { CopyButton } from 'styles';

const TextCopyButton = ({
  title,
  copyValue,
}: {
  title: string;
  copyValue: string;
}) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(copyValue);
    alert('샘플 데이터가 클립보드에 복사되었습니다.');
  };
  return <CopyButton onClick={handleCopy}>{title}</CopyButton>;
};

export default TextCopyButton;
