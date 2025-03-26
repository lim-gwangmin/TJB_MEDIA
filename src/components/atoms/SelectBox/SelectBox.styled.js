import styled from '@emotion/styled';

export const StyledLabeledSelectBox = styled('div')`
  width: 25%;
`;

export const StyledLabel = styled('label')`
  font-size: 1.2rem;
  color: #878787;
  font-weight: 700;
  display: block;
  margin: 0 auto;
  > span {
    color: #ff0000;
  }
`;
export const StyledSelectBox = styled('select')`
  margin-top: 1rem;
  appearance: none;
  border: none;
  background-color: #e9e9eb;
  color: ${({ error }) => (error === true ? '#ff0000' : '#414141')};
  font-size: 1.2rem;
  font-weight: 800;
  display: inline-block;
  text-align: center;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  width: 6rem;
`;

export const StyledAlert = styled('p')`
  color: #ff0000;
  font-size: 1.3rem;
  margin-top: 0.5rem;
`;
