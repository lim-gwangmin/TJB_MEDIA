import { atom } from 'recoil';

// 퀴즈 리스트
export const quizListState = atom({
  key: 'quizListState',
  default: [],
});

// 퀴즈 결과 리스트
export const quizResultState = atom({
  key: 'quizResultState',
  default: [],
});
