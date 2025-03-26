import styled from '@emotion/styled';

export const StyledCountPoint = styled('span')`
  display: inline-block;
  text-align: center;
  background-color: #ff881b;
  border-radius: 3rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

export const StyledAnswerBox = styled('p')`
  font-weight: 600;
  margin-top: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ rightFl }) => (rightFl === 1 ? '#5486F9' : '#FF4646')};
  background-color: ${({ rightFl }) => (rightFl === 1 ? '#EFF6FF' : '#FFEAEA')};
  text-align: left;
`;

export const StyledSolveBox = styled('p')`
  font-weight: 600;
  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: #f5f5f5;
  background-color: #ededef;
  text-align: left;
`;
