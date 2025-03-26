import React from 'react';

import { Main } from '@components/atoms/Layout';
import { Header } from '@components/organisms/Header';
import { PointsSection, ProfileSection, StampSection } from '@components/organisms/MyPage';

export default function MyPageTemplate({ userData = {}, limitPointDay }) {
  return (
    <>
      <Header backButton={true} title="마이페이지" />
      <Main>
        <ProfileSection userData={userData} />
        <PointsSection
          userNm={userData.userNm}
          level={userData.level}
          point={userData.point}
          pointDay={userData.pointDay}
          limitPointDay={limitPointDay}
        />
        <StampSection />
      </Main>
    </>
  );
}
