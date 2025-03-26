import React from 'react';

import { Button } from '@components/atoms/Button';
import { Main } from '@components/atoms/Layout';
import { ButtonsContainer } from '@components/atoms/Layout';
import { CommentLoader, SubmitLoader } from '@components/atoms/Loader';
import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';
import { ResultCount, ResultSolveBox } from '@components/molecules/Quiz';
import { Header } from '@components/organisms/Header';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { colors } from '@styles/theme';

import { calculatePercentage } from '@utils/calculate';

const MAIN_QUIZ_BG_COLOR = colors.secondary[300];
const SECTION_BG_COLOR = colors.tertiary[50];

export default function QuizResultTemplate({ resultData = [], isLoading = false }) {
  const { goToHome } = useCustomNavigate();
  const totalCount = resultData.length; // 총 문제 갯수
  const correctCount = resultData.filter((data) => data.rightFl === 1).length; // 정답
  const incorrectCount = resultData.filter((data) => data.rightFl === 0).length; // 오답
  const percentage = calculatePercentage(correctCount, totalCount); // 정답률

  return (
    <>
      <Header bgColor={MAIN_QUIZ_BG_COLOR} />
      <Main bg={SECTION_BG_COLOR}>
        <SectionContainer bg={MAIN_QUIZ_BG_COLOR}>
          {/* 결과 섹션 */}
          <ResultCount
            percentage={percentage}
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
        </SectionContainer>
        <SectionContainer>
          <Title size={20} style={{ marginBottom: '2rem' }}>
            결과 확인하기
            <span
              style={{
                fontSize: '1.4rem',
                color: '#707070',
                fontWeight: 400,
                paddingLeft: '0.5rem',
              }}
            >
              {totalCount}문제
            </span>
          </Title>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '15% 0' }}>
              <CommentLoader />
            </div>
          ) : (
            <ResultSolveBox resultData={resultData} />
          )}
          <ButtonsContainer>
            <Button onClick={goToHome}>돌아가기</Button>
          </ButtonsContainer>
        </SectionContainer>
      </Main>
    </>
  );
}
