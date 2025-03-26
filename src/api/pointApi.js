import { axiosInstance } from './axiosInstance';

// 포인트 사용 이력 조회
export const get_point = ({ searchDt, searchPointTy, pageUnit, pageIndex }) => {
  return axiosInstance.get(
    `/api/log/point/user?searchPointTy=${searchPointTy}&searchDt=${searchDt}&pageUnit=${pageUnit}&pageIndex=${pageIndex}`,
  );
};
