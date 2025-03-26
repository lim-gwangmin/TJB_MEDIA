import { axiosInstance } from './axiosInstance';

// 퀴즈 카테고리 목록 조회
export const get_quizCategory = ({ searchLankTy, searchWeek, PageUnit, PageIndex }) => {
  return axiosInstance.get('/api/game/quiz/category', {
    searchLankTy,
    searchWeek,
    PageUnit,
    PageIndex,
  });
};
