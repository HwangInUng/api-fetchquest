import { ChangeInputEvent, FocusInputEvent, IUseFormProps } from 'models';
import { FormEvent, useCallback, useEffect, useState } from 'react';

export default function useForm({
  initialValues,
  validate,
  onSubmit,
}: IUseFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleBlur = (e: FocusInputEvent) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleChange = (e: ChangeInputEvent) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const keys = Object.keys(values);
    setTouched(
      keys.reduce((touched: { [key: string]: boolean }, field) => {
        touched[field] = true;
        return touched;
      }, {}),
    );

    const errors = validate(values);
    setErrors(errors);

    if (Object.values(errors).some(v => v)) return;

    onSubmit(values);
  };

  const getFieldProps = (name: string) => {
    const value = values[name];
    const onBlur = handleBlur;
    const onChange = handleChange;

    return { name, value, onBlur, onChange };
  };

  const runVaildator = useCallback(() => validate(values), [values]);

  useEffect(() => {
    const errors = runVaildator();
    setErrors(errors);
  }, [runVaildator]);

  return {
    errors,
    touched,
    handleSubmit,
    getFieldProps,
  };
}
