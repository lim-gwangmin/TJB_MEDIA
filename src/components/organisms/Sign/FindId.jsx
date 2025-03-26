import React, { useState } from 'react';

import styled from '@emotion/styled';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer } from '@components/atoms/Layout';
import { Text } from '@components/atoms/Text';
import { PhoneAuthentication } from '@components/molecules/Sign';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { navLinks } from '@routes/navLinks';
import { FIND_ID_RESULT } from '@routes/url';

export default function FindId({}) {
  const { goToPage } = useCustomNavigate();
  const [disabled, setDisabled] = useState(true);
  const [formValues, setFormValues] = useState(null); // 다음 화면에 넘길 유저 정보
  const [isRequestSent, setIsRequestSent] = useState(false);

  // 인증번호 발송
  const handleCreateVerificationCode = (res) => {
    const { result, resultMessage } = res;

    // 가입한 유저정보가 없다면 리턴
    if (!result?.userCheck) {
      alert('유저 정보가 없습니다. 회원가입 해주세요.');
      return;
    }

    alert('인증번호가 전송 되었습니다.');
    setIsRequestSent(true);
  };

  // 인증번호 인증
  const handleValidateVerificationCode = ({ request, result, resultCode, resultMessage }) => {
    if (resultCode !== 200) return alert('오류가 발생했습니다. 잠시후에 다시 시도해주세요.');

    // 유효하지 않는 인증코드 일때
    if (result?.data === undefined) {
      alert(resultMessage);
      return;
    }

    // 유저 정보가 있을때,
    if (Object.keys(result.data).length) {
      alert('인증되었습니다.');
      setFormValues(result.data.userId);
      setDisabled(false);
    } else {
      // 유저정보가 없을때
      alert('가입된 정보가 없습니다. 회원가입 해주세요.');
    }
  };

  return (
    <div style={{ marginTop: '4rem' }}>
      <Text size={18}>휴대폰 번호로 찾기</Text>
      <PhoneAuthentication
        authType="find"
        setData={handleCreateVerificationCode}
        nextHandler={handleValidateVerificationCode}
        isRequestSent={isRequestSent}
      />
      <ButtonsContainer>
        <Button
          disabled={disabled}
          onClick={() => goToPage(navLinks[FIND_ID_RESULT].path, formValues)}
        >
          확인
        </Button>
      </ButtonsContainer>
      <Text size={12} color="#888888" align="center" style={{ marginTop: '3rem', lineHeight: 1.4 }}>
        회원가입 시 등록한 휴대폰 번호와 입력한 휴대폰 번호가 <br />
        일치해야 인증번호를 받으실 수 있습니다.
      </Text>
    </div>
  );
}

const StyledFindId = styled('div')``;
