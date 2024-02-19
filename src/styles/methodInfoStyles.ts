import tw from 'twin.macro';
import { styled } from 'styled-components';

export const MethodInfoContainer = styled.div`
  ${tw`
    w-[65%]
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
    pt-10
    pb-2
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

export const MethodContentBox = styled.div`
  ${tw`
    flex
    gap-x-2
  `}
`;

export const MethodContentWrapper = styled.div`
  ${tw`
    flex
    flex-col
    gap-y-2
    w-1/2
  `}
  .title-box {
    ${tw`
      flex
      justify-between
      items-center
      border-b
      border-slate-300
      py-1
    `}
  }

  .title {
    ${tw`
      text-[0.9rem]
      text-blue-700
    `}
  }
  .detail {
    ${tw`
      bg-slate-100
    `}
  }
  .sample {
    ${tw`
      bg-blue-950
    `}
  }

  .content-box {
    ${tw`
      h-[400px]
      space-y-2
      p-3
      border
      rounded-xl
      flex-grow
      overflow-y-scroll
    `}
  }

  .button-box {
    ${tw`
      flex
      flex-grow
      justify-end
      gap-x-1
    `}
  }
`;

export const DetailResponseButton = styled.button`
  ${tw`
    bg-slate-200
    px-2
    py-1
    text-[0.7rem]
    rounded-md
    text-green-600
    font-semibold
    border
    border-green-600
    opacity-70 
    hover:opacity-100
    transform
    duration-150
  `}
`;

export const DetailTitle = styled.div`
  ${tw`
    pl-1
    text-[0.9rem]
    font-semibold
    text-blue-950
    cursor-pointer
    rounded-md
    transform
    duration-200
    hover:bg-slate-200
  `}
`;

export const FieldInfoBox = styled.div`
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

  .field-name {
    ${tw`
      w-[30%]
      text-[1rem]
    `}
  }
`;

export const AttributeBox = styled.div`
  ${tw`
    flex-grow
    border-b
    pb-2
    border-slate-300
  `}

  .attribute-desc {
    ${tw`
      text-slate-500
      leading-none
    `}
  }
`;

export const AttributeTypeBox = styled.div`
  ${tw`
    flex
    items-center
    gap-x-[2px]
    leading-4
  `}
`;

export const AttributeType = styled.div<{ $required?: boolean }>`
  ${tw`
    bg-slate-300
    rounded-sm
    px-1
    h-[1rem]
    text-[0.7rem]
  `}

  ${({ $required }) => ($required ? tw`text-red-600 font-semibold` : null)}
`;

export const ArrayLabel = styled.div<{ $isArray: boolean }>`
  ${tw`
    mb-1
    pl-4
    text-sm
    text-orange-300
  `}

  ${({ $isArray }) => ($isArray ? null : 'display: none')};
`;

export const SampleTitle = styled.div`
  ${tw`
    pl-1
    text-slate-100
    text-[0.9rem]
    cursor-pointer
    rounded-md
    transform
    duration-200
    hover:bg-slate-700
  `}
`;

export const SamplePre = styled.pre`
  ${tw`
    pl-4
    text-slate-100
    text-[0.8rem]
  `}
`;
