import React, { type FC } from 'react';

import { useTheme } from 'styled-components';

import { Avatar, Heading, Spacer, Text } from '@uiKit';

import { AvatarSizes } from '@uiKit/Avatar/types';
import { HeadingSize } from '@uiKit/Heading/types';

import { Card } from '@component/Card';
import { Styled } from '@pages/Home/components/VideoList/styled';
import { type VideoListProps } from '@pages/Home/components/VideoList/types';
import { ROUTES } from '@router/routes/constants';

export const VideoList: FC<VideoListProps> = ({ list }) => {
  const theme = useTheme();

  return (
    <Styled.List>
      {list.map(({ name, id }, index) => (
        <Styled.CardLink key={index} to={ROUTES.video.path.replace(':id', String(id))}>
          <Card>
            <Styled.CardImage src='https://images.unsplash.com/photo-1570288685280-7802a8f8c4fa?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <Spacer space={theme.spacings.x24} />
            <Styled.CardContentWrapper>
              <Heading type={3} size={HeadingSize.SM}>{name}</Heading>
              <Spacer space={theme.spacings.x24} />
              <Styled.CardInfoWrapper gap={theme.spacings.x12}>
                <Avatar size={AvatarSizes.SMALL} src='https://images.unsplash.com/photo-1614777735430-7b46df56b404?q=80&w=3632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                <Text color={theme.colors.base.grey['300']}>Hello</Text>
              </Styled.CardInfoWrapper>
            </Styled.CardContentWrapper>
          </Card>
        </Styled.CardLink>
      ))}
    </Styled.List>
  );
};
