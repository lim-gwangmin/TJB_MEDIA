import React from 'react';

import iconCloseMenu from '@assets/icons/icon_close.svg';
import setting from '@assets/icons/icon_setting.svg';
import logo from '@assets/images/logo.svg';

import { navLinks } from '@routes/navLinks';
import { SETTINGS } from '@routes/url';

import {
  StyledNavButtonWrapper,
  StyledNavCloseButton,
  StyledNavHeader,
  StyledNavSetting,
} from './Nav.styled';

export default function NavHeader({ setVisible }) {
  return (
    <StyledNavHeader>
      <img src={logo} alt="" />
      <StyledNavButtonWrapper>
        <StyledNavSetting to={navLinks[SETTINGS].path}>
          <img src={setting} alt="" />
        </StyledNavSetting>
        <StyledNavCloseButton onClick={() => setVisible(false)}>
          <img src={iconCloseMenu} alt="Close menu" />
        </StyledNavCloseButton>
      </StyledNavButtonWrapper>
    </StyledNavHeader>
  );
}
