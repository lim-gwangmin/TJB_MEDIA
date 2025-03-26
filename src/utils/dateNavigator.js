// 이전 달 버튼 기능
export function prevMonth(dateStr) {
  let year = parseInt(dateStr.slice(0, 4), 10);
  let month = parseInt(dateStr.slice(4, 6), 10);

  month -= 1; // 이전 달로 이동

  if (month < 1) {
    month = 12; // 1월보다 작으면 12월로 변경
    year -= 1; // 전년도 이동
  }

  dateStr = `${year}${String(month).padStart(2, '0')}`;
  return dateStr;
}

// 다음 달 버튼 기능
export function nextMonth(dateStr) {
  let year = parseInt(dateStr.slice(0, 4), 10);
  let month = parseInt(dateStr.slice(4, 6), 10);

  month += 1; // 다음 달로 이동

  if (month > 12) {
    month = 1; // 12월보다 크면 1월로 변경
    year += 1; // 다음 년도 이동
  }

  dateStr = `${year}${String(month).padStart(2, '0')}`;

  return dateStr;
}
