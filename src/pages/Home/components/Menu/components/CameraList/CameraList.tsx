import React, { type FC, type PropsWithChildren } from 'react';

import { Styled } from '@pages/Home/components/Menu/components/CameraList/styled';

export const CameraList: FC<PropsWithChildren> = ({ children, ...props }) => {
  return <Styled.List {...props}>{children}</Styled.List>;
};
