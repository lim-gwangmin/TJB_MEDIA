import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { QuizService } from '@services/QuizService';

import { QuizResultTemplate } from '@components/templates/Quiz';

import { useLoading } from '@hooks/useLoading';

import NotFound from '@pages/error/NotFound';

export default function QuizResult({}) {
  const { state } = useLocation(); // route state 값에 저장한 정답 리스트
  const [resultData, setResultData] = useState([]); // 퀴즈 결과
  const answerList = state; // 제출한 정답 리스트
  const [isLoading, setQuizSolve] = useLoading(QuizService.quizSolve);

  if (!answerList?.length) return <NotFound />; // 예외상황일 경우 예외 페이지로 이동

  useEffect(() => {
    onHandleResultSolveList();
  }, [answerList]);

  // 결과 데이터
  const onHandleResultSolveList = async () => {
    const response = await setQuizSolve(answerList);

    setResultData(response.data);
  };

  return <QuizResultTemplate resultData={resultData} isLoading={isLoading} />;
}

const dummy_data = [
  {
    answer: 'X',
    authCd: null,
    endDt: null,
    firstIndex: 1,
    lastIndex: 1,
    pageIndex: 1,
    pageSize: 10,
    pageUnit: 10,
    quiz: '수리비는 9500만원이다?',
    quizCd: 'quiz-000009',
    quizSolveCd: 'solve-000316',
    recordCountPerPage: 10,
    rightAnswer: 'o',
    rightFl: 0,
    schoolCd: null,
    schoolNm: null,
    searchKeyword: null,
    searchKeywordFrom: '',
    searchKeywordTo: '',
    searchOrder: 'latest',
    searchType: null,
    solveList: null,
    solveUserCd: 'user-000002',
    solveUserId: 'uhw109',
    startDt: null,
    updateId: null,
    updateNm: null,
    userAgeCd: null,
    userCd: null,
    userId: null,
    userNm: null,
  },
  {
    answer: '2',
    authCd: null,
    endDt: null,
    firstIndex: 1,
    lastIndex: 1,
    pageIndex: 1,
    pageSize: 10,
    pageUnit: 10,
    quiz: '"부적절한 교제 알렸지만 묵살"..교육청 해명에 \'분통\'',
    quizCd: 'quiz-000008',
    quizSolveCd: 'solve-000317',
    recordCountPerPage: 10,
    rightAnswer: '4',
    rightFl: 0,
    schoolCd: null,
    schoolNm: null,
    searchKeyword: null,
    searchKeywordFrom: '',
    searchKeywordTo: '',
    searchOrder: 'latest',
    searchType: null,
    solveList: null,
    solveUserCd: 'user-000002',
    solveUserId: 'uhw109',
    startDt: null,
    updateId: null,
    updateNm: null,
    userAgeCd: null,
    userCd: null,
    userId: null,
    userNm: null,
  },
  {
    answer: '1',
    authCd: null,
    endDt: null,
    firstIndex: 1,
    lastIndex: 1,
    pageIndex: 1,
    pageSize: 10,
    pageUnit: 10,
    quiz: '부여 단독주택서 화재..거주자 2명 대피2',
    quizCd: 'quiz-000012',
    quizSolveCd: 'solve-000318',
    recordCountPerPage: 10,
    rightAnswer: '1',
    rightFl: 1,
    schoolCd: null,
    schoolNm: null,
    searchKeyword: null,
    searchKeywordFrom: '',
    searchKeywordTo: '',
    searchOrder: 'latest',
    searchType: null,
    solveList: null,
    solveUserCd: 'user-000002',
    solveUserId: 'uhw109',
    startDt: null,
    updateId: null,
    updateNm: null,
    userAgeCd: null,
    userCd: null,
    userId: null,
    userNm: null,
  },
];
