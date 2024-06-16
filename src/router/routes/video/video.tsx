import React from 'react';

import { type RouteObject } from 'react-router-dom';

import { ProtectedRoute } from '@component/ProtectedRoute';
import { Video } from '@pages/Camera';

import { VIDEO_ROUTE } from './constants';

export const videoRoutes: RouteObject[] = [
  {
    path: VIDEO_ROUTE.video.path,
    element: (
        <ProtectedRoute>
          <Video />
        </ProtectedRoute>
    )
  }
];
