import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const UserCard = styled('div')`
   padding 2rem 2.3rem;
   border-bottom-left-radius: 1rem;
   border-bottom-right-radius: 1rem;
   background-color:#fff;
   display:flex;
   justify-content:space-between;
   gap:2rem;
`;

export const UserThumnail = styled('span')`
  display: inline-block;
  vertical-align: center;
  flex: 1 0 6rem;
  width: 6rem;
  height: 6rem;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #ffcd1b;
  border-radius: 100%;
`;

export const SettingNavigate = styled(NavLink)`
  padding: 1rem 0 1rem 1rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  color: #505050;
  line-height: 1px;
  font-size: 1.6rem;
`;
