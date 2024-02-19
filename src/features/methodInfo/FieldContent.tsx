import { IAttributes, IField } from 'models';
import { AttributeBox, AttributeType, AttributeTypeBox } from 'styles';

type AttributeKey = keyof IAttributes;

const renderAttribute = (
  key: string,
  attributes: { [key: string]: any },
) => {
  const renderObject = {
    type: attributes.type,
    minLength: `>=${attributes.minLength}`,
    maxLength: `<=${attributes.maxLength}`,
    required: 'required',
    format: attributes.format,
  };
  const targetKey = key as AttributeKey;

  return renderObject[targetKey];
};

const FieldContent = ({ field }: { field: IField }) => {
  const { attributes, desc } = field;
  return (
    <AttributeBox>
      <AttributeTypeBox>
        {Object.keys(attributes).map(key => (
          <AttributeType
            key={key}
            $required={key === 'required' && attributes[key]}
          >
            {renderAttribute(key, attributes)}
          </AttributeType>
        ))}
      </AttributeTypeBox>
      <div className='attribute-desc'>{desc}</div>
    </AttributeBox>
  );
};

export default FieldContent;
