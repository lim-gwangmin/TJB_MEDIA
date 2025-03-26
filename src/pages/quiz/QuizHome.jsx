import React from 'react';

import { NavButton } from '@components/atoms/Button';

import { navLinks } from '@routes/navLinks';
import { QUIZ_GAME } from '@routes/url';

export default function QuizHome() {
  return (
    <div>
      <p>QuizHome</p>
      <NavButton to={navLinks[QUIZ_GAME].path}>퀴즈홈으로</NavButton>
    </div>
  );
}
