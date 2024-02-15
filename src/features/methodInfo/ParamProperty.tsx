import { IParam, IParamProperties } from "models";
import { PropertyBox, PropertyType, PropertyTypeBox } from "styles";

type PropertyKey = keyof IParamProperties;

const renderProperty = (key: string, properties: { [key: string]: any }) => {
  const renderObject = {
    type: properties.type,
    minLength: `>=${properties.minLength}`,
    maxLength: `<=${properties.maxLength}`,
    required: "required",
    format: properties.format,
  };
  const targetKey = key as PropertyKey;

  return renderObject[targetKey];
};

const ParamProperty = ({ param }: { param: IParam }) => {
  return (
    <PropertyBox>
      <PropertyTypeBox>
        {Object.keys(param.properties).map((key) => (
          <PropertyType $required={key === "required" && param.properties[key]}>
            {renderProperty(key, param.properties)}
          </PropertyType>
        ))}
      </PropertyTypeBox>
      <div className="property-desc">{param.desc}</div>
    </PropertyBox>
  );
};

export default ParamProperty;
