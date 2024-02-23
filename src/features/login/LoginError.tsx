import { useContext } from 'react';
import { LoginFormContext } from './LoginForm';
import { ErrorSpan } from 'styles';

interface ILoginErrorProps {
  name: string;
  nospace?: boolean;
}

const LoginError = ({ name, nospace = false }: ILoginErrorProps) => {
  const loginFormContext = useContext(LoginFormContext);

  if (
    !loginFormContext?.touched[name] ||
    !loginFormContext?.errors[name]
  ) {
    return nospace ? null : <div className='h-[1rem]' />;
  }

  return (
    <div className='w-full'>
      <ErrorSpan>{loginFormContext?.errors[name]}</ErrorSpan>
    </div>
  );
};

export default LoginError;
