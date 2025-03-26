import React, { useId } from 'react';

import { StyledGeneralOption } from './Tab.styled';

export default function GeneralOption({
  name = '',
  value = '',
  checked = false,
  onChange,
  children,
}) {
  const id = useId();

  return (
    <StyledGeneralOption>
      <input id={id} name={name} type="radio" value={value} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{children}</label>
    </StyledGeneralOption>
  );
}
