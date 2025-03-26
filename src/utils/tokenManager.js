import { REQUEST_ERROR_CODE } from '@constant';

import { navLinks } from '@routes/navLinks';
import { LOGIN } from '@routes/url';

// 저장할 토큰의 키
const TOKEN_KEY = 'jwtToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

/**
 * @param {*} token : JWT token
 * @param {*} refreshToken : JWT refreshToken
 * @param {*} rememberMe : 자동 로그인 유무
 * @returns { jwtToken: String, refreshToken: String }
 *
 *  자동로그인 시 로컬 스토리지에 토큰 값 저장
 *  자동로그인이 아닐경우 세션스토리지에 토큰 값 저장
 */

// 토큰을 로컬, 세션 스토리지에 저장합니다.
export const saveToken = (token, refreshToken, rememberMe) => {
  if (typeof window === 'undefined') return;

  if (rememberMe) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  } else {
    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
};

// 로컬 스토리지에서 토큰을 가져옵니다.
export const getToken = () => {
  if (typeof window === 'undefined') return;

  // 우선 로컬 스토리지에서 확인
  const tokenFromLocalStorage = localStorage.getItem(TOKEN_KEY);
  const refreshTokenFromLocalStorage = localStorage.getItem(REFRESH_TOKEN_KEY);
  if (tokenFromLocalStorage || refreshTokenFromLocalStorage) {
    return { jwtToken: tokenFromLocalStorage, refreshToken: refreshTokenFromLocalStorage };
  }

  // 로컬 스토리지에 없으면 세션 스토리지에서 확인
  const tokenFromSessionStorage = sessionStorage.getItem(TOKEN_KEY);
  const refreshTokenFromSessionStorage = sessionStorage.getItem(TOKEN_KEY);
  if (tokenFromSessionStorage || refreshTokenFromSessionStorage) {
    return { jwtToken: tokenFromSessionStorage, refreshToken: refreshTokenFromSessionStorage };
  }

  return { jwtToken: null, refreshToken: null };
};

// 로컬, 세션 스토리지에서 토큰을 삭제합니다.
export const removeToken = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);

  localStorage.removeItem(REFRESH_TOKEN_KEY);
  sessionStorage.removeItem(REFRESH_TOKEN_KEY);
};

export const isTokenExpired = (response) => {
  const { resultCode, resultMessage } = response;

  // 토큰 만료 및 인증 에러
  if (resultCode === 403) {
    alert('인증이 만료되었습니다.\n다시 로그인해주세요.');
    removeToken();
    window.location = navLinks[LOGIN].path;
  }
  // 에러
  if (REQUEST_ERROR_CODE[resultCode]) {
    alert(resultMessage);
    return Promise.reject(resultMessage);
  }

  return response;
};
