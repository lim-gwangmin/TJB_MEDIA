import { get_agreement, get_agreementCategory, get_agreementDetail } from '@api';

import { isTokenExpired } from '@utils/tokenManager';

export const AgreementService = {
  agreement: async (data) => {
    try {
      const response = await get_agreement(data);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired.result.data;
    } catch (error) {
      const { response } = error;
      console.error('findPassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 약관 카테고리 목록 조회
  agreementCategory: async () => {
    try {
      const response = await get_agreementCategory();
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired.result.data;
    } catch (error) {
      const { response } = error;
      console.error('findPassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 약관 상세조회
  //get_agreement
  agreementDetail: async (data) => {
    try {
      const response = await get_agreementDetail(data);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired.result.data;
    } catch (error) {
      const { response } = error;
      console.error('findPassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
};
