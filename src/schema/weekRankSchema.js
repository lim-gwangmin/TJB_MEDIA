/**
 *searchLankTy// 랭킹 검색 타입 (student, school)
 *searchWeek  // 랭킹 검색 주 (this, last)
 *pageUnit // 검색할 목록 갯수
 *pageIndex // 검색 시작 index
 */

// 주간 학생 랭킹 스키마
export const WEEK_RANK_STUDENT_SCHEMA = {
  searchLankTy: 'student',
  searchWeek: 'this',
  pageUnit: 1,
  pageIndex: 1,
};
// 주간 학교 랭킹 스키마
export const WEEK_RANK_SCHOOL_SCHEMA = {
  searchLankTy: 'school',
  searchWeek: 'this',
  pageUnit: 1,
  pageIndex: 1,
};
