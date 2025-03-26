import * as Yup from 'yup';

// 문의하기 폼 스키마
export const inquiryFormSchema = {
  initialValues: { articleNm: '', articleContent: '' },
  schema: Yup.object({
    articleNm: Yup.string().required('제목을 입력해주세요.'),
    articleContent: Yup.string().required('문의 내용을 입력해주세요.'),
  }),
};

//  게시물 리스트 조회 스키마
export const BOARD_LIST_SCHEMA = {
  pageUnit: 20,
  pageIndex: 1,
};
