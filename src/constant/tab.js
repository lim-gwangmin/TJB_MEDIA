import { FindId, FindPassword } from '@components/organisms/Sign';

import { navLinks } from '@routes/navLinks';
import { INQUIRY_FORM, INQUIRY_HISTORY } from '@routes/url';

// 학생 타입
export const STUDENT_TYPES = [
  { key: 'n', label: '일반' },
  { key: 'h', label: '고등학생' },
  { key: 'm', label: '중학생' },
  { key: 'e', label: '초등학생' },
];

// 아이디 찾기 비밀번호 찾기 탭 메뉴
export const USER_RECOVERY_TAB_TYPES = [
  { key: 'id', label: '아이디 찾기', active: true, component: FindId },
  { key: 'password', label: '비밀번호 찾기', active: false, component: FindPassword },
];

// 주간 랭킹 탭 메뉴 데이터
export const RANK_TYPE_TAB_DATA = [
  { key: 'school', label: '학교' },
  { key: 'student', label: '학생' },
];
export const RANK_TAB_DATA = [
  { key: 'this', label: '이번주' },
  { key: 'last', label: '지난주' },
];

// 포인트 탭 메뉴 데이터
export const POINT_TAB_DATA = [
  { key: 'all', label: '전체' },
  { key: 'plus', label: '적립' },
  { key: 'minus', label: '사용' },
];

// 문의하기 탭 데이터
export const INQUIRY_TAB_DATA = [
  { label: '문의하기', url: navLinks[INQUIRY_FORM].path },
  { label: '문의내역', url: navLinks[INQUIRY_HISTORY].path },
];
