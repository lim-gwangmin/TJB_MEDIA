import React, { useEffect, useState } from 'react';

import { AnswerInput } from '@components/atoms/Quiz';
import { Text } from '@components/atoms/Text';

import { useQuizContext } from '@hooks/useQuizContext';

import { StyledAnswerInputWrapper } from './SubjectiveQuiz.styled';

export default function SubjectiveQuiz({ answerLetterNo = 1 }) {
  const { timeEnded, thisQuizData, handleChandeAnswer } = useQuizContext();
  const { quiz, quizCd } = thisQuizData;
  const [inputs, setInputs] = useState('');

  useEffect(() => {
    settingAnswerData();
  }, [quizCd]);

  // 정답 제출 전 출제 문제 세팅
  const settingAnswerData = () => {
    handleChandeAnswer({ quiz, quizCd, answer: null });
  };

  // 정답 제출
  const handleSaveAnswer = () => {
    handleChandeAnswer({ quiz, quizCd, answer: inputs });
  };

  // 입력값 변경 처리
  const handleInput = (e) => {
    let newValue = e.target.value;

    // 특수문자 및 공백을 제거하는 정규식 적용
    newValue = newValue.replace(/[^\wㄱ-ㅎㅏ-ㅣ가-힣]/g, '');

    // answerLetterNo 길이보다 긴 입력은 잘라냄
    if (newValue.length > answerLetterNo) {
      newValue = newValue.slice(0, answerLetterNo);
    }

    const updatedInputs = newValue.trim();

    setInputs(updatedInputs);
  };
  return (
    <StyledAnswerInputWrapper>
      <Text size={12} weight={600} color="#C2C0C1">
        빈칸에 정답을 입력해주세요.
      </Text>
      <AnswerInput
        value={inputs}
        onInput={handleInput}
        onBlur={handleSaveAnswer}
        maxLength={answerLetterNo}
        readOnly={timeEnded}
      />
      <Text size={12} weight={600} color="#9B9798">
        {inputs.length}/{answerLetterNo}자
      </Text>
    </StyledAnswerInputWrapper>
  );
}
