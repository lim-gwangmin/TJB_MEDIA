import { get_detailStamp, get_userStamp } from '@api';

import { isTokenExpired } from '@utils/tokenManager';

export const Stamp = {
  // 사용자 스탬프 목록 조회
  userStamp: async () => {
    try {
      const response = await get_userStamp();

      // 에러 처리
      const expired = isTokenExpired(response);

      const { result } = expired.data;
      return result.data;
    } catch (error) {
      const { response } = error;
      console.error('quizCategory failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 스탬프 상세조회
  detailStamp: async (stampCd) => {
    try {
      const response = await get_detailStamp(stampCd);

      // 에러 처리
      const expired = isTokenExpired(response);

      const { result } = expired.data;
      return result.data;
    } catch (error) {
      const { response } = error;
      console.error('quizCategory failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
};
