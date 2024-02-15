import tw from "twin.macro";
import styled from "styled-components";

export const SideMenuContainer = styled.div`
  box-shadow: 0 0 7px rgba(23, 37, 84, 0.6);
  ${tw`
    bg-slate-50
    w-[250px]
    h-full
    flex
    flex-col
    rounded-r-lg
    overflow-hidden
  `}
`;

export const SideTopBox = styled.div`
  ${tw`
    flex-shrink-0
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
      relative
      h-[50px]
      flex
      justify-center
      items-center
      py-1
      px-2
    `}
  }

  .search-field {
    ${tw`
      h-[80%]
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

export const SideListBox = styled.div`
  ${tw`
    overflow-y-auto
    flex-grow
  `}
`;

export const SideUl = styled.ul`
  ${tw`
    flex
    flex-col
    gap-y-1
    py-1
    text-[0.8rem]
  `}

  .side-title {
    ${tw`
      text-slate-500
    `}
    .title-box {
      padding: 0.5rem;
      padding-bottom: 0;
    }
  }
`;

export const SideCategoryBox = styled.div<{ $isSelect: boolean }>`
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
  ${({ $isSelect }) => ($isSelect ? tw`bg-slate-200` : null)}

  svg {
    ${tw`
      transform
      duration-150
    `}
  }
`;

export const SideMethodBox = styled.div<{
  $isSelect: boolean;
  $typeColor: string;
}>`
  ${tw`
    first:mt-2
    flex
    items-center
    gap-x-2
    cursor-pointer
    text-slate-600
    ml-6
    mr-3
    mb-4
    hover:border-orange-600
    border-r-2
    border-slate-50
    transform
    duration-200
  `}
  ${({ $isSelect }) => ($isSelect ? tw`border-orange-600` : null)}

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

    ${({ $typeColor }) => `background-color: ${$typeColor}`};
  }
`;

export const SideSearchListBox = styled.div<{ $hasData: boolean }>`
  ${tw`
    bg-slate-200
    transform
    duration-150
    flex
    flex-col
    gap-y-1
    overflow-auto
  `}

  ${({ $hasData }) => ($hasData ? tw`h-0` : tw`h-[120px]`)}

  .search-item {
    ${tw`
      px-4
      py-0.5
      cursor-pointer
      text-[0.9rem]
      hover:bg-slate-100
    `}
  }
`;
