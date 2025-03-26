import React from 'react';

import styled from '@emotion/styled';

import iconResult from '@assets/icons/icon_result.svg';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer, FormSection, Main } from '@components/atoms/Layout';
import { Text } from '@components/atoms/Text';
import { SectionContainer } from '@components/molecules/Layout';
import { Header } from '@components/organisms/Header';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { replaceLastThreeChars } from '@utils/replace';

export default function FindIdResultTemplate({ userId }) {
  const { goToLogin, goToFindPassword } = useCustomNavigate();

  return (
    <>
      <Header backButton={true} title="아이디/비밀번호 찾기" subMenu={false} />
      <Main mode="center">
        <SectionContainer maxWidth={500}>
          <FormSection>
            <div style={{ textAlign: 'center' }}>
              <img src={iconResult} alt="" style={{ width: '6rem' }} />
              <Text align="center" style={{ margin: '2rem 0' }}>
                입력하신 정보와 일치하는 아이디입니다.
              </Text>
            </div>
            <StyledBox>{replaceLastThreeChars(userId)}</StyledBox>
            <ButtonsContainer flow="column">
              <Button theme="revers" onClick={goToLogin}>
                로그인
              </Button>
              <Button onClick={goToFindPassword}>비밀번호 찾기</Button>
            </ButtonsContainer>
          </FormSection>
        </SectionContainer>
      </Main>
    </>
  );
}

const StyledBox = styled('div')`
  padding: 2.5rem 1rem;
  background-color: #f9fafc;
  border-radius: 1.2rem;
  text-align: center;
  font-size: 2.1rem;
  font-weight: 800;
`;
