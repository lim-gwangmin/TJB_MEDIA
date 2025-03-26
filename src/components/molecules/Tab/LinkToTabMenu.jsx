import React from 'react';
import { useLocation } from 'react-router-dom';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { DefaultTabContainer, DefaultTabNavLink } from './Tab.styled';

export default function LinkToTabMenu({ tabs = [] }) {
  const { pathname } = useLocation();
  const { goToPage } = useCustomNavigate();
  return (
    <div style={{ borderBottom: '1px solid #EAEAEA' }}>
      <DefaultTabContainer>
        {tabs.map((tab, index) => (
          <DefaultTabNavLink
            key={index}
            onClick={() => goToPage(tab.url)}
            active={tab.url === pathname}
          >
            {tab.label}
          </DefaultTabNavLink>
        ))}
      </DefaultTabContainer>
    </div>
  );
}
