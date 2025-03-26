import React from 'react';

import logo from '@assets/images/logo.svg';

import { navLinks } from '@routes/navLinks';
import { HOME } from '@routes/url';

import { StyledLogoButton } from './Button.styled';

export default function LogoButton() {
  return (
    <StyledLogoButton to={navLinks[HOME].path}>
      <img src={logo} alt="로고" />
    </StyledLogoButton>
  );
}
