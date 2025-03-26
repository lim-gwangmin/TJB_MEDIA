import React from 'react';

import hamburgerMenu from '@assets/icons/icon_hamburger_menu.svg';

import { StyledHamburgerButton } from './Button.styled';

export default function HamburgerButton({ setVisible, subMenu }) {
  if (!subMenu) return null;
  return (
    <StyledHamburgerButton onClick={() => setVisible(true)}>
      <img src={hamburgerMenu} alt="Open menu" />
    </StyledHamburgerButton>
  );
}
