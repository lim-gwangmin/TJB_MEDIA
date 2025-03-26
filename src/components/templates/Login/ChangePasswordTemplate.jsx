import React, { useState } from 'react';

import styled from '@emotion/styled';
import { changePasswordSchema } from '@schema';
import { AuthService } from '@services/authService';

import checkIcon from '@assets/icons/icon_result.svg';

import { Button } from '@components/atoms/Button';
import { FormField } from '@components/atoms/Form';
import { BasicTextInput } from '@components/atoms/Input';
import { ButtonsContainer, FormSection, Main } from '@components/atoms/Layout';
import { Alert } from '@components/atoms/Modal';
import { Text } from '@components/atoms/Text';
import { SectionContainer } from '@components/molecules/Layout';
import { Header } from '@components/organisms/Header';

import useCustomNavigate from '@hooks/useCustomNavigate';

export default function ChangePasswordTemplate({ userCd }) {
  const { initialValues, schema } = changePasswordSchema;
  const { goToLogin } = useCustomNavigate();
  const [result, setResult] = useState(false);

  const handleChangePassword = (res) => {
    const { resultCode, resultMessage } = res;

    // 변경되지 않았을 경우
    if (resultCode !== 200) {
      alert(resultMessage);
      return;
    }

    setResult(true);
  };

  return (
    <>
      <Header backButton={true} title="아이디/비밀번호 찾기" subMenu={false} />
      <Main>
        <SectionContainer maxWidth={500} paddingTop={40}>
          <StyledCommentBox>
            <b>새로운 비밀번호를 설정해주세요.</b>
            <p>
              발송된 임시 비밀번호 입력 후 신규 비밀번호 설정이 가능합니다. <br />
              비밀번호는 8~20자 이내의 영문, 숫자, 특수문자 조합으로 작성해주세요.
            </p>
          </StyledCommentBox>
          <FormField
            initialValues={{ ...initialValues, userCd }}
            schema={schema}
            request={AuthService.changePassword}
            setData={handleChangePassword}
          >
            <FormSection>
              <BasicTextInput
                type="password"
                title="신규 비밀번호"
                name="userNewPw"
                placeholder="신규 비밀번호"
              />
            </FormSection>
            <FormSection>
              <BasicTextInput
                type="password"
                title="신규 비밀번호 확인"
                name="userNewPwConfirm"
                placeholder="신규 비밀번호 확인"
              />
            </FormSection>
            <ButtonsContainer>
              <Button type="submit">비밀번호 변경</Button>
            </ButtonsContainer>
            <Text
              size={12}
              color="#888888"
              align="center"
              style={{ marginTop: '3rem', lineHeight: 1.4 }}
            >
              ※ 비밀번호 변경이 불가한 경우 담당부서 연락처 (042-636-0001)를 통해 문의해 주시기
              바랍니다.
            </Text>
          </FormField>
        </SectionContainer>
        <Alert isOpen={result} max={300} style={{ textAlign: 'center' }}>
          <img src={checkIcon} alt="회원가입 완료" />
          <Text align="center" size={24} weight={500} style={{ margin: '2rem 0 1rem' }}>
            비밀번호 변경 완료
          </Text>
          <Text align="center" weight={400} color="#9B9798">
            로그인 화면으로 이동합니다.
          </Text>
          <ButtonsContainer>
            <Button onClick={goToLogin}>이동</Button>
          </ButtonsContainer>
        </Alert>
      </Main>
    </>
  );
}

const StyledCommentBox = styled('div')`
  padding: 1.5rem;
  border-radius: 0.8rem;
  background-color: #fff6f7;
  margin-bottom: 3rem;
  > b {
    display: block;
    color: #ff6681;
  }
  > p {
    margin-top: 1.5rem;
    font-size: 1.2rem;
    line-height: 1.35;
  }
`;
