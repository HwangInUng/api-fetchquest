import tw from "twin.macro";
import styled from "styled-components";

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
