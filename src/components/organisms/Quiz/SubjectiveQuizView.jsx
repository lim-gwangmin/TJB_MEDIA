import React from 'react';

import { YouTubePlayer } from '@components/atoms/Quiz';
import { SubjectiveQuiz } from '@components/molecules/Quiz';

import { useQuizContext } from '@hooks/useQuizContext';

export default function SubjectiveQuizView({ newsLink }) {
  const { endedYouTube, thisQuizData } = useQuizContext();
  return (
    <>
      {/* 유튜브 플레이어  */}
      <YouTubePlayer videoId={newsLink} />
      {/* 객관식 문제 퀴즈 */}
      {endedYouTube && <SubjectiveQuiz answerLetterNo={thisQuizData.answerLetterNo} />}
    </>
  );
}
