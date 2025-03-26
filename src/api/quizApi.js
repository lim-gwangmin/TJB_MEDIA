import { axiosInstance } from './axiosInstance';

// 퀴즈 카테고리 목록 조회
export const get_quizCategory = () => {
  return axiosInstance.get('/api/game/quiz/category');
};
// 퀴즈 문제 조회
export const get_quizList = (quizCategoryCd) => {
  return axiosInstance.get(`/api/game/quiz/user?quizCategoryCd=${quizCategoryCd}`);
};

// 퀴즈 문제 조회
export const get_quizAccuracy = ({ userCd }) => {
  return axiosInstance.get(`/api/game/quiz/answer/${userCd}`);
};

// 퀴즈 결과 제출
export const post_quizResults = (answerList) => {
  console.log(answerList, 'answerList');
  const encodeAnswerList = encodeURIComponent(JSON.stringify(answerList));
  return axiosInstance.post('/api/game/quiz/grading', { answerList: encodeAnswerList });
};

// 퀴즈 결과 조회
export const post_quiz_solve = (answerList) => {
  const encodeAnswerList = encodeURIComponent(JSON.stringify(answerList));
  return axiosInstance.post('/api/log/solve/user', { solveList: encodeAnswerList });
};
