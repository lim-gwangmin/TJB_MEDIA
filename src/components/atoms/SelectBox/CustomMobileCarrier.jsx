import React, { useEffect, useId, useState } from 'react';

import styled from '@emotion/styled';
import { Field } from 'formik';

const OPTIONS = [
  { label: '통신사', key: '', selected: true },
  { label: 'KT', key: 'kt', selected: false },
  { label: 'SKT', key: 'skt', selected: false },
  { label: 'LG U+', key: 'lg', selected: false },
  { label: '알뜰 KT', key: 'mnokt', selected: false },
  { label: '알뜰 SKT', key: 'mnoskt', selected: false },
  { label: '알뜰 LG U+', key: 'mnolg', selected: false },
];

function CustomSelect() {
  const id = useId();
  return (
    <Field name="mobileCarrier">
      {({ field, meta }) => {
        return (
          <StyledCustomWrapper>
            <StyledLabel htmlFor={id}>
              휴대폰 번호 <span>*</span>
            </StyledLabel>
            <StyledSelectBox id={id} error={meta.touched && meta.error ? true : false} {...field}>
              {OPTIONS.map((option, index) => (
                <option key={index} value={option.key}>
                  {option.label}
                </option>
              ))}
            </StyledSelectBox>
          </StyledCustomWrapper>
        );
      }}
    </Field>
  );
}
function CustomInput({ errorEvent }) {
  return (
    <Field name="phoneNumber">
      {({ field, meta }) => {
        useEffect(() => {
          if (errorEvent) {
            errorEvent(meta.touched && meta.error ? true : false);
          }
        }, [meta.touched, meta.error, errorEvent]);
        return <StyledInput {...field} />;
      }}
    </Field>
  );
}
export default function CustomMobileCarrier() {
  const [error, setError] = useState(false);
  return (
    <StyledCustomMobileCarrier error={error}>
      <CustomSelect />
      <CustomInput errorEvent={setError} />
    </StyledCustomMobileCarrier>
  );
}
const StyledCustomMobileCarrier = styled('div')`
  position: relative;
  padding: 1.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ error }) => (error === true ? '#FF881B' : '#dadada')};
  border-radius: 1rem;
`;
const StyledCustomWrapper = styled('div')`
  width: 25%;
`;
const StyledLabel = styled('label')`
  font-size: 1.2rem;
  color: #878787;
  font-weight: 700;
  display: block;
  margin: 0 auto;
  > span {
    color: #ff0000;
  }
`;
const StyledSelectBox = styled('select')`
  margin-top: 1rem;
  appearance: none;
  border: none;
  background-color: #e9e9eb;
  color: ${({ error }) => (error === true ? '#ff0000' : '#414141')};
  font-size: 1.2rem;
  font-weight: 800;
  display: inline-block;
  text-align: center;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  width: 6rem;
`;
const StyledInput = styled('input')`
  border: none;
  font-size: 2rem;
  font-weight: 600;
  position: absolute;
  border-radius: 1rem;
  width: 70%;
  right: 0;
  top: 0;
  padding: 0 2.5rem;
  height: 100%;
`;

const StyledAlert = styled('p')`
  color: #ff0000;
  font-size: 1.3rem;
  margin-top: 0.5rem;
`;
