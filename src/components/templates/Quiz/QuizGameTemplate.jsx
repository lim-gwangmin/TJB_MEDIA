import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { QuizService } from '@services/QuizService';
import { useRecoilValue } from 'recoil';

import { Box } from '@components/atoms/Box';
import { Button } from '@components/atoms/Button';
import { Main } from '@components/atoms/Layout';
import { ButtonsContainer } from '@components/atoms/Layout';
import { SubmitLoader } from '@components/atoms/Loader';
import { CaptionButton, Category, QuizCount } from '@components/atoms/Quiz';
import { HintButton } from '@components/atoms/Quiz';
import { SectionContainer } from '@components/molecules/Layout';
import { QuizTimer } from '@components/molecules/Quiz';
import { Header } from '@components/organisms/Header';
import { NonQuiz } from '@components/organisms/Quiz';
import { OXQuizView, SingleChoiceQuizView, SubjectiveQuizView } from '@components/organisms/Quiz';
import { ResultQuizModal } from '@components/organisms/Quiz';
import { ContentModal } from '@components/organisms/Quiz';

import useConfirmNavigation from '@hooks/useConfirmNavigation';
import { useLoading } from '@hooks/useLoading';
import { QuizProvider } from '@hooks/useQuizContext';
import useQuizController from '@hooks/useQuizController';
import useQuizPageController from '@hooks/useQuizPageController';

import NotFound from '@pages/error/NotFound';

import { quizListState } from '@states/quizState';

import { colors } from '@styles/theme';

import { StyledQuizText } from './Quiz.styled';

const MAIN_QUIZ_COLOR = colors.secondary[100];

// 퀴즈 유형 컴포넌트 구분
const RenderQuizComponent = (props) => {
  const components = {
    ox: OXQuizView,
    multiple: SingleChoiceQuizView,
    short: SubjectiveQuizView,
  };

  const Component = components[props?.quizTy];

  if (!Component) {
    return <NotFound />; // 또는 적절한 기본값 또는 에러 처리를 할 수 있습니다.
  }

  return <Component {...props} />;
};

export default function QuizGameTemplate({}) {
  const [resultQuizData, setResultQuizData] = useState({
    isOpen: false,
    insertPoint: 0,
    solveList: [],
  });
  const { quizResults } = QuizService; // 퀴즈 결과 API
  const [isLoading, loadQuizResult] = useLoading(quizResults);
  const { timeOut = 30, quizList = [] } = useRecoilValue(quizListState); // 퀴즈 리스트
  const { page = 1 } = useParams(); // 현재 보여줄 퀴즈
  const totalPage = quizList?.length; // 총 문제 갯수
  const thisQuizData = quizList[page - 1]; // 퀴즈 데이터

  useConfirmNavigation(); // 뒤로가기 제어
  if (page === undefined || !thisQuizData) return <NotFound />; // 유효하지 않는 접근

  const QuizComponent = RenderQuizComponent(thisQuizData); // 퀴즈 컴포넌트

  const {
    timeLeft,
    gaugeWidth,
    timeEnded,
    endedYouTube,
    handleTimeUp,
    isCaptionModal,
    handleEndedYouTube,
    answerList,
    handleChandeAnswer,
    handleCaptionModal,
    isCompleted,
    handleComplated,
    initialTime,
    handleReset,
  } = useQuizController({ initialTime: timeOut, quizList: thisQuizData });

  // 퀴즈 페이지 컨트롤러
  const { onHandleNextPage, submitPage } = useQuizPageController(totalPage, handleReset);

  // 퀴즈 결과 데이터 요청 함수
  const onHandleResultAnswerList = async () => {
    const response = await loadQuizResult(answerList);
    const { insertPoint, solveList } = response;
    setResultQuizData({
      isOpen: true,
      insertPoint,
      solveList,
    });
  };

  return (
    <>
      {quizList.length ? (
        <>
          <QuizProvider
            value={{
              timeLeft,
              gaugeWidth,
              timeEnded,
              endedYouTube,
              isCaptionModal,
              handleTimeUp,
              handleCaptionModal,
              handleEndedYouTube,
              answerList,
              handleChandeAnswer,
              isCompleted,
              handleComplated,
              initialTime,
              handleReset,
              thisQuizData,
            }}
          >
            <Header bgColor={MAIN_QUIZ_COLOR} />
            <Main bg={MAIN_QUIZ_COLOR}>
              <SectionContainer>
                <QuizCount currentPage={page} totalPage={totalPage} />
                <QuizTimer />
                <Box paddingTop={20} paddingBt={30} style={{ marginTop: '1rem' }}>
                  <Category>{thisQuizData.quizCategoryNm}</Category>
                  <StyledQuizText>{thisQuizData.quiz}</StyledQuizText>
                  {QuizComponent}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginTop: '2.5rem',
                    }}
                  >
                    <HintButton />
                    <CaptionButton onClick={handleCaptionModal} />
                  </div>
                </Box>
                <ButtonsContainer>
                  <Button
                    disabled={!(isCompleted || timeEnded)}
                    onClick={submitPage ? onHandleResultAnswerList : onHandleNextPage}
                  >
                    {submitPage ? '제출' : 'NEXT'}
                  </Button>
                </ButtonsContainer>
              </SectionContainer>
              {/* 자막 모달 */}
              <ContentModal />
            </Main>
          </QuizProvider>
          <ResultQuizModal
            isOpen={resultQuizData.isOpen}
            insertPoint={resultQuizData.insertPoint}
            solveList={resultQuizData.solveList}
          />
          {isLoading && <SubmitLoader />}
        </>
      ) : (
        <NonQuiz />
      )}
    </>
  );
}
