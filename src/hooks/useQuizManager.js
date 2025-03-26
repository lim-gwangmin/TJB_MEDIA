import { useEffect } from 'react';

import axios from 'axios';
import { useRecoilState } from 'recoil';

import { quizListState } from './recoil/atoms';

export function useFetchQuizData() {
  const [quizList, setQuizList] = useRecoilState(quizListState);

  useEffect(() => {
    // 퀴즈 데이터를 서버에서 받아오는 함수
    const fetchQuizData = async () => {
      try {
        const response = await axios.get('/api/quiz'); // API 요청 (예: /api/quiz)
        setQuizList(response.data); // 퀴즈 데이터를 Recoil 상태에 저장
      } catch (error) {
        console.error('Error fetching quiz data', error);
      }
    };

    fetchQuizData();
  }, [setQuizList]);

  return quizList;
}
