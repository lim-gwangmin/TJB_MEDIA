import React, { useId } from 'react';

import { CARRIER_OPTIONS } from '@constant';
import { Field } from 'formik';

import { StyledLabel, StyledLabeledSelectBox, StyledSelectBox } from './SelectBox.styled';

export default function LabeledSelectBox() {
  const id = useId();
  return (
    <Field name="mobileCarrier">
      {({ field, meta }) => {
        return (
          <StyledLabeledSelectBox>
            <StyledLabel htmlFor={id}>
              휴대폰 번호 <span>*</span>
            </StyledLabel>
            <StyledSelectBox id={id} error={meta.touched && meta.error ? true : false} {...field}>
              {CARRIER_OPTIONS.map((option, index) => (
                <option key={index} value={option.key}>
                  {option.label}
                </option>
              ))}
            </StyledSelectBox>
          </StyledLabeledSelectBox>
        );
      }}
    </Field>
  );
}
