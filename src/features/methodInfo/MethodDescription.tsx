import TextCopyButton from 'components/CopyButton';
import { MethodDescriptionBox } from 'styles';

const MethodDescription = ({
  description,
  url,
}: {
  description: string[];
  url: string;
}) => {
  console.log(url);
  return (
    <MethodDescriptionBox>
      <ul className='list'>
        <li className='relative'>
          <span>{'URL : /api/AIPM030M03/sensor'}</span>
          <TextCopyButton
            title='URL Copy'
            copyValue='/api/AIPM030M03/sensor'
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
