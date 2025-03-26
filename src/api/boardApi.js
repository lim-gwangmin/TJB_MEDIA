import { axiosInstance } from './axiosInstance';

// 게시물 목록 조회
export const get_boardList = ({ searchBoardMasterCd = 'master-000000', pageIndex, pageUnit }) => {
  return axiosInstance.get(
    `/api/board/article?searchBoardMasterCd=${searchBoardMasterCd}&pageUnit=${pageUnit}&pageIndex=${pageIndex}`,
  );
};
// 게시물 상세 조회
export const get_boardListDetail = ({ articleCd }) => {
  return axiosInstance.get(`/api/board/article/${articleCd}`);
};
// 게시물 추가
export const post_boardCreate = ({ articleNm, articleContent }) => {
  return axiosInstance.post(`/api/board/article`, { articleNm, articleContent });
};
// 게시물 수정
export const put_boardUpdate = ({ articleCd, articleNm, articleContent }) => {
  return axiosInstance.put(`/api/board/article`, { articleCd, articleNm, articleContent });
};
// 게시물 삭제
export const delete_boardRemove = ({ articleCd }) => {
  return axiosInstance.put(`/api/board/article`, { articleCd });
};
