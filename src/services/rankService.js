import { get_weekRank } from '@api';

import { isTokenExpired } from '@utils/tokenManager';

export const RankService = {
  // 주간 랭킹 조회
  weekRank: async (data) => {
    try {
      const response = await get_weekRank(data);

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
