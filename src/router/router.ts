import { createBrowserRouter } from 'react-router-dom';

import { detectionRoutes } from '@router/routes/detection';
import { signInRoutes } from '@router/routes/signIn';

import { homeRoutes, videoRoutes } from './routes';

export const router = createBrowserRouter([
  ...homeRoutes,
  ...videoRoutes,
  ...detectionRoutes,
  ...signInRoutes
]);
