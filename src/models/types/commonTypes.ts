import { ChangeEvent, FocusEvent } from 'react';

export type CommonObject = {
  [key: string]: string | number | undefined;
};

export type ChangeInputEvent = ChangeEvent<HTMLInputElement>;
export type ChangeTextAreaEvent = ChangeEvent<HTMLTextAreaElement>;
export type FocusInputEvent = FocusEvent<HTMLInputElement>;
