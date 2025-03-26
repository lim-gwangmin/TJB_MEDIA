import React, { useEffect, useState } from 'react';

import { StyledGauge, StyledGaugeBar } from './Gauge.styled';

export default function Gauge({
  width,
  height,
  bgColor = '#fff',
  barColor = '#FFCD1B',
  value = 0,
  icon = null,
  ...props
}) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 100); // Delay to allow for component to mount

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <StyledGauge bgColor={bgColor} {...props}>
      <StyledGaugeBar barColor={barColor} value={animatedValue}>
        {icon && <img src={icon} alt="게이지 아이콘" />}
      </StyledGaugeBar>
    </StyledGauge>
  );
}
