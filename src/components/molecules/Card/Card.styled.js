import styled from '@emotion/styled';

export const CardCenterWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11rem;
  margin: 2rem 0;
`;

export const Thumbnail = styled('img')`
  width: ${({ size }) => size || '6rem'};
  height: ${({ size }) => size || '6rem'};
  border-radius: 100%;
  background-color: #ffcd1b;
`;

export const Icon = styled('img')`
  width: ${({ size }) => size || '2rem'};
  height: ${({ size }) => size || '2rem'};
`;
