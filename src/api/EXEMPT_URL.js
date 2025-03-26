/**
 * 토큰이 필요하지 않는 API
 * method가 비어 있다면 해당 URL 모두 토큰 검증 없이 요청
 * method안 정의 되어있는 method type은 토큰 검증 없이 요청
 **/
const EXEMPT_URLS = [
  {
    url: '/api/login',
    methods: [],
  },
  {
    url: '/api/common/certi/code/phone',
    methods: [],
  },
  {
    url: '/api/common/certi/find/phone',
    methods: [],
  },
  {
    url: '/api/member/user/change-pw',
    methods: [],
  },
  {
    url: '/api/member/user',
    methods: ['post'],
  },
  {
    url: '/api/common/certi/find-id/phone',
    methods: [],
  },
  {
    url: '/api/common/certi/find-pw/phone',
    methods: [],
  },
  {
    url: '/api/member/user/checkDuplicateId',
    methods: [],
  },
  {
    url: '/api/setting/agreement',
    methods: [],
  },
  {
    url: /^\/api\/setting\/agreement\/.*/, // 모든 하위 URL을 허용하는 정규 표현식
    methods: [],
  },
];

export default EXEMPT_URLS;
