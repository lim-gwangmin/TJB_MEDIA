import React, { useId } from 'react';

import {
  StyledTermsCheckbox,
  StyledTermsCheckboxContainer,
  StyledTermsCheckboxLabel,
  StyledTermsCheckboxText,
} from './Terms.styled';

export default function TermsCheckBox({
  value = '',
  name = '',
  size = 16,
  checked = false,
  disabled = false,
  readonly = false,
  onChange,
  children,
  ...props
}) {
  const id = useId();
  const handleChange = (e) => {
    if (!onChange) return;

    onChange({ checked: e.target.checked, value });
  };
  return (
    <StyledTermsCheckboxContainer>
      <StyledTermsCheckbox
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        readOnly={readonly}
        disabled={disabled}
        onChange={handleChange}
        value={value}
      />
      <StyledTermsCheckboxLabel htmlFor={id} readOnly={readonly} disabled={disabled} {...props}>
        <StyledTermsCheckboxText size={size}>{children}</StyledTermsCheckboxText>
      </StyledTermsCheckboxLabel>
    </StyledTermsCheckboxContainer>
  );
}
