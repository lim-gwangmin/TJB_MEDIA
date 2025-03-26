import styled from '@emotion/styled';

import CheckboxIconOff from '@assets/icons/icon_check_off.svg';
import CheckboxIconOn from '@assets/icons/icon_check_on.svg';

import { pxToRem } from '@utils/pxToRem';

// 체크박스 스타일 컴포넌트
export const StyledCheckboxContainer = styled('span')`
  display: inline-block;
  vertical-align: middle;
`;
export const StyledCheckbox = styled('input')`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  font-size: ${({ size }) => pxToRem(size)};
  overflow: hidden;
  &:checked + label::before {
    background-image: url(${CheckboxIconOn});
  }
`;
export const StyledCheckboxLabel = styled('label')`
  position: relative;
  display: inline-block;
  padding-left: 3rem;
  vertical-align: middle;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -0.2rem;
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    background-size: 2.4rem;
    background-position: left center;
    background-repeat: no-repeat;
    background-image: url(${CheckboxIconOff});
  }
`;
export const StyledCheckboxText = styled('span')`
  display: inline-block;
  vertical-align: middle;
  font-size: ${({ size }) => pxToRem(size)};
  padding-left: 1rem;
`;
// 기본 input text 스타일 컴포넌트 / label이 없는 input 스타일 컴포넌트
export const StyledBasicTextInput = styled('input')`
  font-size: ${({ size }) => pxToRem(size)};
  color: #111111;
  width: 100%;
  max-width: 100%;
  padding: 1rem 2rem;
  height: 5.8rem;
  border-radius: 0.6rem;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #dadada;
  &::placeholder {
    color: #d8d8d8;
  }
  &:read-only,
  &:disabled {
    background-color: #fafafa;
  }
`;
// label이 있는 input 스타일 컴포넌트
export const StyledLabeledTextInputContainer = styled('div')`
  position: relative;
  padding: 1.5rem;
  border: 1px solid #dadada;
  border-radius: 1rem;
`;
export const StyledLabeledTextInputLabel = styled('label')`
  font-size: 1.2rem;
  display: block;
  color: #878787;
  font-weight: 700;
  > span {
    color: #ff0000;
    padding-left: 0.5rem;
  }
`;
export const StyledLabeledTextInput = styled('input')`
  border: none;
  font-size: 2rem;
  font-weight: 600;
  padding-top: 1rem;
  width: 100%;
  &::placeholder {
    color: #d8d8d8;
  }
`;
export const StyledAlert = styled('p')`
  color: #ff0000;
  font-size: 1.3rem;
  margin-top: ${({ top }) => top && pxToRem(top)};
`;
// radio 스타일 컴포넌트
export const StyleRadioContainer = styled('span')`
  display: inline-block;
  vertical-align: middle;
`;
export const StyledRadio = styled('input')`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  font-size: ${({ size }) => pxToRem(size)};
  overflow: hidden;
  &:checked + label::before {
    background-image: url(${CheckboxIconOn});
  }
`;
export const StyledRadioLabel = styled('label')`
  position: relative;
  display: inline-block;
  padding-left: 3rem;
  vertical-align: middle;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -0.2rem;
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    background-size: 2.4rem;
    background-position: left center;
    background-repeat: no-repeat;
    background-image: url(${CheckboxIconOff});
  }
`;
export const StyledRadioText = styled('span')`
  display: inline-block;
  vertical-align: middle;
  font-size: ${({ size }) => pxToRem(size)};
  padding-left: 1rem;
`;
// 핸드폰 인증 input 스타일 컴포넌트
export const StyledTextInputMobileCarrier = styled('input')`
  border: none;
  font-size: 2rem;
  font-weight: 600;
  position: absolute;
  border-radius: 1rem;
  width: 70%;
  right: 0;
  top: 0;
  padding: 0 2.5rem;
  height: 100%;
`;
