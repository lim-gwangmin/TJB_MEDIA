import React, { useEffect } from 'react';

import { Field } from 'formik';
import { useFormikContext } from 'formik';

import { StyledAlert, StyledBasicTextInput } from './Input.styled';

export default function BasicTextInput({
  type = 'text',
  name = '',
  placeholder = '입력해주세요.',
  size = 18,
  disabled = false,
  readonly = false,
  onInput = null,
  value = '',
  errorEvent = null,
  ...props
}) {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        useEffect(() => {
          if (errorEvent) {
            errorEvent(meta.touched && meta.error ? true : false);
          }
        }, [meta.touched, meta.error, errorEvent]);

        return (
          <div>
            <StyledBasicTextInput
              type={type}
              size={size}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readonly}
              onInput={onInput}
              value={field.value}
              {...field}
              {...props}
            />
            {meta.touched && meta.error ? <StyledAlert top={5}>{meta.error}</StyledAlert> : null}
          </div>
        );
      }}
    </Field>
  );
}
