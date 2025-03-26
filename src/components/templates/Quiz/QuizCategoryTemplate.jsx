import React, { useEffect, useRef, useState } from 'react';

import { QuizService } from '@services/quizService';
import { useSetRecoilState } from 'recoil';

import { SubmitLoader } from '@components/atoms/Loader';
import { QuizCategory } from '@components/organisms/Quiz';

import useCustomNavigate from '@hooks/useCustomNavigate';
import { useLoading } from '@hooks/useLoading';

import { navLinks } from '@routes/navLinks';

import { quizListState } from '@states/quizState';

import { HexGridContainer } from './Quiz.styled';

export default function QuizCategoryTemplate({}) {
  const contentRef = useRef(null);
  const { goToPage } = useCustomNavigate();
  const [quizCategoryList, setQuizCategoryList] = useState([]);
  const setQuizListState = useSetRecoilState(quizListState);
  const { quizCategory, quizList } = QuizService;
  const [isQuizListLoading, setFetchQuizList] = useLoading(quizList);

  useEffect(() => {
    const fetchData = async () => {
      await onHandleQuizCategory();
      // 페이지 렌더링 후 중앙으로 스크롤
      scrollToCenter(contentRef);
    };

    fetchData();
  }, []);

  // 퀴즈 카테고리 받아오는 함수
  const onHandleQuizCategory = async () => {
    const response = await quizCategory();
    setQuizCategoryList(response);
  };

  // 퀴즈 문제 받아오는 함수
  const onHandleQuizList = async (categoryCd) => {
    if (isQuizListLoading) return;

    const response = await setFetchQuizList(categoryCd);

    //  퀴즈가 없을때 처리
    if (!response.quizList.length) {
      alert('퀴즈가 없습니다.');
      return;
    }

    setQuizListState(response);

    goToPage(navLinks.QUIZ_GAME(1).path);
  };

  const scrollToCenter = (ref) => {
    if (ref?.current) {
      const containerWidth = 1160;
      const containerHeight = 950;
      const element = ref.current; // 스크롤할 요소
      const viewportWidth = containerWidth - window.innerWidth; // 뷰포트 높이
      const viewportHeight = containerHeight - window.innerHeight; // 뷰포트 높이

      // 스크롤 위치 조정
      element.scrollTo({
        top: viewportHeight / 6, // 현재 스크롤 위치를 더해줍니다.
        left: viewportWidth / 4,
        behavior: 'smooth', // 부드러운 스크롤
      });
    }
  };

  return (
    <>
      <HexGridContainer ref={contentRef}>
        <QuizCategory quizCategoryList={quizCategoryList} onHandleQuizList={onHandleQuizList} />
      </HexGridContainer>
      {isQuizListLoading && <SubmitLoader />}
    </>
  );
}
