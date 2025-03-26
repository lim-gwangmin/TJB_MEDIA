import { get_point } from '@api';

import { isTokenExpired } from '@utils/tokenManager';

export const PointService = {
  // 포인트 사용이력 조회
  pointList: async (data) => {
    try {
      const response = await get_point(data);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired.result;
    } catch (error) {
      const { response } = error;
      console.error('findPassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
};
