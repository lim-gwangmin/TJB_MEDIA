import React from 'react';
import { Navigate } from 'react-router-dom';

import OnBoarding from '@pages/onBoarding/OnBoarding';

import { getFirstVisitCookie } from '@utils/cookiesManager';
import { getToken } from '@utils/tokenManager';

import { navLinks } from './navLinks';
import { LOGIN } from './url';

export default function PrivateRoute({ element, isAuthenticated }) {
  const isFirstVisit = getFirstVisitCookie();

  // 첫 방문을 경우 온보딩 페이지로 이동
  if (!isFirstVisit) {
    return <OnBoarding />;
  }

  // 인증하지 않아도 되는 컴포넌트는 바로 리턴
  if (!isAuthenticated) {
    return element;
  }

  const { jwtToken, refreshToken } = getToken();

  // 인증된 경우, 토큰이 없으면 로그인 페이지로 리다이렉트
  return jwtToken && refreshToken ? element : <Navigate to={navLinks[LOGIN].path} />;
}
