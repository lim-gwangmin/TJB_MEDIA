import styled from '@emotion/styled';

export const StyledAnswerInput = styled('input')`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  padding: 1rem;
  width: 100%;
  letter-spacing: 0.3rem;
  height: 5.8rem;
  border: 1px solid #c8c8c8;
  border-radius: 0.6rem;
  border-top: none;
  border-right: 0;
  border-left: 0;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  &::placeholder {
    font-weight: 500;
  }
  &[readonly] {
    background-color: #f8f8f8;
  }
`;
