import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Flex } from '@uiKit';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  width: 100%;
  gap: ${({ theme }) => theme.spacings.x24}px;
  padding: var(--layout-padding-side);
  box-sizing: border-box; 
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  max-width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radiuses.df}px;
  box-sizing: border-box;
`;

const CardContentWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.spacings.x16}px;
  box-sizing: border-box;
`;

const CardInfoWrapper = styled(Flex)`
  box-sizing: border-box;
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

export const Styled = {
  List,
  CardImage,
  CardContentWrapper,
  CardInfoWrapper,
  CardLink
};
