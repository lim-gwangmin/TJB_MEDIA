import React from 'react';
import { NavLink } from 'react-router-dom';

import { USER_DATA_SCHEMA } from '@schema';

import visialImage from '@assets/images/visual_quiz_imagex2.png';

import { Main } from '@components/atoms/Layout';
import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';
import { SpaceBetweenTitle } from '@components/molecules/Title';
import { Header } from '@components/organisms/Header';
import { Cards, TotalPoint, WeekSchoolRank } from '@components/organisms/Home';

import { navLinks } from '@routes/navLinks';
import { QUIZ_CATEGORY, QUIZ_HOME, RANKING } from '@routes/url';

import { colors } from '@styles/theme';

export default function HomeTemplate({ userData = {} }) {
  const { userNm, accruedPoint, levelUpPoint, solveRightNo, solveNo, stampNo, allStampNo } = {
    ...USER_DATA_SCHEMA,
    ...userData,
  };

  return (
    <>
      <Header />
      <Main>
        {/* section 01  */}
        <SectionContainer>
          <NavLink
            to={navLinks[QUIZ_CATEGORY].path}
            // to={navLinks[QUIZ_HOME].path} // 퀴즈 홈 만들고 변경할 코드
            style={{ display: 'block', textAlign: 'center' }}
          >
            <img src={visialImage} alt="학습 전 개념부터 정리해요! 미디어 리터러시 문제풀자!" />
          </NavLink>
        </SectionContainer>
        {/* section 02  */}
        <SectionContainer paddingTop={30} paddingBt={30}>
          <Title size={20} weight={400}>
            현재 {userNm}님의 <br /> <b> 누적 포인트</b>
          </Title>
          <TotalPoint accruedPoint={accruedPoint} levelUpPoint={levelUpPoint} />
          <Cards
            solveRightNo={solveRightNo}
            solveNo={solveNo}
            stampNo={stampNo}
            allStampNo={allStampNo}
          />
        </SectionContainer>
        {/* section 03  */}
        <SectionContainer bg={colors.secondary[100]} paddingTop={30} paddingBt={30}>
          <SpaceBetweenTitle to={navLinks[RANKING].path}>
            <Title size={20} weight={400}>
              현재 {userNm}님의 <br /> <b>참여학교 랭킹</b>
            </Title>
          </SpaceBetweenTitle>
          <WeekSchoolRank />
        </SectionContainer>
      </Main>
    </>
  );
}
