import { MethodDescriptionBox } from "styles";

const MethodDescription = ({ list }: { list: Array<any> }) => {
  return (
    <MethodDescriptionBox>
      <ul className="list">
        {list.map((l) => (
          <li>{l.name}</li>
        ))}
      </ul>
    </MethodDescriptionBox>
  );
};

export default MethodDescription;
