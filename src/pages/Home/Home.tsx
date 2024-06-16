import React, { type FC } from 'react';

import { Header } from '@component/Header';
import { useAPI } from '@hooks/useAPI';
import { useInterval } from '@hooks/useInterval';
import { Layout } from '@layouts/Layout';
import { getAllFiles } from '@lib/api/rest/files';
import { type GetAllFilesRequest, type GetAllFilesResponse } from '@lib/api/rest/files/getAllFiles/types';
import { VideoList } from '@pages/Home/components';

import 'react-spring-bottom-sheet/dist/style.css';

export const Home: FC = () => {
  const { data, runRequest } = useAPI<
  GetAllFilesRequest,
  GetAllFilesResponse
  >({
    apiService: getAllFiles as any
  }, { runOnMount: true });

  useInterval(() => {
    runRequest();
  }, 5 * 60 * 1000);

  return (
    <Layout header={<Header />}>
      <VideoList list={data?.videos.map(({ id }, index) => ({ url: '', authorAvatar: '', authorName: '', name: 'Hello', id })) ?? []} />
    </Layout>
  );
};
