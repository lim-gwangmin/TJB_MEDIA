import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import imageLogout from '@assets/icons/icon_logout.svg';

export const StyledNav = styled('nav')`
  position: fixed;
  width: 100%;
  height: 100dvh;
  top: 0;
  right: ${({ visible }) => (visible === true ? '0' : '-100%')};
  opacity: ${({ visible }) => (visible === true ? '1' : '0')};
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
  transition: all 0.3s;
`;

export const StyledNavWrapper = styled('div')`
  position: relative;
  background-color: #fff;
  width: 100%;
  max-width: 400px;
  height: 100%;
  float: right;
  z-index: 2;
`;

export const StyledNavCloseButton = styled('button')`
  padding: 1rem;
`;

export const StyledNavHeader = styled('div')`
  display: flex;
  height: 5.6rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  gap: 2rem;
  margin-bottom: 2rem;
`;
export const StyledNavButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

export const StyledNavSetting = styled(NavLink)`
  padding: 1rem;
`;

export const StyledLogoutBtn = styled('button')`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  background-color: #ff881b;
  background-image: url(${imageLogout});
  background-position: center right 1.1rem;
  background-repeat: no-repeat;
  background-size: auto;
  &:active {
    opacity: 0.7;
    transform: translate(1px, 1px);
  }
`;
