import React, { useEffect, useId } from 'react';

import { Field } from 'formik';

import {
  StyledAlert,
  StyledLabeledTextInput,
  StyledLabeledTextInputContainer,
  StyledLabeledTextInputLabel,
} from './Input.styled';

export default function LabeledTextInput({
  type = 'text',
  name = '',
  title = '',
  placeholder = '입력해주세요.',
  disabled = false,
  readonly = false,
  errorEvent = null,
  children,
  ...props
}) {
  const id = useId();
  return (
    <Field name={name}>
      {({ field, meta }) => {
        useEffect(() => {
          if (errorEvent) {
            errorEvent(meta.touched && meta.error ? true : false);
          }
        }, [meta.touched, meta.error, errorEvent]);

        return (
          <>
            <StyledLabeledTextInputContainer>
              <StyledLabeledTextInputLabel htmlFor={id}>
                {meta.touched && meta.error ? (
                  <StyledAlert>{meta.error}</StyledAlert>
                ) : (
                  <>
                    {title}
                    <span>*</span>
                  </>
                )}
              </StyledLabeledTextInputLabel>
              <StyledLabeledTextInput
                id={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readonly}
                {...field}
                {...meta}
                {...props}
              />
            </StyledLabeledTextInputContainer>
          </>
        );
      }}
    </Field>
  );
}
