import React, { useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

import { useFormikContext } from 'formik';

import { Button } from '@components/atoms/Button';
import { StyledBasicTextInput } from '@components/atoms/Input/Input.styled';
import { SubmitLoader } from '@components/atoms/Loader';

import { useLoading } from '@hooks/useLoading';

export default function AuthCodeForm({ serviceAPI, nextHandler }) {
  const [code, setCode] = useState('');
  const [isLoading, setServiceAPI] = useLoading(serviceAPI);
  const { values } = useFormikContext();

  // 인증번호 전송
  const handleSubmit = async () => {
    if (!code) return alert('인증코드를 입력해주세요.');

    const request = {
      ...values,
      code,
    };

    const response = await setServiceAPI(request);

    const { result, resultCode, resultMessage } = response;

    nextHandler({ request, result, resultCode, resultMessage });
  };

  return (
    <>
      <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem' }}>
        <div style={{ flex: 1 }}>
          <StyledBasicTextInput
            size={16}
            name="code"
            value={code}
            onInput={(e) => setCode(e.target.value.trim())}
            placeholder="인증번호"
          />
        </div>
        <Button onClick={handleSubmit} height={58} style={{ flex: '0 0 12rem' }}>
          인증
        </Button>
      </div>
      {isLoading && <SubmitLoader />}
    </>
  );
}
