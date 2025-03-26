export const HOME = 'HOME'; // 홈
export const ON_BOARDING = 'ON_BOARDING'; // 온보딩
export const AGREEMENT = 'AGREEMENT'; // 약관동의
export const AGREEMENT_DETAIL = 'AGREEMENT_DETAIL'; // 약관동의 상세 페이지
export const PHONE_VERIFICATION = 'PHONE_VERIFICATION'; // 휴대폰 인증
export const USER_INFO = 'USER_INFO'; // 회원정보입력
export const LOGIN = 'LOGIN'; // 로그인
export const USER_RECOVERY_ID = 'USER_RECOVERY_ID'; // 아이디 / 비밀번호 찾기
export const USER_RECOVERY_PASSWORD = 'USER_RECOVERY_PASSWORD'; // 아이디 / 비밀번호 찾기
export const FIND_ID_RESULT = 'FIND_ID_RESULT'; // 아이디 찾기 결과
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'; // 비밀번호 변경
export const MY_PAGE = 'MY_PAGE'; // 마이 페이지
export const POINTS = 'POINTS'; // 포인트
export const RANKING = 'RANKING'; // 랭킹
export const MY_STAMP = 'MY_STAMP'; // 나의 활동스탬프
export const SHOP = 'SHOP'; // 상점
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL'; // 상품 상세
export const QUIZ_HOME = 'QUIZ_HOME'; // 퀴즈 홈
export const QUIZ_CATEGORY = 'QUIZ_CATEGORY'; // 퀴즈 카테고리 선택
export const QUIZ_GAME = 'QUIZ_GAME'; // 퀴즈 게임
export const QUIZ_RESULT = 'QUIZ_RESULT'; // 퀴즈 결과
export const SETTINGS = 'SETTINGS'; // 환경설정
export const EDIT_INFO = 'EDIT_INFO'; // 정보수정
export const INTRODUCTION = 'INTRODUCTION'; // 앱 소개
export const INQUIRY_FORM = 'INQUIRY_FORM'; // 문의하기
export const INQUIRY_HISTORY = 'INQUIRY_HISTORY'; // 문의내역
export const USER_DELETION = 'USER_DELETION'; // 회원탈퇴
export const ERROR = 'ERROR'; // 에러
export const NOT_FOUND = 'NOT_FOUND'; // 에러

const URL = {
  [HOME]: '/',
  [ON_BOARDING]: '/onBoarding',
  [AGREEMENT]: '/agreement',
  [AGREEMENT_DETAIL]: '/agreement/:agreementCd',
  [PHONE_VERIFICATION]: '/phoneVerification',
  [USER_INFO]: '/userInfo',
  [INTRODUCTION]: '/introduction',
  [LOGIN]: '/login',
  [USER_RECOVERY_ID]: '/userRecovery',
  [USER_RECOVERY_PASSWORD]: '/userRecovery',
  [CHANGE_PASSWORD]: '/changePassword',
  [FIND_ID_RESULT]: '/findIdResult',
  [MY_PAGE]: '/myPage',
  [POINTS]: '/myPage/points',
  [RANKING]: '/myPage/ranking',
  [MY_STAMP]: '/myPage/stamp',
  [SHOP]: '/shop',
  [PRODUCT_DETAIL]: '/shop/productDetail',
  [QUIZ_HOME]: '/quiz',
  [QUIZ_CATEGORY]: '/quiz/category',
  [QUIZ_GAME]: '/quiz/game/:page',
  [QUIZ_RESULT]: '/quiz/result',
  [SETTINGS]: '/settings',
  [EDIT_INFO]: '/editInfo',
  [INQUIRY_FORM]: '/inqioryForm',
  [INQUIRY_HISTORY]: '/inqioryHistory',
  [USER_DELETION]: '/userDeletion',
  [ERROR]: '/error',
  [NOT_FOUND]: '*',
};
export default URL;
