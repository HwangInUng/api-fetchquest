import tw from "twin.macro";
import styled from "styled-components";

type containerWidth = { width: number };

export const SideMenuContainer = styled.div<containerWidth>`
  width: ${({ width }) => width}px;
  box-shadow: 0 0 7px rgba(23, 37, 84, 0.6);

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
      bg-neutral-50
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

export const SideUl = styled.ul`
  ${tw`
    flex
    flex-col
    gap-y-1
    py-1
  `}

  .side-title {
    ${tw`
      text-sm
      text-slate-500
    `}
    .title-box {
      padding: 0.5rem;
      padding-bottom: 0;
    }
  }

  .side-category {
    ${tw`
      cursor-pointer
      hover:bg-slate-200
      transform
      duration-150
      text-slate-950
      flex
      items-center
      justify-between
      p-2
      pl-4
    `}
    svg {
      ${tw`
        transform
        duration-150
      `}
    }
  }

  .side-method {
    ${tw`
      first:mt-2
      flex
      items-center
      gap-x-2
      cursor-pointer
      text-slate-600
      text-[0.9rem]
      ml-6
      mr-3
      mb-4
      hover:border-blue-600
      border-r-2
      border-slate-50
    `}

    .method-type {
      ${tw`
        flex
        items-center
        justify-center
        rounded-md
        text-white
        text-[0.6rem]
        h-[1rem]
        w-[2rem]
      `}
    }
  }
`;
