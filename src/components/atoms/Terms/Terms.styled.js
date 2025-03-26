import styled from '@emotion/styled';

import CheckboxIconOff from '@assets/icons/icon_check_off.svg';
import CheckboxIconOn from '@assets/icons/icon_check_on.svg';

import { pxToRem } from '@utils/pxToRem';

// 체크박스 스타일 컴포넌트
export const StyledTermsCheckboxContainer = styled('span')`
  display: inline-block;
  vertical-align: middle;
`;
export const StyledTermsCheckbox = styled('input')`
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
export const StyledTermsCheckboxLabel = styled('label')`
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
export const StyledTermsCheckboxText = styled('span')`
  display: inline-block;
  vertical-align: middle;
  font-size: ${({ size }) => pxToRem(size)};
  padding-left: 1rem;
`;
