import React from 'react';

import { formatNumberWithCommas } from '@utils/replace';

import { StyledCoin } from './Coin.styled';

export default function Coin({ fontSize, color, fontWeight, top, price }) {
  const validPrice = isNaN(Number(price)) ? 0 : price; // NaN이면 기본값 0을 사용
  return (
    <StyledCoin fontSize={fontSize} color={color} fontWeight={fontWeight} top={top}>
      {formatNumberWithCommas(validPrice)}
    </StyledCoin>
  );
}
