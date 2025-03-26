import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BackButton, HamburgerButton } from '@components/atoms/Button';
import { HeaderState } from '@components/molecules/Header';
import { Nav } from '@components/molecules/Nav';

import { StyledHeader } from './Header.styled';

export default function Header({
  bgColor = '#fff',
  border = 1,
  backButton = false,
  title = '',
  titleAlign = 'center',
  subMenu = true,
  ...props
}) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, [location]);

  return (
    <StyledHeader id="header" bgColor={bgColor} border={border} {...props}>
      <BackButton backButton={backButton} />
      <HeaderState title={title} titleAlign={titleAlign} />
      <HamburgerButton setVisible={setVisible} subMenu={subMenu} />
      <Nav visible={visible} setVisible={setVisible} subMenu={subMenu} />
    </StyledHeader>
  );
}
