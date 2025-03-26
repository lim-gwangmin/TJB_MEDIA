import React from 'react';

const QuizContext = React.createContext(undefined);

function QuizProvider({ children, value }) {
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

function useQuizContext() {
  const context = React.useContext(QuizContext);

  if (context === undefined) {
    throw new Error('QuizContext는 QuizProvider 사용하여야 합니다.');
  }

  return context;
}

export { QuizProvider, useQuizContext };
