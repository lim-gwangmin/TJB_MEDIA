import React from 'react';

import { StyledAnswerInput } from './AnswerInput.styled';

export default function AnswerInput({ value, onInput, onBlur, maxLength, readOnly }) {
  return (
    <StyledAnswerInput
      type="text"
      value={value}
      onInput={onInput}
      onBlur={onBlur}
      maxLength={maxLength}
      readOnly={readOnly}
    />
  );
}
