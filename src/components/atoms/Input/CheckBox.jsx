import React, { useId } from 'react';

import { Field } from 'formik';

import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledCheckboxLabel,
  StyledCheckboxText,
} from './Input.styled';

export default function Checkbox({
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
    setValue(e.target.checked);
    if (onChange) {
      onChange({ checked: e.target.checked, value });
    }
  };
  return (
    <StyledCheckboxContainer>
      <Field name={name}>
        {({ field }) => (
          <>
            <StyledCheckbox
              id={id}
              type="checkbox"
              name={name}
              readOnly={readonly}
              disabled={disabled}
              onChange={handleChange}
              value={value}
              {...field}
            />
            <StyledCheckboxLabel htmlFor={id} readOnly={readonly} disabled={disabled} {...props}>
              <StyledCheckboxText size={size}>{children}</StyledCheckboxText>
            </StyledCheckboxLabel>
          </>
        )}
      </Field>
    </StyledCheckboxContainer>
  );
}
