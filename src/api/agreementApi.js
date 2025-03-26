import { axiosInstance } from './axiosInstance';

// 약관 관리
export const get_agreement = () => {
  return axiosInstance.get('/api/setting/agreement');
};

// 약관 카테고리 목록 조회
export const get_agreementCategory = () => {
  return axiosInstance.get('/api/setting/agreement/category');
};

// 약관 상세조회
export const get_agreementDetail = ({ agreementCd }) => {
  return axiosInstance.get(`/api/setting/agreement/${agreementCd}`);
};
