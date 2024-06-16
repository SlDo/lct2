// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllFilesRequest {}

export interface GetAllFilesResponse {
  count: number
  videos: Array<{
    id: number
    video_file_path: string
    user_id: number
  }>
}
