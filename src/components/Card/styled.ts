import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.base.primary};
  border-radius: ${({ theme }) => theme.radiuses.md}px;
  padding: ${({ theme }) => theme.spacings.x16}px;
  box-sizing: border-box;
`;

export const Styled = {
  Card
};
