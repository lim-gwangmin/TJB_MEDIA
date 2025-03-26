import styled from '@emotion/styled';

import iconArrow from '@assets/icons/icon_select_arrow.svg';

export const StyledSearchWrapper = styled('div')`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const StyledSelect = styled('select')`
  display: inline-block;
  max-width: 10rem;
  flex: 0 0 10rem;
  font-size: 1.6rem;
  color: #111111;
  border-radius: 0.6rem;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #dadada;
  appearance: none;
  height: 5.2rem;
  padding: 1rem 2rem;
  background: url(${iconArrow}) right 2rem center / auto no-repeat;
`;
export const StyledInputWrap = styled('div')`
  position: relative;
  > input {
    font-size: 1.6rem;
    color: #111111;
    width: 100%;
    max-width: 100%;
    padding: 1rem 5rem 1rem 2rem;
    height: 5.2rem;
    border-radius: 0.6rem;
    background-color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: #dadada;
  }
  > button {
    height: 100%;
    padding: 1rem;
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    &:active {
      opacity: 0.7;
    }
  }
`;
