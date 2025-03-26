import React from 'react';

import bee from '@assets/images/bee_image_x3.svg';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { StyledNavLink, StyledNotFound } from './Quiz.styled';

export default function NonQuiz() {
  const { goBack } = useCustomNavigate();
  return (
    <StyledNotFound>
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <img src={bee} alt="벌 모양" style={{ width: '20rem' }} />
        <p style={{ fontSize: '2.3rem', fontWeight: 500, marginTop: '2.5rem' }}>퀴즈가 없습니다.</p>
        <div style={{ marginTop: '4rem' }}>
          <StyledNavLink onClick={goBack}>뒤로가기</StyledNavLink>
        </div>
      </div>
    </StyledNotFound>
  );
}
