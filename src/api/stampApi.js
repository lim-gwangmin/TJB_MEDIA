import { axiosInstance } from './axiosInstance';

// 사용자 스탬프 목록 조회
export const get_userStamp = () => {
  return axiosInstance.get('/api/stamp/user');
};

// 스탬프 상세조회
export const get_detailStamp = ({ stampCd }) => {
  return axiosInstance.get(`/api/stamp/${stampCd}`);
};
