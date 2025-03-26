import React from 'react';
import { NavLink } from 'react-router-dom';

import icon_arrow from '@assets/icons/icon_arrow_right_small.svg';

import { TermsCheckbox } from '@components/atoms/Terms';

import { StyledTermsItem } from './Terms.styled';

export default function TermsItem({ checked, value, link, onChange, children }) {
  return (
    <StyledTermsItem>
      <TermsCheckbox checked={checked} value={value} onChange={onChange}>
        {children}
      </TermsCheckbox>
      <NavLink to={link} style={{ padding: '1rem' }}>
        <img src={icon_arrow} />
      </NavLink>
    </StyledTermsItem>
  );
}
