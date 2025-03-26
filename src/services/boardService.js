import {
  delete_boardRemove,
  get_boardList,
  get_boardListDetail,
  post_boardCreate,
  put_boardUpdate,
} from '@api';

import { isTokenExpired } from '@utils/tokenManager';

export const BoardService = {
  // 게시물 목록 조회
  boardList: async (data) => {
    console.log(data, 'data');
    try {
      const response = await get_boardList(data);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired.result;
    } catch (error) {
      const { response } = error;
      console.error('findPassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 게시물 상세 조회
  boardListDetail: async (data) => {
    try {
      const response = await get_boardListDetail(data);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired.result.data;
    } catch (error) {
      const { response } = error;
      console.error('findPassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 게시물 추가
  boardCreate: async (data) => {
    try {
      const response = await post_boardCreate(data);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired;
    } catch (error) {
      const { response } = error;
      console.error('findPassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 게시물 수정
  boardUpdate: async (data) => {
    try {
      const response = await put_boardUpdate(data);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired.result.data;
    } catch (error) {
      const { response } = error;
      console.error('findPassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
  // 게시물 삭제
  boardRemove: async (data) => {
    try {
      const response = await delete_boardRemove(data);
      // 에러 처리
      const expired = isTokenExpired(response.data);

      return expired.result.data;
    } catch (error) {
      const { response } = error;
      console.error('findPassword failed:', error);
      isTokenExpired(response.data);
      throw error;
    }
  },
};
