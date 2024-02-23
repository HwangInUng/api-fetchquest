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
    alert('클립보드에 복사되었습니다.');
  };
  return <CopyButton onClick={handleCopy}>{title}</CopyButton>;
};

export default TextCopyButton;
