// 200: SUCCESS(200, "성공했습니다."),
// 403: AUTH_ERROR(403, "인가된 사용자가 아닙니다."),
// 500: SERVER_ERROR(403, "서버  오류"),
// 700: DELETE_ERROR(700, "삭제 중 내부 오류가 발생했습니다."),
// 800: SAVE_ERROR(800, "저장시 내부 오류가 발생했습니다."),
// 900: INPUT_CHECK_ERROR(900, "입력값 무결성 오류 입니다."),
// 1000: ERROR(1000, "일반 오류");

export const REQUEST_ERROR_CODE = [403, 500, 700, 800, 900, 1000];
