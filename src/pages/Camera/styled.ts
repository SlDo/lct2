import styled from 'styled-components';

import { Flex, Image } from '@uiKit';

const Container = styled.div`
  position: relative;
  height: calc(100vh - 96px);
  width: 100%;
`;

const Head = styled(Flex)`
  height: 50px;
`;

const FragmentImage = styled(Image)`
  height: 100%;
  width: 500px;
  object-fit: cover;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 250px;
  }
`;

const Video = styled.iframe`
  height: 60vh;
  object-fit: cover;
`;

export const Styled = {
  Container,
  Head,
  FragmentImage,
  Video
};
