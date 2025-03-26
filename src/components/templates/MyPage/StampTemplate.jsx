import React from 'react';

import { Main } from '@components/atoms/Layout';
import { SectionContainer } from '@components/molecules/Layout';
import { StampList } from '@components/molecules/Stamp';
import { Header } from '@components/organisms/Header';

export default function StampTemplate({ stampData = [] }) {
  return (
    <>
      <Header backButton={true} title="나의 활동 스탬프" />
      <Main>
        <SectionContainer>
          <StampList stampData={stampData} />
        </SectionContainer>
      </Main>
    </>
  );
}
