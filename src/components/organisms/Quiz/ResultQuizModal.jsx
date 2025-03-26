import React from 'react';

import coinImage from '@assets/images/coin.svg';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer } from '@components/atoms/Layout';
import { Alert } from '@components/atoms/Modal';
import { Text, TextPoint } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { navLinks } from '@routes/navLinks';
import { QUIZ_RESULT } from '@routes/url';

import { StyledResultModalImage } from './Quiz.styled';

export default function ResultQuizModal({ isOpen = false, insertPoint = 0, solveList = [] }) {
  const { goToPage } = useCustomNavigate();
  return (
    <>
      <Alert isOpen={isOpen} style={{ overflow: 'visible', paddingTop: '5rem' }}>
        <StyledResultModalImage src={coinImage} alt="코인" />
        <Title size={20} weight={600}>
          퀴즈풀이 완료! <br />
          리터러시 <TextPoint>{insertPoint}P</TextPoint> 포인트 적립
        </Title>
        <Text size={14} style={{ marginTop: '2rem', textAlign: 'center' }} color="#707070">
          미디어리터러시와 한 걸음 더 친해졌어요! <br />
          이제 결과를 확인하러 가볼까요?
        </Text>
        <ButtonsContainer>
          <Button onClick={() => goToPage(navLinks[QUIZ_RESULT].path, solveList)}>
            결과 확인하기
          </Button>
        </ButtonsContainer>
      </Alert>
    </>
  );
}
