import React, { useEffect, useState } from 'react';

import { ChoiceQuizButton } from '@components/atoms/Quiz';

import { useQuizContext } from '@hooks/useQuizContext';

export default function SingleChoiceQuiz({ options }) {
  const { timeEnded, thisQuizData, handleChandeAnswer } = useQuizContext();
  const { quiz, quizCd } = thisQuizData;
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    settingAnswerData();
  }, [quizCd]);

  // 정답 제출 전 출제 문제 세팅
  const settingAnswerData = () => {
    handleChandeAnswer({ quiz, quizCd, answer: null });
  };
  // 정답 제출
  const handleOptionClick = (answer) => {
    setSelectedOption(answer);
    handleChandeAnswer({ quiz, quizCd, answer: String(answer) });
  };

  return (
    <>
      {options.map((option, index) => (
        <ChoiceQuizButton
          key={index}
          answer={index + 1}
          option={option}
          onClick={!timeEnded && handleOptionClick}
          isSelected={selectedOption === index + 1}
          disabled={timeEnded}
        />
      ))}
    </>
  );
}
