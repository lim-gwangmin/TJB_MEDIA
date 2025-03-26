import React from 'react';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer } from '@components/atoms/Layout';

import { useQuizContext } from '@hooks/useQuizContext';
import useQuizPageController from '@hooks/useQuizPageController';

export default function QuizPageHandlerButton({}) {
  const { isCompleted, timeEnded, answerList } = useQuizContext();
  const { onHandleNextPage, submitPage } = useQuizPageController();

  return (
    <>
      <ButtonsContainer>
        <Button
          disabled={!(isCompleted || timeEnded)}
          onClick={submitPage ? () => onHandleNextPage(answerList) : onHandleNextPage}
        >
          {submitPage ? '제출' : 'NEXT'}
        </Button>
      </ButtonsContainer>
    </>
  );
}
