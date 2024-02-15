import tw from "twin.macro";
import { styled } from "styled-components";

export const MethodInfoContainer = styled.div`
  ${tw`
    w-[60%]
    px-2
  `}

  .category-name {
    ${tw`
      text-[1.5rem]
      text-blue-950
      pb-10
    `}
  }
`;

export const MethodInfoBox = styled.div<{ $typeColor: string }>`
  ${tw`
    flex
    flex-col
    gap-y-4
    py-2
    mb-2
  `}

  .method-namebox {
    ${tw`
      flex
      items-center
      gap-x-2
    `}
    .name {
      ${tw`
      text-[1.3rem]
      text-slate-500
      `}
    }
    .type {
      ${tw`
        flex
        justify-center
        rounded-md
        text-white
        px-2
        h-[20px]
        leading-4
      `}
      ${({ $typeColor }) => `background-color: ${$typeColor}`}
    }
  }
`;

export const MethodDescriptionBox = styled.div`
  ${tw`
    bg-slate-800
    px-4
    py-2
    rounded-xl
  `}

  .list {
    ${tw`
      list-inside
      list-disc
      text-[0.9rem]
      text-slate-200
      space-y-1
    `}
  }
`;

export const MethodSampleBox = styled.div`
  ${tw`
    flex
    gap-x-2
  `}

  .content-wrapper {
    ${tw`
      flex
      flex-col
      gap-y-2
      w-1/2
    `}
  }

  .title {
    ${tw`
      border-b
      border-slate-300
      py-1
      text-[0.9rem]
    `}
  }

  .content-box {
    ${tw`
      p-3
      border
      bg-slate-100
      rounded-xl
      flex-grow
      min-h-[400px]
      max-h-[650px]
      overflow-y-scroll
    `}
  }
`;

export const ParamTitle = styled.div`
  ${tw`
    flex items-center
    text-[1rem]
    font-semibold
    text-blue-950
    mb-2
    pl-1
    cursor-pointer
    gap-x-2
    rounded-md
    transform
    duration-200
    hover:bg-slate-200
  `}
`;

export const ParamInfoBox = styled.div`
  ${tw`
    flex
    justify-between
    border-l
    border-blue-400
    items-start
    text-[0.9rem]
    ml-4
    mb-2
    gap-x-1
  `}

  .param-name {
    ${tw`
      w-[30%]
      text-[1rem]
    `}
  }
`;

export const PropertyBox = styled.div`
  ${tw`
    flex-grow
    border-b
    pb-2
    border-slate-300
  `}

  .property-desc {
    ${tw`
      text-slate-500
      leading-none
    `}
  }
`;

export const PropertyTypeBox = styled.div`
  ${tw`
    flex
    items-center
    gap-x-[2px]
    leading-4
  `}
`;

export const PropertyType = styled.div<{
  $required?: boolean;
}>`
  ${tw`
    bg-slate-300
    rounded-sm
    px-1
    h-[20px]
    text-[0.8rem]
  `}

  ${({ $required }) => ($required ? tw`text-red-600 font-semibold` : null)}
`;
