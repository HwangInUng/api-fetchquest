import tw from 'twin.macro';
import styled from 'styled-components';

export const LoginContainer = styled.div<{ $background?: string }>`
  ${tw`
    w-screen
    h-screen
    flex
    items-center
    justify-center
  `}

  background-image: linear-gradient(rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)),
    url(${({ $background }) => $background || null});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LoginWrapper = styled.div`
  ${tw`
    w-[700px]
    h-[500px]
    flex
    shadow-[10px 10px 30px 2px rgba(0, 0, 0, 0.4)]
    shadow-blue-900
    rounded-[30px]
    overflow-hidden
  `}
`;

export const LogoBox = styled.div`
  ${tw`
    flex
    flex-col
    w-1/2
    bg-gradient-to-b
    from-blue-50
    via-20%
    via-blue-200
    to-blue-500
  `}
  & div {
    ${tw`
        text-center
    `}
  }

  .logo {
    ${tw`
        h-2/3
        flex
    `}
    & img {
      ${tw`
        w-1/2
        h-[60%]
        m-auto
        mb-5
    `}
    }
  }

  .main-text {
    ${tw`
        text-white
        font-bold
        text-xl
        h-1/3
    `}
  }

  .sub-text {
    ${tw`
        text-gray-200
        font-[300]
        text-xs
        pb-4
    `}
  }
`;

export const LoginBox = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    gap-10
    w-1/2
    bg-white
  `}

  & div {
    ${tw`
        flex
        items-center
    `}
  }
  .title {
    ${tw`
        text-3xl
        text-indigo-600
        font-extrabold
    `}
  }
  .login-form {
    ${tw`
      w-full
      flex
      flex-col
      items-center
      gap-10
    `}
    .input-box {
      ${tw`
        w-[70%]
        flex-col
        gap-0.5
    `}
    }
    .button-box {
      ${tw`
        w-[70%]
        justify-center
    `}
    }
    & hr {
      ${tw`
        w-2/3
        border
        border-blue-800
        m-0
        p-0
    `}
    }
  }
`;

export const LoginInput = styled.input`
  ${tw`
    w-full
    p-2
    text-sm
    border-slate-400
    border
    rounded-xl
    outline-none
    focus:invalid:border-red-500
    focus:invalid:shadow-[0px 0px 3px 0px red]
  `}
  &:focus {
    box-shadow: 0px 0px 3px 0px darkblue;
    transition-duration: 100ms;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const ErrorSpan = styled.span`
  ${tw`
    text-xs
    text-red-600
  `}
`;

export const LoginButton = styled.button`
  ${tw`
    w-full
    p-2
    bg-indigo-600
    rounded-xl
    text-white
    font-bold
    text-lg
    hover:bg-indigo-800
  `}
  &:hover {
    transform: scale(1.03);
    transition-duration: 150ms;
  }
`;
