import React from 'react';

import { DefaultTabButton, DefaultTabContainer } from './Tab.styled';

export default function DefaultTabMenu({ tabs = [], data, onClick }) {
  return (
    <div style={{ borderBottom: '1px solid #EAEAEA', backgroundColor: '#f6f6f6' }}>
      <DefaultTabContainer>
        {tabs.map((tab) => (
          <DefaultTabButton
            key={tab.key}
            tabKey={tab.key}
            onClick={() => onClick({ searchLankTy: tab.key })}
            active={tab.key === data.searchLankTy}
          >
            {tab.label}
          </DefaultTabButton>
        ))}
      </DefaultTabContainer>
    </div>
  );
}
