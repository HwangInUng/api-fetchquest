import { LoginLogo } from 'assets';
import { LogoBox } from 'styles';

const LoginLogoBox = () => {
  return (
    <LogoBox>
      <div className='logo'>
        <img
          src={LoginLogo}
          alt={LoginLogo}
        />
      </div>
      <div className='main-text'>
        <h3>
          We provide the best
          <br />
          AI solution through data.
        </h3>
      </div>
      <div className='sub-text'>Copyright ⓒ AIBIZ ALL rights reserved</div>
    </LogoBox>
  );
};

export default LoginLogoBox;
