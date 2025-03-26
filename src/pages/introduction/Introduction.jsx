import React from 'react';

import styled from '@emotion/styled';

import icon01 from '@assets/icons/icon_introduction01.svg';
import icon02 from '@assets/icons/icon_introduction02.svg';
import icon03 from '@assets/icons/icon_introduction03.svg';
import icon04 from '@assets/icons/icon_introduction04.svg';

import { Main } from '@components/atoms/Layout';
import { Text } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';
import { Header } from '@components/organisms/Header';

export default function Introduction() {
  return (
    <>
      <Header backButton={true} title="앱 소개" subMenu={false} />
      <Main mode="center">
        <SectionContainer>
          <Title size={20} weight={800} style={{ textAlign: 'center' }}>
            미디어리터러시란 무엇일까요?
          </Title>
          <Text
            size={12}
            weight={300}
            align="center"
            style={{ lineHeight: 1.3, marginTop: '1.5rem' }}
          >
            “뉴스 UP GO 놀자”는 사고력과 판단력을 강화하여
            <br />
            미디어를 비판적으로 이해할 수 있도록 미디어 리터러시를 향상을 돕습니다.
          </Text>
        </SectionContainer>

        <SectionContainer>
          <BoxItem bg="#FFF7FA">
            <img src={icon01} alt="" />
            <div>
              <Title size={20}>미디어리터러시 게임</Title>
              <Text size={13} style={{ marginTop: '1rem' }}>
                O,X 퀴즈, 초성퀴즈, 선다형 문제를 맞춰 다양한 게임을 해보고 미디어리터러시와
                친해져볼까요?
              </Text>
            </div>
          </BoxItem>
          <BoxItem bg="#FFFCE5">
            <img src={icon02} alt="" />
            <div>
              <Title size={20}>랭킹제도</Title>
              <Text size={13} style={{ marginTop: '1rem' }}>
                보기편한 랭킹제도로 학교와 나의 개인랭킹을 확인해보세요.
              </Text>
            </div>
          </BoxItem>

          <BoxItem bg="#F8F2FF">
            <img src={icon03} alt="" />
            <div>
              <Title size={20}>스탬프</Title>
              <Text size={13} style={{ marginTop: '1rem' }}>
                게임하고 문제풀고 스템프까지 모아보세요 이후엔 포인트가 쌓여요.
              </Text>
            </div>
          </BoxItem>

          <BoxItem bg="#F4FBFF">
            <img src={icon04} alt="" />
            <div>
              <Title size={20}>상점</Title>
              <Text size={13} style={{ marginTop: '1rem' }}>
                퀴즈와 게임에서 얻은 포인트로 상점에서 기프티콘을 쇼핑하세요.
              </Text>
            </div>
          </BoxItem>
        </SectionContainer>
      </Main>
    </>
  );
}

const BoxItem = React.memo(styled('div')`
  max-width: 70rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  background-color: ${({ bg }) => bg};
  & ~ div {
    margin-top: 1rem;
  }
`);
