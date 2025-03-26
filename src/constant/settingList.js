import { navLinks } from '@routes/navLinks';
import { INQUIRY_FORM, USER_DELETION } from '@routes/url';

// 환경설정 도움센터 리스트
export const SETTING_HELP_LIST = [
  { link: '', label: '이용안내' },
  { link: '', label: '자주하는 질문' },
  { link: navLinks[INQUIRY_FORM].path, label: '문의하기' },
  { link: '', label: '미디어리터러시 교육이란?' },
  { link: navLinks[USER_DELETION].path, label: '회원탈퇴' },
];
