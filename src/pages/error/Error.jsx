import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import bee from '@assets/images/bee_image_x3.svg';

import theme from '@styles/theme';

export default function Error() {
  return (
    <StyledError>
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <img src={bee} alt="벌 모양" style={{ width: '20rem' }} />
        <p style={{ fontSize: '2.3rem', fontWeight: 500, marginTop: '2.5rem' }}>
          유효하지 않은 페이지입니다
        </p>
        <div style={{ marginTop: '4rem' }}>
          <StyledNavLink to="/">확인</StyledNavLink>
        </div>
      </div>
    </StyledError>
  );
}

const StyledError = styled('div')`
  position: relative;
  display: flex;
  background-color: #fff9db;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const StyledNavLink = styled(NavLink)`
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
