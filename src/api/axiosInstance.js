import axios from 'axios';

import { navLinks } from '@routes/navLinks';
import { LOGIN } from '@routes/url';

import { getToken } from '@utils/tokenManager';

import EXEMPT_URLS from './EXEMPT_URL';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// Axios 프록시 인스턴스 생성
const axiosProxyInstance = axios.create({
  baseURL: '/api',
});

// 요청 인터셉터 등록
axiosInstance.interceptors.request.use(
  (config) => {
    // 토큰값 비교 없이 요청 진행
    const isExempt = EXEMPT_URLS.find((exempt) => {
      // 정규 표현식이 있는 경우
      if (exempt.url instanceof RegExp) {
        return (
          exempt.url.test(config.url) &&
          (exempt.methods.length === 0 || exempt.methods.includes(config.method))
        );
      }
      // 일반 문자열 정의
      return (
        exempt.url === config.url &&
        (exempt.methods.length === 0 || exempt.methods.includes(config.method))
      );
    });

    if (isExempt) {
      return config;
    }

    const { jwtToken, refreshToken } = getToken();

    if (jwtToken || refreshToken) {
      config.headers.Authorization = `Bearer${jwtToken}`;
      config.headers.Refresh = `${refreshToken}`;
      return config; // 수정된 요청 객체 반환
    }

    window.location = navLinks[LOGIN].path; // 로그인 페이지로 이동

    return Promise.reject('토큰이 없습니다.');
  },
  (error) => {
    // 요청이 실패했을 때의 처리
    console.error('Request Error', error);
    return Promise.reject(error); // 에러를 그대로 반환
  },
);

export { axiosInstance, axiosProxyInstance };
