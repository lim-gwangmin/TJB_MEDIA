// 인증 스키마
import {
  changePasswordSchema,
  loginSchema,
  phoneVerificationSchema,
  phoneVerificationWithUserIdSchema,
  userEditInfoSchema,
  userInfoSchema,
} from './authSchema';
// 문의 스키마
import { BOARD_LIST_SCHEMA, inquiryFormSchema } from './inquiryFormSchema';
// 포인트 스키마
import { POINT_SCHEMA, POINT_SERVICE_SCHEMA } from './pointSchema';
// 상점 스키마
import { PRODUCT_LIST_SCHEMA } from './shopSchema';
// 유저 스키마
import { USER_DATA_SCHEMA } from './userSchema';
// 랭킹 스키마
import { WEEK_RANK_SCHOOL_SCHEMA, WEEK_RANK_STUDENT_SCHEMA } from './weekRankSchema';

export {
  // 유저 스키마
  loginSchema,
  phoneVerificationSchema,
  userInfoSchema,
  userEditInfoSchema,
  changePasswordSchema,
  phoneVerificationWithUserIdSchema,
  // 인증 스키마
  USER_DATA_SCHEMA,

  // 랭킹 스키마
  WEEK_RANK_STUDENT_SCHEMA,
  WEEK_RANK_SCHOOL_SCHEMA,

  // 포인트 스키마
  POINT_SCHEMA,
  POINT_SERVICE_SCHEMA,

  // 상점 스키마
  PRODUCT_LIST_SCHEMA,
  //문의 스키마
  inquiryFormSchema,
  BOARD_LIST_SCHEMA,
};
