import React from 'react';

import { StyledTabMenuButton } from './Button.styled';

export default function TabMenuButton({ tabKey, active = false, children, onClick, ...props }) {
  return (
    <div style={{ display: 'table-cell' }}>
      <StyledTabMenuButton active={active} onClick={() => onClick(tabKey)} {...props}>
        {children}
      </StyledTabMenuButton>
    </div>
  );
}
