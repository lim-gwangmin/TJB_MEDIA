import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavButton({ url = '/', children, ...props }) {
  return (
    <NavLink to={url} {...props}>
      {children}
    </NavLink>
  );
}
