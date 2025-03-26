import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// 타이머 애니메이션
const shake = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const TimerContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GaugeContainer = styled('div')`
  width: 100%;
  height: 1.2rem;
  background: #e1e1e1;
  border-radius: 1rem;
  overflow: hidden;
`;

export const GaugeFill = styled('div')`
  height: 100%;
  width: ${({ gaue }) => `${gaue}%`};
  background: ${({ timer }) => (timer ? '#FF3600' : '#5486F9')};
  transition: width 0.5s ease-in-out;
`;

export const TimerWrapper = styled('div')`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  gap: 2rem;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const TimerText = styled('p')`
  font-size: 1.4rem;
  color: ${({ timer }) => (timer ? '#FF3600' : '#5486F9')};
`;

export const TimerTextWrapper = styled('div')`
  display: flex;
  align-items: end;
  gap: 1rem;
`;

export const TimerImage = styled('img')`
  width: 3.6rem;
  height: 3.2rem;
  ${({ isTimeCritical }) =>
    isTimeCritical &&
    css`
      animation: ${shake} 0.2s ease-in-out infinite;
    `}
`;
