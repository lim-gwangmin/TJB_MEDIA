import * as Yup from 'yup';

// 로그인 스키마
export const loginSchema = {
  initialValues: { userId: '', userPw: '', rememberMe: false },
  schema: Yup.object({
    userId: Yup.string().min(3, '아이디가 틀렸습니다.').required('아이디를 입력해주세요.'),
    userPw: Yup.string().min(3, '비밀번호가 틀렸습니다.').required('비밀번호를 입력해주세요.'),
    rememberMe: Yup.boolean(),
  }),
};
// 휴대폰 인증번호 요청 스키마
/**
 * type
 * 회원가입: signUp,
 * 아이디,비밀번호찾기: find
 */
export const phoneVerificationSchema = {
  signUpValues: { type: 'signup', userNm: '', phone: '', mobileCarrier: '' },
  findValues: { type: 'find', userNm: '', phone: '', mobileCarrier: '' },
  initialValues: { type: '', userNm: '', phone: '', mobileCarrier: '' },
  schema: Yup.object({
    userNm: Yup.string().required('이름을 입력해주세요.'),
    mobileCarrier: Yup.string().min(1, '통신사를 선택해주세요.').required('통신사를 선택해주세요.'),
    phone: Yup.string().min(4).required('휴대폰 번호를 입력해주세요.'),
  }),
};
// 아이디와 함께 휴대폰 인증번호 요청 스키마
export const phoneVerificationWithUserIdSchema = {
  signUpValues: { type: 'signup', userId: '', userNm: '', phone: '', mobileCarrier: '' },
  findValues: { type: 'find', userId: '', userNm: '', phone: '', mobileCarrier: '' },
  initialValues: { type: '', userId: '', userNm: '', phone: '', mobileCarrier: '' },
  schema: Yup.object({
    userId: Yup.string().required('아이디를 입력해주세요.'),
    userNm: Yup.string().required('이름을 입력해주세요.'),
    mobileCarrier: Yup.string().min(1, '통신사를 선택해주세요.').required('통신사를 선택해주세요.'),
    phone: Yup.string().min(4).required('휴대폰 번호를 입력해주세요.'),
  }),
};
// 회원정보 스키마
export const userInfoSchema = {
  initialValues: {
    userId: '',
    userPw: '',
    userPwConfirm: '',
    userNm: '',
    userPhoneNo: '',
    userEmail: '',
    userAgeCd: 'm', // 기본값
    schoolCd: '',
    schoolNm: '',
    grade: '',
    classNo: '',
  },
  schema: Yup.object().shape({
    userId: Yup.string()
      .min(6, '아이디는 영문 소문자와 숫자만 포함하며 4~16자리여야 합니다.')
      .required('아이디를 입력해주세요.')
      .matches(/^[a-z0-9]{4,16}$/, '아이디는 영문 소문자와 숫자만 포함하며 4~16자리여야 합니다.'),
    userPw: Yup.string()
      .min(6, '비밀번호는 영문, 숫자, 특수기호를 포함한 8~16자리여야 합니다.')
      .required('비밀번호를 입력해주세요.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
        '비밀번호는 영문, 숫자, 특수기호를 포함한 8~16자리여야 합니다.',
      ),
    userPwConfirm: Yup.string()
      .required('비밀번호를 확인해주세요.')
      .oneOf([Yup.ref('userPw')], '비밀번호가 일치하지 않습니다.'),
    userNm: Yup.string().required('이름을 입력해주세요.'),
    userPhoneNo: Yup.string().required('전화번호를 입력해주세요.'),
    userEmail: Yup.string()
      .required('이메일을 입력해주세요.')
      .matches(/@/, '유효한 이메일을 입력해주세요.'),
    userAgeCd: Yup.string().required('옵션을 선택해야 합니다'),
    schoolCd: Yup.string().when('userAgeCd', (userAgeCd, schema) => {
      if (userAgeCd[0] === 'n') {
        return Yup.string();
      }
      return Yup.string().required('');
    }),
    schoolNm: Yup.string().when('userAgeCd', (userAgeCd, schema) => {
      if (userAgeCd[0] === 'n') {
        return Yup.string();
      }
      return Yup.string().required('학교 선택해주세요.');
    }),
    grade: Yup.string().when('userAgeCd', (userAgeCd, schema) => {
      if (userAgeCd[0] === 'n') {
        return Yup.string();
      }
      return Yup.string().required('학년을 선택해주세요.');
    }),
    classNo: Yup.string().when('userAgeCd', (userAgeCd, schema) => {
      if (userAgeCd[0] === 'n') {
        return Yup.string();
      }
      return Yup.string().required('반 번호를 선택해주세요.');
    }),
  }),
};

