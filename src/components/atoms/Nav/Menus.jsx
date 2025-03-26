import React, { useState } from 'react';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { menuDepths } from '@routes/navLinks';

import { StyledMenuButton, StyledMenuItem, StyledNav, StyledSubMenu } from './Nav.styled';

const RecursiveMenu = ({ menus, openMenu, onMenuClick, sub = false }) => {
  const { goToPage } = useCustomNavigate();
  return (
    <StyledSubMenu sub={sub}>
      {menus.map((menu) => {
        const hasSubMenu = Boolean(menu.subMenu);
        const isOpen = openMenu === menu.path;
        return (
          <StyledMenuItem key={menu.path}>
            <StyledMenuButton
              isOpen={isOpen ? true : false}
              hasSubMenu={hasSubMenu}
              onClick={() => {
                if (hasSubMenu) {
                  onMenuClick(menu.path);
                } else {
                  goToPage(menu.path);
                  onMenuClick(null);
                }
              }}
              type="button"
            >
              {menu.title}
            </StyledMenuButton>
            {hasSubMenu && isOpen && (
              <RecursiveMenu
                menus={menu.subMenu}
                openMenu={openMenu}
                onMenuClick={onMenuClick}
                sub={true}
              />
            )}
          </StyledMenuItem>
        );
      })}
    </StyledSubMenu>
  );
};

export default function Menus() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (path) => {
    setOpenMenu(openMenu === path ? null : path); // 클릭한 메뉴가 열려있다면 닫기, 아니라면 열기
  };

  return (
    <StyledNav>
      <RecursiveMenu menus={menuDepths} openMenu={openMenu} onMenuClick={handleMenuClick} />
    </StyledNav>
  );
}
