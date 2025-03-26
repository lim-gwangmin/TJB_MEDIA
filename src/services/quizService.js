import {
  get_quizAccuracy,
  get_quizCategory,
  get_quizList,
  post_quiz_solve,
  post_quizResults,
} from '@api';

import { isTokenExpired } from '@utils/tokenManager';

export const QuizService = {
  // 퀴즈 카테고리 리스트 받는 메소드
  quizCategory: async () => {
    try {
      const response = await get_quizCategory();

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
  // 퀴즈 리스트 받는 메소드
  quizList: async (quizCategoryCd) => {
    try {
      const response = await get_quizList(quizCategoryCd);

      // 에러 처리
      const expired = isTokenExpired(response);
      const { data } = expired;
      return data.result;
    } catch (error) {
      const { response } = error;
      isTokenExpired(response.data);
      console.error('quizList failed:', error);
      throw error;
    }
  },
  // 퀴즈 정답 제출
  quizResults: async (answerList) => {
    try {
      const response = await post_quizResults(answerList);

      // 에러 처리
      const expired = isTokenExpired(response);
      const { data } = expired;
      return data.result;
    } catch (error) {
      const { response } = error;
      isTokenExpired(response.data);
      console.error('quizList failed:', error);
      throw error;
    }
  },
  // 퀴즈 결과
  quizSolve: async (answerList) => {
    try {
      const response = await post_quiz_solve(answerList);

      // 에러 처리
      const expired = isTokenExpired(response);
      const { data } = expired;
      return data.result;
    } catch (error) {
      const { response } = error;
      isTokenExpired(response.data);
      console.error('quizList failed:', error);
      throw error;
    }
  },
};
