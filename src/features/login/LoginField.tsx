import { useContext } from 'react';
import { LoginFormContext } from './LoginForm';
import { ILoginInputProps } from 'models';
import { LoginInput } from 'styles';

const LoginField = ({ name, ...props }: ILoginInputProps) => {
  const loginFormContext = useContext(LoginFormContext);

  return (
    <LoginInput
      {...props}
      {...loginFormContext?.getFieldProps(name)}
      autoComplete='off'
    />
  );
};

export default LoginField;
