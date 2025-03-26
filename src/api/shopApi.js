import { axiosInstance } from './axiosInstance';

// 브랜드 목록 조회
export const get_brandList = () => {
  return axiosInstance.get('/api/store/brand');
};

// 물품 목록 조회
export const get_productList = ({ searchBrandCd, pageUnit, pageIndex }) => {
  return axiosInstance.get(
    `/api/store/product?searchBrandCd=${searchBrandCd}&pageUnit=${pageUnit}&pageIndex=${pageIndex}`,
  );
};

// 물품 상세 조회
export const get_productDetail = ({ productCd }) => {
  return axiosInstance.get(`/api/store/product/${productCd}`);
};

// 물품 구매
export const post_purchase = ({ productCd }) => {
  return axiosInstance.post(`/api/store/purchase`, { productCd });
};
