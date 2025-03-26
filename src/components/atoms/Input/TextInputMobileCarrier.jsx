import React, { useEffect } from 'react';

import { Field } from 'formik';

import { StyledTextInputMobileCarrier } from './Input.styled';

export default function TextInputMobileCarrier({ errorEvent }) {
  // 숫자 입력 함수
  const handleInputChange = (e) => {
    const value = e.target.value;

    // 숫자만 입력 가능하게 제한
    const onlyNumbers = value.replace(/[^0-9]/g, '').slice(0, 11);

    e.target.value = onlyNumbers; // 11자리까지만 유지
  };
  return (
    <Field name="phone">
      {({ field, meta }) => {
        useEffect(() => {
          if (errorEvent) {
            errorEvent(meta.touched && meta.error ? true : false);
          }
        }, [meta.touched, meta.error, errorEvent]);
        return (
          <StyledTextInputMobileCarrier {...field} onInput={handleInputChange} maxLength="11" />
        );
      }}
    </Field>
  );
}
