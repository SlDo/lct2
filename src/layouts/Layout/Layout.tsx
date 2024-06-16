import React, { type FC } from 'react';

import { COLORS } from '@lib/theme/constants';

import { StyledLayout } from './styled';
import { type LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({
  children,
  backgroundColor = COLORS.BASE_COLORS.BACKGROUND,
  backgroundImage,
  header,
  footer
}) => (
  <StyledLayout.Wrapper
    $backgroundColor={backgroundColor}
    $backgroundImage={backgroundImage}>
    <StyledLayout.Container>
      {header && header}
      {children}
      {footer && footer}
    </StyledLayout.Container>
  </StyledLayout.Wrapper>
);
