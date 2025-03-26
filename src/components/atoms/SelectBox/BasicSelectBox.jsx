import React, { useEffect } from 'react';

import styled from '@emotion/styled';
import { Field } from 'formik';

import iconArrow from '@assets/icons/icon_select_arrow.svg';

export default function BasicSelectBox({
  value = '',
  name = '',
  options = [],
  isChecked = false,
  disabled = false,
  readonly = false,
  errorEvent = null,
  onChange,
  ...props
}) {
  const handleChange = (e) => {
    if (!onChange) return;
    onChange({ value: e.target.value });
  };

  return (
    <Field name={name} onChange={handleChange}>
      {({ field, meta }) => {
        useEffect(() => {
          if (errorEvent) {
            errorEvent(meta.touched && meta.error ? true : false);
          }
        }, [meta.touched, meta.error, errorEvent]);
        return (
          <StyledSelectBox
            className={meta.touched && meta.error && 'error'}
            name={name}
            value={field.value}
            isChecked={isChecked}
            readOnly={readonly}
            disabled={disabled}
            {...field}
            {...props}
          >
            {options.map((option, index) => (
              <option key={index} value={option.key}>
                {option.label}
              </option>
            ))}
          </StyledSelectBox>
        );
      }}
    </Field>
  );
}

const StyledSelectBox = styled('select')`
  display: inline-block;
  color: #111111;
  border-radius: 0.6rem;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #dadada;
  appearance: none;
  font-size: 1.6rem;
  height: 5.8rem;
  padding: 2rem 3.5rem 2rem 2rem;
  background: url(${iconArrow}) right 2rem center / auto no-repeat;
  &:disabled {
    background-color: #fafafa;
    background-image: none;
  }
  &.error {
    border-color: red;
  }
`;
