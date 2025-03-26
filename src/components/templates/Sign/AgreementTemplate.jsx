import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer, Main } from '@components/atoms/Layout';
import { TextPoint } from '@components/atoms/Text';
import { Center } from '@components/molecules/Layout';
import { SignStepTitle } from '@components/molecules/Title';
import { Header } from '@components/organisms/Header';
import { Terms } from '@components/organisms/Terms';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { navLinks } from '@routes/navLinks';
import { PHONE_VERIFICATION } from '@routes/url';

export default function AgreementTemplate({ agreementList = [] }) {
  const { goToPage } = useCustomNavigate();
  const { state } = useLocation();

  console.log(state, 'state');
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <Header backButton={true} title="회원가입" subMenu={false} />
      <Main mode="center">
        <Center maxWidth={500}>
          <div>
            <SignStepTitle step={1}>
              반가워요 <br />
              지금부터 <TextPoint>미디어리터러시</TextPoint>를 <br />
              시작해볼까요?
            </SignStepTitle>
            <Terms agreementList={agreementList} setDisabled={setDisabled} />
          </div>
          <ButtonsContainer>
            <Button disabled={disabled} onClick={() => goToPage(navLinks[PHONE_VERIFICATION].path)}>
              다음
            </Button>
          </ButtonsContainer>
        </Center>
      </Main>
    </>
  );
}
