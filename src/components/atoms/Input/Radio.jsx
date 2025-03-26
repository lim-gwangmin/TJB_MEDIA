import React, { useId } from 'react';

import {
  StyledRadio,
  StyledRadioLabel,
  StyledRadioText,
  StyleRadioContainer,
} from './Input.styled';

export default function Radio({
  text = '',
  value = '',
  name = '',
  size = 16,
  isChecked = false,
  disabled = false,
  readonly = false,
  onChange,
  ...props
}) {
  const id = useId();

  const handleChange = (e) => {
    if (!onChange) return;
    onChange({ checked: e.target.checked, value });
  };
  return (
    <StyleRadioContainer>
      <StyledRadio
        id={id}
        type="radio"
        name={name}
        isChecked={isChecked}
        disabled={disabled}
        readOnly={readonly}
        onChange={handleChange}
        value={value}
      />
      <StyledRadioLabel htmlFor={id} {...props}>
        <StyledRadioText size={size}>{text}</StyledRadioText>
      </StyledRadioLabel>
    </StyleRadioContainer>
  );
}
