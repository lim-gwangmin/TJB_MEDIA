import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import theme from '@styles/theme';

import { pxToRem } from '@utils/pxToRem';

// 테마
const buttonTheme = {
  default: {
    backgroundColor: theme.color.primary[400],
    borderColor: theme.color.primary[400],
    color: '#fff',
  },
  sub: {
    backgroundColor: theme.color.primary[200],
    borderColor: theme.color.primary[200],
    color: '#fff',
  },
  revers: {
    backgroundColor: '#fff',
    borderColor: theme.color.primary[400],
    color: theme.color.primary[400],
  },
  disabled: {
    backgroundColor: theme.color.tertiary[50],
    borderColor: theme.color.tertiary[50],
    color: theme.color.tertiary[100],
  },
};
// 탭 메뉴 스타일 정의
const variantStyles = {
  default: '#E8E8E8',
  active: theme.color.primary[400],
};

// 기본 버튼 스타일
const baseButtonStyles = `
  cursor: pointer;
  max-width: 100%;
  display: flex;
  align-items: center;
  font-size:1.6rem;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.6rem;
  transition: all 0.3s;
`;

// 버튼 스타일 컴포넌트
export const StyledBasicButton = styled('button')`
  ${baseButtonStyles}
  font-size: ${({ size }) => pxToRem(size)};
  flex: ${({ width }) => `1 0 ${width ? pxToRem(width) : 0}`};
  width: ${({ width }) => (width ? pxToRem(width) : '100%')};
  height: ${({ height }) => pxToRem(height)};
  color: ${({ theme, disabled }) =>
    disabled ? buttonTheme.disabled.color : buttonTheme[theme].color};
  background-color: ${({ theme, disabled }) =>
    disabled ? buttonTheme.disabled.backgroundColor : buttonTheme[theme].backgroundColor};
  border-color: ${({ theme, disabled }) =>
    disabled ? buttonTheme.disabled.borderColor : buttonTheme[theme].borderColor};

  ${({ disabled }) =>
    !disabled &&
    `
    &:active {
      opacity: 0.7;
      transform: translate(1px, 1px);
    }
  `}
`;
export const StyledBackButton = styled('button')`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
`;
// 햄버거 버튼 스타일 컴포넌트
export const StyledHamburgerButton = styled('button')`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 1rem;
`;

// 로고 버튼 스타일 컴포넌트
export const StyledLogoButton = styled(NavLink)`
  position: relative;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
`;

// 탭메뉴 버튼 스타일 컴포넌트
export const StyledTabMenuButton = styled('button')`
  display: block;
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 1.6rem;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ active }) => (active ? variantStyles.active : variantStyles.default)};
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  color: ${({ active }) => (active ? variantStyles.active : variantStyles.default)};
  border-bottom-width: ${({ active }) => (active ? '0' : '1px')};
`;
