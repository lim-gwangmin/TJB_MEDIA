import React from 'react';

import { TabMenuButton } from '@components/atoms/Button';

import { StyledTabMenu } from './Tab.styled';

export default function TabMenu({ tabs = [], onClick, ...props }) {
  return (
    <StyledTabMenu {...props}>
      {tabs.map((tab) => (
        <TabMenuButton key={tab.key} tabKey={tab.key} onClick={onClick} active={tab.active}>
          {tab.label}
        </TabMenuButton>
      ))}
    </StyledTabMenu>
  );
}
