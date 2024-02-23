import TextCopyButton from 'components/CopyButton';
import { MethodDescriptionBox } from 'styles';

const MethodDescription = ({
  description,
  url,
}: {
  description: string[];
  url: string;
}) => {
  return (
    <MethodDescriptionBox>
      <ul className='list'>
        <li className='relative'>
          <span>{`URL : ${url}`}</span>
          <TextCopyButton
            title='URL Copy'
            copyValue={url}
          />
        </li>
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </MethodDescriptionBox>
  );
};

export default MethodDescription;
