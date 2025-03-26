import styled from '@emotion/styled';

export const StyledChoiceOptionButton = styled('button')`
  display: block;
  width: 100%;
  position: relative;
  padding: 1.2rem 3rem 1.2rem 1.4rem;
  border-radius: 1rem;
  background-color: #fff;
  font-size: 1.4rem;
  text-align: left;
  border-width: 1px;
  border-style: solid;
  color: ${({ isSelected }) => (isSelected ? '#000000' : '#767676')};
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};
  border-color: ${({ isSelected }) => (isSelected ? '#5486F9' : '#C8C8C8')};
  background-color: ${({ isSelected, disabled }) =>
    disabled ? (isSelected ? '#EFF6FF' : '#E1E1E1') : isSelected ? '#EFF6FF' : '#fff'};
  ~ button {
    margin-top: 1rem;
  }
`;
export const StyledChoiceOtionImage = styled('img')`
  position: absolute;
  right: 1.5rem;
  top: 0.8rem;
`;
