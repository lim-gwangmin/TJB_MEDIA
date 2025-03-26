import React, { useRef } from 'react';

import { AuthService } from '@services/authService';

import { Menus } from '@components/atoms/Nav';

import { useOnClickOutside } from '@hooks/useOutsideClick';

import { StyledLogoutBtn, StyledNav, StyledNavWrapper } from './Nav.styled';
import NavHeader from './NavHeader';

export default function Nav({ visible, setVisible, subMenu }) {
  const navRef = useRef(null);

  useOnClickOutside(navRef, () => setVisible(false));

  const handleLogout = () => {
    if (!confirm('로그아웃 하시겠습니까?')) return;

    AuthService.logOut();
  };

  if (!subMenu) return null;

  return (
    <StyledNav ref={navRef} visible={visible} onClick={() => setVisible(false)}>
      <StyledNavWrapper onClick={(e) => e.stopPropagation()}>
        <NavHeader setVisible={setVisible} />
        <Menus />
        <StyledLogoutBtn onClick={handleLogout} />
      </StyledNavWrapper>
    </StyledNav>
  );
}