// 회원정보 수정 스키마
export const userEditInfoSchema = {
  initialValues: {
    userId: '',
    userPw: '',
    userPwConfirm: '',
    userNm: '',
    userPhoneNo: '',
    userEmail: '',
    userAgeCd: 'm', // 기본값
    schoolCd: '',
    schoolNm: '',
    grade: '',
    classNo: '',
  },
  schema: Yup.object().shape({
    userId: Yup.string()
      .min(6, '아이디는 영문 소문자와 숫자만 포함하며 4~16자리여야 합니다.')
      .required('아이디를 입력해주세요.')
      .matches(/^[a-z0-9]{4,16}$/, '아이디는 영문 소문자와 숫자만 포함하며 4~16자리여야 합니다.'),
    // userPw: Yup.string()
    //   .min(6, '비밀번호는 영문, 숫자, 특수기호를 포함한 8~16자리여야 합니다.')
    //   .matches(
    //     /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
    //     '비밀번호는 영문, 숫자, 특수기호를 포함한 8~16자리여야 합니다.',
    //   ),
    // userPwConfirm: Yup.string()
    //   .required('비밀번호를 확인해주세요.')
    //   .oneOf([Yup.ref('userPw')], '비밀번호가 일치하지 않습니다.'),
    userPw: Yup.string()
      .nullable()
      .min(6, '비밀번호는 영문, 숫자, 특수기호를 포함한 8~16자리여야 합니다.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
        '비밀번호는 영문, 숫자, 특수기호를 포함한 8~16자리여야 합니다.',
      ),
    userPwConfirm: Yup.string()
      .nullable()
      .oneOf([Yup.ref('userPw'), null], '비밀번호가 일치하지 않습니다.'),
    userNm: Yup.string().required('이름을 입력해주세요.'),
    userPhoneNo: Yup.string().required('전화번호를 입력해주세요.'),
    userEmail: Yup.string()
      .required('이메일을 입력해주세요.')
      .matches(/@/, '유효한 이메일을 입력해주세요.'),
    userAgeCd: Yup.string().required('옵션을 선택해야 합니다'),
    schoolCd: Yup.string().when('userAgeCd', (userAgeCd, schema) => {
      if (userAgeCd[0] === 'n') {
        return Yup.string();
      }
      return Yup.string().required('');
    }),
    schoolNm: Yup.string().when('userAgeCd', (userAgeCd, schema) => {
      if (userAgeCd[0] === 'n') {
        return Yup.string();
      }
      return Yup.string().required('학교 선택해주세요.');
    }),
    grade: Yup.string().when('userAgeCd', (userAgeCd, schema) => {
      if (userAgeCd[0] === 'n') {
        return Yup.string();
      }
      return Yup.string().required('학년을 선택해주세요.');
    }),
    classNo: Yup.string().when('userAgeCd', (userAgeCd, schema) => {
      if (userAgeCd[0] === 'n') {
        return Yup.string();
      }
      return Yup.string().required('반 번호를 선택해주세요.');
    }),
  }),
};

// 비밀번호 변경 스키마
export const changePasswordSchema = {
  initialValues: { userCd: '', userNewPw: '', userNewPwConfirm: '' },
  schema: Yup.object({
    userCd: Yup.string().required(''),
    userNewPw: Yup.string()
      .min(6, '비밀번호는 영문, 숫자, 특수기호를 포함한 8~16자리여야 합니다.')
      .required('비밀번호를 입력해주세요.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
        '비밀번호는 영문, 숫자, 특수기호를 포함한 8~16자리여야 합니다.',
      ),
    userNewPwConfirm: Yup.string()
      .required('비밀번호를 확인해주세요.')
      .oneOf([Yup.ref('userNewPw')], '비밀번호가 일치하지 않습니다.'),
  }),
};
