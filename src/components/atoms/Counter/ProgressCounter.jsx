import React from 'react';

import { StyledProgressCount, StyledProgressCounter } from './Counter.styled';

export default function ProgressCounter({ count = '', total = '', unit = '' }) {
  return (
    <StyledProgressCounter>
      <StyledProgressCount>{count}</StyledProgressCount> / 총 {total}
      {unit}
    </StyledProgressCounter>
  );
}
