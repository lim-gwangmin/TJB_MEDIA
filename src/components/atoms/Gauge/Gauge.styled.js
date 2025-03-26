import styled from '@emotion/styled';

export const StyledGauge = styled('div')`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '1rem')};
  border-radius: 1.2rem;
  background-color: ${({ bgColor }) => bgColor};
`;

export const StyledGaugeBar = styled('div')`
  position: relative;
  background-color: ${({ barColor }) => barColor};
  width: ${({ value }) => value}%;
  height: 100%;
  border-radius: 1.2rem;
  transition: width 1s ease-in-out;

  > img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
`;
