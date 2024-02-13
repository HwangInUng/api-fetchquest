import tw from "twin.macro";
import styled from "styled-components";

type containerWidth = { width: number };

export const SideMenuContainer = styled.div<containerWidth>`
  width: ${({ width }) => width}px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);

  ${tw`
    bg-slate-50
    h-full
    rounded-r-lg
    overflow-hidden
  `}
`;

export const SideTopBox = styled.div`
  ${tw`
    bg-blue-950
  `}

  .logo-box {
    ${tw`
      h-[70px]
      flex
    `}

    a {
      ${tw`
        flex
        items-center
        justify-center
        w-full
      `}
    }
  }

  .search-box {
    ${tw`
      h-[40px]
      flex
      justify-center
      py-1
      px-2
    `}
  }
  .search-field {
    ${tw`
      w-[90%]
      flex
      items-center
      justify-between
      rounded-lg
      bg-slate-50
      px-2
    `}
    input {
      ${tw`
        bg-transparent
        outline-none
        text-sm
      `}
    }
    button {
      ${tw`
        p-1
        bg-transparent
        rounded-lg
        text-blue-950
        opacity-70
        text-xl
        hover:opacity-100
        transform
        duration-150
      `}
    }
  }
`;
