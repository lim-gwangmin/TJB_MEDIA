import {
  get_logOut,
  get_schoolList,
  get_user,
  get_userDatas,
  post_attendance,
  post_changePassword,
  post_checkDuplicateId,
  post_loginUser,
  post_requestSMSCode,
  post_signUp,
  post_userDrop,
  post_verifyMembershipWithId,
  post_verifyMembershipWithoutId,
  put_changeUserDatas,
} from '@api';

import { navLinks } from '@routes/navLinks';
import { LOGIN } from '@routes/url';

import { isTokenExpired } from '@utils/tokenManager';
import { getToken, removeToken, saveToken } from '@utils/tokenManager';

export const AuthService = {
  // 로그인
  login: async ({ userPw, userId, rememberMe }) => {
    try {
      const response = await post_loginUser({ userPw, userId });

      // 에러 처리
      const expired = isTokenExpired(response.data);

      const resultData = expired.result;
      const { jwtToken, refreshToken } = resultData;

      if (jwtToken && refreshToken) {
        saveToken(jwtToken, refreshToken, rememberMe);
      }

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('Login failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 유저 정보 조회
  userInfo: async () => {
    try {
      const response = await get_user();
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('verifySMSCode failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 유저 정보 변경
  changeUserDatas: async (userData) => {
    try {
      const response = await put_changeUserDatas(userData);
      // 에러 처리
      const expired = isTokenExpired(response.data);
      return expired;
    } catch (error) {
      const { response } = error;
      console.error('changeUserDatas failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 유저 데이터 조회
  userDatas: async () => {
    try {
      const response = await get_userDatas();
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('verifySMSCode failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 휴대폰 인증번호 요청
  requestSMSCode: async (userData) => {
    try {
      const response = await post_requestSMSCode(userData);
      // 에러 처리
      const expired = isTokenExpired(response.data);
      return expired;
    } catch (error) {
      const { response } = error;
      console.error('requestSMSCode failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 아이디, 이름, 휴대폰번호, 통신사로 정보 회원 조회 및 본인 인증
  verifyMembershipWithId: async (userData) => {
    try {
      const response = await post_verifyMembershipWithId(userData);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('verifySMSCode failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 이름, 휴대폰번호, 통신사로 정보 회원 조회 및 본인 인증
  verifyMembershipWithoutId: async (userData) => {
    try {
      const response = await post_verifyMembershipWithoutId(userData);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('verifySMSCode failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 학교검색
  schoolList: async (schoolData) => {
    try {
      const response = await get_schoolList(schoolData);
      const data = response.data?.schoolInfo;

      if (data) return data[1].row;
      return [];
    } catch (error) {
      console.error('schoolList failed:', error);
      throw error;
    }
  },
  // 비밀번호 찾기
  findPassword: async (userData) => {
    try {
      const response = await post_findPassword(userData);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('findPassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 비밀번호 변경
  changePassword: async (userData) => {
    try {
      const response = await post_changePassword(userData);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('changePassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 회원가입 처리
  signUp: async (userData) => {
    try {
      const response = await post_signUp(userData);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('register failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 아이디 중복 체크
  checkDuplicateId: async (id) => {
    try {
      const response = await post_checkDuplicateId(id);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('register failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 현재 로그인된 사용자 정보 가져오기
  getCurrentUser: async () => {
    try {
      const { jwtToken, refreshToken } = getToken();

      if (!jwtToken || !refreshToken) {
        throw new Error('No token found');
      }

      // const response = await getUserProfile();
      return response.data;
    } catch (error) {
      const { response } = error;
      console.error('Failed to fetch user profile:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 출석 처리
  attendance: async () => {
    try {
      const response = await post_attendance();
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('findPassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 로그아웃
  logOut: async () => {
    try {
      const response = await get_logOut();
      // const { resultCode, resultMessage } = response;
      removeToken();
      window.location = navLinks[LOGIN].path;

      return response.result.data;
    } catch (error) {
      const { response } = error;
      console.error('Failed to fetch user profile:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 회원 탈퇴
  userDrop: async () => {
    try {
      const response = await post_userDrop();
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('changePassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
};
