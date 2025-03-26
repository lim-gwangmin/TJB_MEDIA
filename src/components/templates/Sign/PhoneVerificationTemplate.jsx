import React, { useState } from 'react';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer, Main } from '@components/atoms/Layout';
import { Comment } from '@components/atoms/Text';
import { Center } from '@components/molecules/Layout';
import { PhoneAuthentication } from '@components/molecules/Sign';
import { SignStepTitle } from '@components/molecules/Title';
import { Header } from '@components/organisms/Header';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { navLinks } from '@routes/navLinks';
import { USER_INFO } from '@routes/url';

export default function PhoneVerificationTemplate({}) {
  const { goToPage } = useCustomNavigate();
  const [disabled, setDisabled] = useState(true);
  const [formValues, setFormValues] = useState(null); // 다음 화면에 넘길 유저 정보
  const [isRequestSent, setIsRequestSent] = useState(false);

  // 인증번호 발송
  const handleCreateVerificationCode = (res) => {
    const { result, resultMessage } = res;

    // 가입한 유저정보가 있다면 리턴
    if (result.userCheck === 1) {
      alert('이미 가입되어있습니다.');
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
    if (result.data === null) {
      alert('인증되었습니다.');
      setFormValues(request);
      setDisabled(false);
    } else {
      // 유저정보가 없을때
      alert('이미 가입되어있습니다. 아이디 찾기를 이용해주세요.');
    }
  };

  return (
    <>
      <Header backButton={true} title="회원가입" subMenu={false} />
      <Main mode="center">
        <Center maxWidth={500}>
          <div>
            <SignStepTitle step={2}>휴대폰 인증</SignStepTitle>
            <Comment top={10}>
              회원가입을 위해 <br /> 휴대폰 인증을 진행해주세요.
            </Comment>
            <PhoneAuthentication
              setData={handleCreateVerificationCode}
              nextHandler={handleValidateVerificationCode}
              isRequestSent={isRequestSent}
            />
          </div>
          <ButtonsContainer>
            <Button
              onClick={() => goToPage(navLinks[USER_INFO].path, formValues)}
              disabled={disabled}
            >
              다음
            </Button>
          </ButtonsContainer>
        </Center>
      </Main>
    </>
  );
}
