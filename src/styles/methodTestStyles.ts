import tw from 'twin.macro';
import styled from 'styled-components';

export const MethodTestContainer = styled.div`
  ${tw`
    bg-slate-800
    flex
    flex-col
    flex-grow
    gap-y-2
    rounded-lg
    lg:rounded-none
    p-3
    text-slate-200
  `}
`;

export const MethodActionContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    gap-x-2
  `}

  .field-box {
    ${tw`
      flex
      flex-grow
      gap-x-[1px]
    `}
  }

  .action-button {
    ${tw`
      py-2
      px-3
      bg-blue-700
      text-white
      text-[0.9rem]
      rounded-md
      opacity-70
      hover:opacity-100
      transform
      duration-150
    `}
  }
`;

export const MethodSelectContainer = styled.div`
  ${tw`
    w-[100px]
    flex
    items-center
    justify-between
    py-2
    pl-3
    pr-1
    border
    rounded-l-md
    font-bold
    bg-transparent
    text-sm
    cursor-pointer
    hover:shadow-sm
    hover:shadow-blue-600
    hover:border-blue-600
    transform
    duration-150
  `}

  svg {
    ${tw`
      text-lg
      rotate-90
    `}
  }
`;

export const MethodSelectOptions = styled.div`
  ${tw`
    absolute
    overflow-hidden
    flex
    flex-col
    left-0
    border
    w-full
    rounded-md
    mt-0.5
    bg-slate-800
  `}
`;

export const MethodSelectOption = styled.button`
  ${tw`
    w-full
    py-1
    text-center
    text-sm
    font-semibold
    hover:bg-slate-600
    transform
    duration-150
  `}
`;

export const MethodUrlInput = styled.input`
  ${tw`
    flex-grow
    py-2
    px-2
    rounded-r-md
    outline-none
    bg-transparent
    border
    text-sm
    hover:border-blue-700
    hover:shadow-sm
    hover:shadow-blue-700
    focus:border-blue-700
    focus:shadow-sm
    focus:shadow-blue-700
    `}
`;

export const TestFormTabBox = styled.div`
  ${tw`
    flex
    gap-x-3
    px-1
    mb-2
  `}

  .tab-button {
    ${tw`
      py-1
      border-b-2
      border-orange-600
      text-sm
      opacity-70
      hover:opacity-100
    `}
  }
`;

export const TestFormContainer = styled.div`
  ${tw`
    flex
    flex-col
    border
    border-b-0
    border-slate-600
  `}
`;

export const TestFormHeader = styled.div`
  ${tw`
    flex
    border-b
    border-slate-600
    text-[0.9rem]
    text-slate-400
    py-2
    items-center
  `}

  div {
    ${tw`
      pl-2
    `}
  }

  .header-key {
    ${tw`
      border-r
      border-slate-600
      w-[30%]
    `}
  }

  .header-value {
    ${tw`
      flex-grow
    `}
  }
`;

export const TestFormBody = styled.div`
  ${tw`
    flex
    border-b
    border-slate-600
    text-[0.8rem]
    py-2
    items-center
  `}

  .body-key {
    ${tw`
      border-r
      border-slate-600
      w-[30%]
      pl-2
    `}
  }

  .body-value {
    ${tw`
      flex-grow
      flex
      justify-between
      items-center
      px-2
    `}

    svg {
      ${tw`
        cursor-pointer
        opacity-60
        hover:opacity-100
      `}
    }
  }
`;
