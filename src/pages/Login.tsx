import { LoginBg } from 'assets';
import axios from 'axios';
import { LoginForm, LoginLogoBox } from 'features';
import { CommonObject } from 'models';
import { LoginContainer, LoginWrapper } from 'styles';

const doLogin = async (user: CommonObject) => {
  const response = await axios.post('/api/login', user);
  const data = response.data;
  const accessToken = data.accessToken;
  const userInfo = data.userInfo;

  sessionStorage.setItem('accessToken', accessToken);
  sessionStorage.setItem('userInfo', userInfo);

  window.location.href = '/';
};

export const loginValidate = (user: CommonObject) => {
  const errors = {
    USR_ID: '',
    PWD: '',
  };

  if (!user.USR_ID) {
    errors.USR_ID = '아이디를 입력해주세요.';
  }
  if (!user.PWD) {
    errors.PWD = '비밀번호를 입력해주세요.';
  }
  return errors;
};

const Login = () => {
  const defaultUser = { USR_ID: '', PWD: '' };
  return (
    <LoginContainer $background={LoginBg}>
      <LoginWrapper>
        <LoginLogoBox />
        <LoginForm
          initialValues={defaultUser}
          validate={loginValidate}
          onSubmit={doLogin}
        />
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
