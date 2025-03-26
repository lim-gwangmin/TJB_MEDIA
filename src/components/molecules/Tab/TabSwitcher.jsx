import React, { useEffect, useRef, useState } from 'react';

import { StyledTab, StyledTabsIndicator, StyledTabsWrapper } from './Tab.styled';

export default function TabSwitcher({ onClick, tabList = [], ...props }) {
  const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭 인덱스
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 }); // Indicator의 위치와 너비를 저장
  const tabsRef = useRef([]); // 각 탭의 참조 배열

  const handleClick = (index, key) => {
    setActiveTab(index);
    onClick(key);
  };

  // 각 탭의 너비와 위치를 계산하여 Indicator 스타일을 업데이트하는 함수
  useEffect(() => {
    if (tabsRef.current[activeTab]) {
      const { offsetLeft, offsetWidth } = tabsRef.current[activeTab];
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <StyledTabsWrapper {...props}>
      {tabList.map((tab, index) => (
        <StyledTab
          key={index}
          active={activeTab === index}
          onClick={() => handleClick(index, tab.key)}
          ref={(el) => (tabsRef.current[index] = el)}
        >
          {tab.label}
        </StyledTab>
      ))}
      <StyledTabsIndicator left={indicatorStyle.left} width={indicatorStyle.width} />
    </StyledTabsWrapper>
  );
}
