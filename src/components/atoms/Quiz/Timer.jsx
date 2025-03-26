import React from 'react';

import timer from '@assets/images/quiz_timer.svg';
import timerLimit from '@assets/images/quiz_timer_limit.svg';

import { Text } from '@components/atoms/Text';

import { useQuizContext } from '@hooks/useQuizContext';

import {
  GaugeContainer,
  GaugeFill,
  TimerContainer,
  TimerImage,
  TimerText,
  TimerTextWrapper,
  TimerWrapper,
} from './Timer.styled';

export default function Timer() {
  const { timeLeft, initialTime, gaugeWidth } = useQuizContext();

  const isTimeCritical = timeLeft <= (initialTime * 1) / 3;

  return (
    <TimerContainer>
      <TimerWrapper>
        <Text size={14} weight={500}>
          제한시간
        </Text>
        <TimerTextWrapper>
          <TimerImage
            src={isTimeCritical ? timerLimit : timer}
            alt="타이머"
            isTimeCritical={isTimeCritical}
          />
          <TimerText timer={isTimeCritical}>{timeLeft}</TimerText>
        </TimerTextWrapper>
      </TimerWrapper>
      <GaugeContainer>
        <GaugeFill gaue={gaugeWidth} timer={isTimeCritical} />
      </GaugeContainer>
    </TimerContainer>
  );
}
