import { axiosInstance, axiosProxyInstance } from './axiosInstance';

const openApiKey = import.meta.env.VITE_OPEN_API_KEY;

// 회원 가입
export const post_signUp = async (userData) => {
  return await axiosInstance.post('/api/member/user', userData);
};

// 사용자 정보 조회
export const get_user = async () => {
  return await axiosInstance.get('/api/member/user');
};
// 사용자 정보 변경
export const put_changeUserDatas = async (userData) => {
  return await axiosInstance.put('/api/member/user', userData);
};
// 사용자 데이터 조회
export const get_userDatas = async () => {
  return await axiosInstance.get('/api/member/user/data');
};

// 로그인
export const post_loginUser = async ({ userId, userPw }) => {
  return await axiosInstance.post('/api/login', { userId, userPw });
};

// 아이디 중복체크
export const post_checkDuplicateId = async (userId) => {
  return await axiosInstance.post('/api/member/user/checkDuplicateId', { userId });
};

// 로그아웃
export const get_logOut = async () => {
  return await axiosInstance.get('/api/logout');
};

// 휴대폰 인증번호 요청
export const post_requestSMSCode = async ({ type, userNm, mobileCarrier, phone }) => {
  return await axiosInstance.post('/api/common/certi/code/phone', {
    type,
    userNm,
    mobileCarrier,
    phone,
  });
};
// 이름, 휴대폰번호, 통신사로 정보 회원 조회 및 본인 인증
export const post_verifyMembershipWithId = async ({ userNm, mobileCarrier, phone, code }) => {
  return await axiosInstance.post('/api/common/certi/find-id/phone', {
    userNm,
    mobileCarrier,
    phone,
    code,
  });
};
// 이름, 휴대폰번호, 통신사로 정보 회원 조회 및 본인 인증
export const post_verifyMembershipWithoutId = async ({
  type,
  userId,
  userNm,
  mobileCarrier,
  phone,
  code,
}) => {
  return await axiosInstance.post('/api/common/certi/find-pw/phone', {
    type,
    userId,
    userNm,
    mobileCarrier,
    phone,
    code,
  });
};

// 비밀번호 변경
export const post_changePassword = async ({ userNewPw, userCd }) => {
  return await axiosInstance.post('/api/member/user/change-pw', { userNewPw, userCd });
};

// 회원 탈퇴
export const post_userDrop = async () => {
  return await axiosInstance.post('/api/member/user/drop');
};

// 학교 검색
export const get_schoolList = async ({ region, schoolName, pIndex = 1 }) => {
  return await axiosProxyInstance.get(
    `/hub/schoolInfo?LCTN_SC_NM=${region}&SCHUL_NM=${schoolName}&Type=json&pSize=20&pIndex=${pIndex}&key=${openApiKey}`,
  );
};
// 출석 처리
export const post_attendance = async () => {
  return await axiosInstance.post('/api/attendance');
};
