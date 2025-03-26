import React, { useEffect } from 'react';

import { Field } from 'formik';
import { useFormikContext } from 'formik';

import { StyledAlert } from '@components/atoms/Input/Input.styled';

import { StyledTextArea } from './TextArea.styled';

export default function TextArea({
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
            <StyledTextArea
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
