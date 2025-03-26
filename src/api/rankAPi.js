import { axiosInstance } from './axiosInstance';

/**
 * searchLankTy: 랭킹 검색 타입 (student, school)
 * searchWeek: 랭킹 검색 주 (this, last)
 * PageUnit: 검색할 목록 갯수
 * PageIndex: 검색 시작 index
 */

// 주간 랭킹
export const get_weekRank = ({ searchLankTy, searchWeek, pageUnit, pageIndex }) => {
  return axiosInstance.get(
    `/api/game/lank/week?searchLankTy=${searchLankTy}&searchWeek=${searchWeek}&pageUnit=${pageUnit}&pageIndex=${pageIndex}`,
  );
};
