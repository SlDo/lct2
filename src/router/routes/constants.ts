import { DETECTION_ROUTE } from '@router/routes/detection/constants';
import { HOME_ROUTE } from '@router/routes/home/constants';
import { SIGNIN_ROUTE } from '@router/routes/signIn/constants';
import { VIDEO_ROUTE } from '@router/routes/video/constants';

export const ROUTES = {
  ...HOME_ROUTE,
  ...VIDEO_ROUTE,
  ...DETECTION_ROUTE,
  ...SIGNIN_ROUTE
};
