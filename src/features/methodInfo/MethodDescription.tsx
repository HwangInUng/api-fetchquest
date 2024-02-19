import { MethodDescriptionBox } from 'styles';

const MethodDescription = ({ description }: { description: string[] }) => {
  return (
    <MethodDescriptionBox>
      <ul className='list'>
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </MethodDescriptionBox>
  );
};

export default MethodDescription;
