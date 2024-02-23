import { useForm } from 'hooks';
import { ILoginFormContext, IUseFormProps } from 'models';
import { createContext } from 'react';
import LoginError from './LoginError';
import { LoginBox, LoginButton } from 'styles';
import LoginField from './LoginField';

export const LoginFormContext = createContext<ILoginFormContext | null>(
  null,
);

const LoginForm = (props: IUseFormProps) => {
  const formValue = useForm(props);

  return (
    <LoginFormContext.Provider value={formValue}>
      <LoginBox>
        <div className='title'>API FetchQuest</div>
        <form
          className='login-form'
          onSubmit={formValue.handleSubmit}
        >
          <div className='input-box'>
            <LoginField
              type='text'
              name='USR_ID'
              placeholder='ID'
            />
            <LoginError name='USR_ID' />
            <LoginField
              type='password'
              name='PWD'
              placeholder='PASSWORD'
            />
            <LoginError name='PWD' />
          </div>
          <hr />
          <div className='button-box'>
            <LoginButton type='submit'>Login</LoginButton>
          </div>
        </form>
      </LoginBox>
    </LoginFormContext.Provider>
  );
};

export default LoginForm;
