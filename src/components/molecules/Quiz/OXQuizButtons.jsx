import React, { useEffect, useState } from 'react';

import icon_O from '@assets/icons/icon_btn_O.svg';
import icon_X from '@assets/icons/icon_btn_X.svg';

import { OXQuizButton } from '@components/atoms/Quiz';

import { useQuizContext } from '@hooks/useQuizContext';

import { StyledOXQuizButtonWrapper } from './OXQuizButtons.styled';

// isSelected, isCorrect
export default function OXQuizButtons() {
  const { timeEnded, thisQuizData, handleChandeAnswer } = useQuizContext();
  const { quiz, quizCd } = thisQuizData;
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택한 답

  useEffect(() => {
    settingAnswerData();
  }, [quizCd]);

  // 정답 제출 전 출제 문제 세팅
  const settingAnswerData = () => {
    handleChandeAnswer({ quiz, quizCd, answer: null });
  };
  // 정답 제출
  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
    handleChandeAnswer({ quiz, quizCd, answer });
  };

  return (
    <StyledOXQuizButtonWrapper>
      <OXQuizButton
        answerType={true}
        isSelected={selectedAnswer === 'O'}
        handleSelectAnswer={() => !timeEnded && handleSelectAnswer('O')}
        disabled={timeEnded}
      >
        <img src={icon_O} alt="O" />
      </OXQuizButton>
      <OXQuizButton
        answerType={false}
        isSelected={selectedAnswer === 'X'}
        handleSelectAnswer={() => !timeEnded && handleSelectAnswer('X')}
        disabled={timeEnded}
      >
        <img src={icon_X} alt="X" />
      </OXQuizButton>
    </StyledOXQuizButtonWrapper>
  );
}
