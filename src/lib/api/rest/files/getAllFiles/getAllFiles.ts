import { request } from '@http';
import { type AxiosResponse } from 'axios';

import { type APIFunctionOptions } from '@lib/api/types';
import { HTTPMethods } from '@lib/http/constants';

import { type GetAllFilesRequest, type GetAllFilesResponse } from './types';

export const getAllFiles = async (
  data: GetAllFilesRequest,
  options?: APIFunctionOptions
): Promise<AxiosResponse<GetAllFilesResponse>> => {
  const { baseUrl = '', headers } = options ?? {};

  return await request({
    url: '/api/files/allfiles',
    baseUrl,
    method: HTTPMethods.GET,
    headers,
    data
  });
};
