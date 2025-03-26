import React from 'react';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer, Main } from '@components/atoms/Layout';
import { Center } from '@components/molecules/Layout';
import { Header } from '@components/organisms/Header';

export default function AgreementDetailTemplate({ agreementData }) {
  const { agreementNm = '', agreementContent } = agreementData;
  return (
    <>
      <Header backButton={true} title={agreementNm} subMenu={false} />
      <Main mode="center">
        <Center>
          <div dangerouslySetInnerHTML={{ __html: agreementContent }} />
        </Center>
      </Main>
    </>
  );
}
