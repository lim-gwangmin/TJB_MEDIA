// 퍼센테이지 계산
export function calculatePercentage(numerator, denominator) {
  if (denominator === 0) {
    return 0; // 0으로 나눌 수 없으므로 0 반환
  }
  return (numerator / denominator) * 100;
}

// 백분율 계산 함수
export function getPercentageWithPrecision(numerator, denominator) {
  if (denominator === 0) {
    return 0; // 0으로 나눌 수 없으므로 0 반환
  }

  const percentage = (numerator / denominator) * 100;

  // 소수점 없이 정수로 반환
  return Math.floor(percentage);
}
