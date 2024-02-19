import { ChangeEvent, useState } from 'react';

export default function useInputValue(initialValue: any) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    // const name = e.target.name;
    const value = e.target.value;
    // const type = e.target.type;

    setInputValue(() => value);
  };

  return [inputValue, handleInputValue];
}
