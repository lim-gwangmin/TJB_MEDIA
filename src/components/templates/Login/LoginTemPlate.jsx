import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@components/atoms/Button';
import { FormField } from '@components/atoms/Form';
import { BasicTextInput, CheckBox } from '@components/atoms/Input';
import { ButtonsContainer, FormSection, Main } from '@components/atoms/Layout';
import { TextPoint } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';

import { navLinks } from '@routes/navLinks';
import { AGREEMENT, USER_RECOVERY_ID } from '@routes/url';

import {
  BasicTextInputStyle,
  ButtonsContainerStyle,
  FormSectionStyle,
  StyledLinks,
} from './Login.styled';

export default function LoginTemPlate({ initialValues, schema, request, setData }) {
  return (
    <>
      <Main mode="center">
        <SectionContainer maxWidth={500}>
          <Title>
            반가워요 <br />
            지금부터 <TextPoint>미디어리터러시</TextPoint>를 <br />
            시작해볼까요?
          </Title>
          <FormField
            initialValues={initialValues}
            schema={schema}
            request={request}
            setData={setData}
          >
            <FormSection style={FormSectionStyle}>
              <BasicTextInput name="userId" placeholder="아이디" style={BasicTextInputStyle} />
              <BasicTextInput
                type="password"
                name="userPw"
                placeholder="비밀번호"
                style={BasicTextInputStyle}
              />
            </FormSection>
            <CheckBox name="rememberMe" checked={false} value="remember">
              자동로그인
            </CheckBox>
            <ButtonsContainer style={ButtonsContainerStyle}>
              <Button type="submit" size={18}>
                로그인
              </Button>
            </ButtonsContainer>
          </FormField>
          <StyledLinks>
            <li>
              <NavLink to={navLinks[USER_RECOVERY_ID].path}>아이디/비밀번호 찾기</NavLink>
            </li>
            <li>
              <NavLink to={navLinks[AGREEMENT].path}>회원가입</NavLink>
            </li>
          </StyledLinks>
        </SectionContainer>
      </Main>
    </>
  );
}
