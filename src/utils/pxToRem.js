// px => rem 단위 변경
export function pxToRem(px) {
  const BASE_PX = 10;

  if (typeof px === 'string') {
    px = parseFloat(px.replace('px', ''));
  }

  return `${px / BASE_PX}rem`;
}
