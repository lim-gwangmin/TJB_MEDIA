import URL from '@routes/url';

const navLinks = {
  ON_BOARDING: { path: URL.ON_BOARDING, options: { state: '' } },
  HOME: { path: URL.HOME, options: { state: '' } },
  AGREEMENT: { path: URL.AGREEMENT, options: { state: '' } },
  AGREEMENT_DETAIL: (agreementCd) => ({
    path: `/agreement/${agreementCd}`,
    options: { state: '' },
  }),
  PHONE_VERIFICATION: { path: URL.PHONE_VERIFICATION, options: { state: '' } },
  USER_INFO: { path: URL.USER_INFO, options: { state: '' } },
  LOGIN: { path: URL.LOGIN, options: { state: '' } },
  USER_RECOVERY_ID: { path: URL.USER_RECOVERY_ID, options: { state: '' } },
  USER_RECOVERY_PASSWORD: {
    path: URL.USER_RECOVERY_PASSWORD,
    options: { state: { type: 'password' } },
  },
  FIND_ID_RESULT: { path: URL.FIND_ID_RESULT, options: { state: '' } },
  CHANGE_PASSWORD: { path: URL.CHANGE_PASSWORD, options: { state: '' } },
  MY_PAGE: { path: URL.MY_PAGE, options: { state: '' } },
  POINTS: { path: URL.POINTS, options: { state: '' } },
  MY_STAMP: { path: URL.MY_STAMP, options: { state: '' } },
  RANKING: { path: URL.RANKING, options: { state: '' } },
  SHOP: { path: URL.SHOP, options: { state: '' } },
  PRODUCT_DETAIL: { path: URL.PRODUCT_DETAIL, options: { state: '' } },
  QUIZ_HOME: { path: URL.QUIZ_HOME, options: { state: '' } },
  QUIZ_CATEGORY: { path: URL.QUIZ_CATEGORY, options: { state: '' } },
  QUIZ_GAME: (page) => ({ path: `/quiz/game/${page}`, options: { state: '' } }),
  QUIZ_RESULT: { path: URL.QUIZ_RESULT, options: { state: '' } },
  SETTINGS: { path: URL.SETTINGS, options: { state: '' } },
  EDIT_INFO: { path: URL.EDIT_INFO, options: { state: '' } },

  INQUIRY_FORM: { path: URL.INQUIRY_FORM, options: { state: '' } },
  INQUIRY_HISTORY: { path: URL.INQUIRY_HISTORY, options: { state: '' } },

  INTRODUCTION: { path: URL.INTRODUCTION, state: ' ' },
  USER_DELETION: { path: URL.USER_DELETION, options: { state: '' } },
  ERROR: { path: URL.ERROR, options: { state: '' } },
  NOT_FOUND: { path: URL.NOT_FOUND, options: { state: '' } },
};

const menuDepths = [
  {
    path: URL.INTRODUCTION,
    title: '앱 소개',
  },
  { path: URL.MY_PAGE, title: '마이 페이지' },
  {
    path: URL.QUIZ_GAME,
    title: '미디어 리터러시',
    subMenu: [
      { path: URL.QUIZ_HOME, title: '미디어 리터러시 퀴즈' },
      { path: URL.QUIZ_CATEGORY, title: '미디어 리터러시 게임' },
    ],
  },
  {
    path: URL.MY_STAMP,
    title: '스탬프',
  },
  {
    path: URL.RANKING,
    title: '랭킹',
  },
  {
    path: URL.SHOP,
    title: '상점',
  },

  {
    path: URL,
    title: '문의하기',
    subMenu: [
      { path: URL.INQUIRY_FORM, title: '문의하기' },
      { path: URL.INQUIRY_HISTORY, title: '문의내역' },
    ],
  },
];

export { navLinks, menuDepths };
