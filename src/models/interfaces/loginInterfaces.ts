import {
  ChangeInputEvent,
  CommonObject,
  FocusInputEvent,
} from 'models/types/commonTypes';
import { FormEvent } from 'react';

export interface ILoginFormContext {
  errors: CommonObject;
  touched: CommonObject;
  handleSubmit: (e: FormEvent) => void;
  getFieldProps: (name: string) => ILoginFieldProps;
}

export interface ILoginFieldProps {
  name: string;
  value: string | number | undefined;
  onBlur: (e: FocusInputEvent) => void;
  onChange: (e: ChangeInputEvent) => void;
}

export interface IUseFormProps {
  initialValues: CommonObject;
  validate: (values: CommonObject) => CommonObject;
  onSubmit: (values: CommonObject) => void;
}

export interface ILoginInputProps {
  type: string;
  name: string;
  placeholder: string;
}
