// 게시물 관련
//약관 관련
import { get_agreement, get_agreementCategory, get_agreementDetail } from './agreementApi';
import {
  delete_boardRemove,
  get_boardList,
  get_boardListDetail,
  post_boardCreate,
  put_boardUpdate,
} from './boardApi';
// 포인트 관련
import { get_point } from './pointApi';
// 퀴즈 관련
import {
  get_quizAccuracy,
  get_quizCategory,
  get_quizList,
  post_quiz_solve,
  post_quizResults,
} from './quizApi';
// 랭킹 관련
import { get_weekRank } from './rankAPi';
// 상점 관련
import { get_brandList, get_productDetail, get_productList, post_purchase } from './shopApi';
//스탬프 관련
import { get_detailStamp, get_userStamp } from './stampApi';
// 회원 관련
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
} from './userApi';

export {
  //유저 관련
  post_loginUser,
  put_changeUserDatas,
  post_userDrop,
  get_user,
  get_userDatas,
  post_signUp,
  post_checkDuplicateId,
  post_requestSMSCode,
  post_verifyMembershipWithId,
  post_verifyMembershipWithoutId,
  get_schoolList,
  post_changePassword,
  get_logOut,
  post_attendance,

  // 퀴즈 관련
  get_quizCategory,
  get_quizList,
  post_quizResults,
  get_quizAccuracy,
  post_quiz_solve,
  // 랭킹 관련
  get_weekRank,
  // 스탬프 관련
  get_detailStamp,
  get_userStamp,
  // 포인트 관련
  get_point,
  // 상점 관련
  get_brandList,
  get_productDetail,
  get_productList,
  post_purchase,

  //약관 관련
  get_agreement,
  get_agreementCategory,
  get_agreementDetail,
  // 게시물 관련
  get_boardList,
  get_boardListDetail,
  post_boardCreate,
  put_boardUpdate,
  delete_boardRemove,
};
