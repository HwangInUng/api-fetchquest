import tw from 'twin.macro';
import styled from 'styled-components';

export const LoadingBox = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    h-full
    w-full
  `}

  img {
    width: 100px;
    height: 100px;
  }
`;

export const ContentContainer = styled.div`
  ${tw`
    flex
    flex-col
    h-full
    flex-grow
    pl-2
    overflow-y-scroll
  `}
`;

export const CopyButton = styled.button`
  ${tw`
    absolute
    top-0
    right-0
    text-slate-300
    text-[0.9rem]
    py-0.5
    px-2
    opacity-70
    rounded-lg
    hover:bg-slate-950
    hover:opacity-100
    transform
    duration-150
  `}
`;
