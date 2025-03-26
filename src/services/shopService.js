import { get_brandList, get_productDetail, get_productList, post_purchase } from '@api';

import { isTokenExpired } from '@utils/tokenManager';

export const ShopService = {
  // 브랜드 목록 조회
  brandList: async (data) => {
    try {
      const response = await get_brandList(data);

      // 에러 처리
      const expired = isTokenExpired(response);

      return expired.data.result;
    } catch (error) {
      const { response } = error;
      console.error('quizCategory failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 물품 목록 조회
  productList: async (data) => {
    try {
      const response = await get_productList(data);

      // 에러 처리
      const expired = isTokenExpired(response);

      return expired.data.result;
    } catch (error) {
      const { response } = error;
      console.error('quizCategory failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 물품 상세 조회
  productDetail: async (data) => {
    try {
      const response = await get_productDetail(data);

      // 에러 처리
      const expired = isTokenExpired(response);

      return expired.data.result;
    } catch (error) {
      const { response } = error;
      console.error('quizCategory failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 물품 구매
  purchase: async (data) => {
    try {
      const response = await post_purchase(data);

      // 에러 처리
      const expired = isTokenExpired(response);

      return expired.data;
    } catch (error) {
      const { response } = error;
      console.error('quizCategory failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
};
