export function replaceLastThreeChars(str) {
  if (str.length <= 3) {
    // 문자열 길이가 3 이하인 경우, 전부 *로 교체
    return '*'.repeat(str.length);
  } else {
    // 마지막 3글자를 *로 교체
    return str.slice(0, -3) + '***';
  }
}

export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
