import React, { useState } from 'react';

import { Text } from '@components/atoms/Text';
import { IDPhoneAuthentication } from '@components/molecules/Sign';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { navLinks } from '@routes/navLinks';
import { CHANGE_PASSWORD } from '@routes/url';

export default function FindPassword({}) {
  const { goToPage } = useCustomNavigate();
  const [isRequestSent, setIsRequestSent] = useState(false);

  // 휴대폰 인증번호 발송
  const handleVerifyPhone = (res) => {
    const { result, resultMessage } = res;

    // 가입한 유저정보가 없다면 리턴
    if (!result?.userCheck) {
      alert('유저 정보가 없습니다. 회원가입 해주세요.');
      return;
    }
    alert('인증번호가 전송 되었습니다.');
    setIsRequestSent(true);
  };

  // 인증코드 인증 함수
  const handleVerifyCode = ({ result, resultCode, resultMessage }) => {
    if (resultCode !== 200) return alert('오류가 발생했습니다. 잠시후에 다시 시도해주세요.');

    // 유효하지 않는 인증코드 일때
    if (result?.data === undefined) {
      alert(resultMessage);
      return;
    }

    // 유저 정보가 있을때,
    if (Object.keys(result.data).length) {
      const { userCd } = result.data;
      alert('인증되었습니다.');
      goToPage(navLinks[CHANGE_PASSWORD].path, { userCd });
    } else {
      // 유저정보가 없을때
      alert('가입된 정보가 없습니다. 회원가입 해주세요.');
    }
  };

  return (
    <div style={{ marginTop: '4rem' }}>
      <IDPhoneAuthentication
        authType="find"
        setData={handleVerifyPhone}
        nextHandler={handleVerifyCode}
        isRequestSent={isRequestSent}
      />
      <Text size={12} color="#888888" align="center" style={{ marginTop: '3rem', lineHeight: 1.4 }}>
        회원가입 시 등록한 휴대폰 번호와 입력한 휴대폰 번호가 <br />
        일치해야 인증번호를 받으실 수 있습니다.
      </Text>
    </div>
  );
}
