const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 2자리로 설정
const formattedDate = `${year}${month}`;

// 포인트 조회 API 데이터 스키마
export const POINT_SERVICE_SCHEMA = {
  searchDt: formattedDate, // 검색할 날짜
  searchPointTy: 'all', //  plus: 적립, minus: 사용, all: 전체
  pageUnit: 10,
  pageIndex: 1,
};

export const POINT_SCHEMA = {
  createDt: '', // 포인트 변경 날짜
  pointDc: '', // 포인트 내용
  point: 0, // 포인트
};
