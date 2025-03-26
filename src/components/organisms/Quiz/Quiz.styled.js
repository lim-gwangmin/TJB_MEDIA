import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import theme from '@styles/theme';

export const StyledNotFound = styled('div')`
  position: relative;
  display: flex;
  background-color: #fff9db;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  max-width: 100%;
  width: 30rem;
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  height: 5.2rem;
  color: #fff;
  justify-content: center;
  background-color: ${theme.color.primary[400]};
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.color.primary[400]};
  border-radius: 0.6rem;
  transision: all 0.3s;
  &:active {
    opacity: 0.7;
    transform: translate(1px, 1px);
  }
`;

export const StyledResultModalImage = styled('img')`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -4rem;
`;

// 벌집 아이템 컴포넌트
export const HexItem = styled('div')`
  width: 16rem;
  height: 19rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  // 텍스트 스타일링
  span {
    font-size: 14px;
    font-weight: bold;
  }
  &:nth-of-type(2n) {
  }
  // 육각형 테두리
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: inherit; // 육각형 모양에 맞춘 테두리
    z-index: -1;
  }
`;
export const HexItemButton = styled('button')`
  width: 100%;
  height: calc(100% - 9rem);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 벌집 컨테이너
export const HexGrid = styled('div')`
  display: flex;
  flex-flow: wrap;
  //   grid-template-columns: repeat(4, 1fr); // 기본적으로 한 줄에 4개의 육각형
  //   height: 100vh;
  //   width: 100vw;

  gap: 0.7rem; // 간격을 그리드 간격으로 설정
  width: 116rem;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

export const grid01 = {
  marginTop: '-4rem',
};
export const grid02 = {
  ...grid01,
  marginTop: '-4rem',
  //   marginLeft: '-8.3rem',
  marginLeft: '-16.3rem',
};
