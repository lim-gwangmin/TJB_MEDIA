import React, { useState } from 'react';

import styled from '@emotion/styled';
import { useFormikContext } from 'formik';

import { BasicTextInput } from '@components/atoms/Input';

import BasicSelectBox from './BasicSelectBox';

const OPTIONS = [
  { label: '통신사', key: '', selected: true },
  { label: 'KT', key: 'kt', selected: false },
  { label: 'SKT', key: 'skt', selected: false },
  { label: 'LG U+', key: 'lg', selected: false },
  { label: '알뜰 KT', key: 'mnokt', selected: false },
  { label: '알뜰 SKT', key: 'mnoskt', selected: false },
  { label: '알뜰 LG U+', key: 'mnolg', selected: false },
];
export default function MobileCarrier({
  telName,
  readonly = false,
  phoneName,
  placeholder = '입력해주세요.',
}) {
  const [error, setError] = useState(false);

  // 숫자 입력 함수
  const handleInputChange = (e) => {
    const value = e.target.value;

    // 숫자만 입력 가능하게 제한
    const onlyNumbers = value.replace(/[^0-9]/g, '').slice(0, 11);

    e.target.value = onlyNumbers; // 11자리까지만 유지
  };

  return (
    <StyledMobileCarrier error={error}>
      <BasicSelectBox name={telName} options={OPTIONS} errorEvent={setError} disabled={readonly} />
      <BasicTextInput
        name={phoneName}
        errorEvent={setError}
        onInput={handleInputChange}
        placeholder={placeholder}
        readonly={readonly}
        maxLength="11"
      />
    </StyledMobileCarrier>
  );
}

const StyledMobileCarrier = styled('div')`
  position: relative;
  border: 1px solid #dadada;
  border-radius: 0.6rem;
  margin-bottom: 1rem;
  border-color: ${({ error }) => (error === true ? '#FF881B' : '#dadada')};
  > select {
    width: 13rem;
    font-size: 1.4rem;
    border: none;
  }
  > div {
    display: inline-block;
    width: calc(100% - 13rem);
    > input {
      border: none;
    }
    > p {
      display: none;
    }
  }
`;
