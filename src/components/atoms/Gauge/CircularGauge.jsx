import React, { useEffect, useState } from 'react';

export default function CircularGauge({ value, maxValue, size = 120, strokeWidth = 10 }) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedValue / maxValue) * circumference;

  // 색상 그라데이션 계산 (같은 방식으로 유지)
  const getGradientColor = () => {
    const startColor = '#FFCD1B';
    const endColor = '#FFA133';

    const percentage = animatedValue / maxValue;
    const startRGB = hexToRGB(startColor);
    const endRGB = hexToRGB(endColor);

    const resultRGB = {
      r: Math.round(startRGB.r + (endRGB.r - startRGB.r) * percentage),
      g: Math.round(startRGB.g + (endRGB.g - startRGB.g) * percentage),
      b: Math.round(startRGB.b + (endRGB.b - startRGB.b) * percentage),
    };

    return `rgb(${resultRGB.r}, ${resultRGB.g}, ${resultRGB.b})`;
  };

  const hexToRGB = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  // 애니메이션을 위한 useEffect
  useEffect(() => {
    const animationDuration = 1000; // 1초 동안 애니메이션
    const startValue = 0;
    const endValue = value;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / animationDuration, 1); // 0에서 1까지

      const newValue = startValue + (endValue - startValue) * progress;
      setAnimatedValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <svg width={size} height={size}>
      {/* 배경 원 */}
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      {/* 게이지 원 */}
      <circle
        stroke={getGradientColor()}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        style={{
          transition: 'stroke-dashoffset 0.35s ease-out, stroke 0.35s ease-out',
        }}
      />
      {/* 중앙 텍스트 */}
      <text
        x="50%" // 가로 중앙 정렬
        y="40%" // 세로 중앙 정렬
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="1.8rem"
        fill="#ACACAC"
      >
        정답률
      </text>
      <text
        x="50%" // 가로 중앙 정렬
        y="60%" // 세로 중앙 정렬
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="1.7rem"
        fontWeight="bold"
        fill="#FFCD1B"
      >
        {Math.round((animatedValue / maxValue) * 100)}%
      </text>
    </svg>
  );
}
