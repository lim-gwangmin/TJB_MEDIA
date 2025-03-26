import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const StyledGeneralTab = styled('ul')`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-flow: wrap;
  justify-content: start;
  margin-bottom: 2rem;
`;
export const StyledTabMenu = styled('nav')`
  display: table;
  table-layout: fixed;
  vertical-align: middle;
  width: 100%;
`;
export const StyledTabsWrapper = styled('div')`
  margin: 2rem auto;

  display: flex;
  width: 100%;
  position: relative;
  background-color: #ffec99;
  border-radius: 10rem;
`;
export const StyledTab = styled('button')`
position: relative;
font-size:1.6rem;
  flex: 1;
  padding: 1.5rem 1rem;
  text-align: center;
  color: ${({ active }) => (active ? '#000000' : '#666666')};
  transition:
  color: 0.3s;
    font-weight 0.3s;
  font-weight: ${({ active }) => (active ? 600 : 400)};
  z-index:1;
`;
export const StyledTabsIndicator = styled('div')`
  position: absolute;
  bottom: 0;
  left: ${({ left }) => `${left}px`};
  width: ${({ width }) => `${width}px`};
  height: 100%;
  background: #fff;
  border-radius: 10rem;
  box-shadow: 0 0 5px 2px rgba(246, 207, 70, 0.4);
  transition:
    left 0.3s ease-out,
    width 0.3s ease-out;
`;

export const DefaultTabContainer = styled('div')`
  display: flex;
  max-width: calc(1024px - 4rem);
  margin: 0 auto;
`;

export const DefaultTabButton = styled('button')`
  position: relative;
  font-size: 1.6rem;
  flex: 1;
  padding: 1.5rem 1rem;
  text-align: center;
  color: ${({ active }) => (active ? '#000000' : '#878787')};
  transition: all 0.3s;
  font-weight: ${({ active }) => (active ? 600 : 500)};
  z-index: 1;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: ${({ active }) => (active ? '100%' : '0%')};
    height: 2px;
    background-color: #ff881b;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: all 0.3s;
  }
`;
export const DefaultTabNavLink = styled('button')`
  position: relative;
  font-size: 1.6rem;
  flex: 1;
  padding: 1.5rem 1rem;
  text-align: center;
  color: ${({ active }) => (active ? '#000000' : '#878787')};
  transition: all 0.3s;
  font-weight: ${({ active }) => (active ? 600 : 500)};
  z-index: 1;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: ${({ active }) => (active ? '100%' : '0%')};
    height: 2px;
    background-color: #ffcd1b;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: all 0.3s;
  }
`;
