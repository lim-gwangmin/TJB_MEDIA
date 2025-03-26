import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import iconLevel from '@assets/icons/icon_userLevel.svg';
import iconPoint from '@assets/icons/icon_userPoint.svg';
import iconShop from '@assets/icons/icon_userShop.svg';
import honey from '@assets/images/honey_image.svg';

import { Box } from '@components/atoms/Box';
import { Gauge } from '@components/atoms/Gauge';
import { Text } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';
import { SpaceBetweenTitle } from '@components/molecules/Title';
import { StyledCards } from '@components/organisms/Home/Home.styled';

import { navLinks } from '@routes/navLinks';
import { POINTS, RANKING, SHOP } from '@routes/url';

import { colors } from '@styles/theme';

import { getPercentageWithPrecision } from '@utils/calculate';

export const PointsSection = ({
  userNm = '',
  level = 1,
  point = 0,
  pointDay = 0,
  limitPointDay = 0,
}) => {
  const gague = getPercentageWithPrecision(pointDay, limitPointDay);

  return (
    <SectionContainer bg={colors.secondary[300]}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
        <div
          style={{
            display: 'flex',
            flexFlow: 'column',
            gap: '2rem',
            justifyContent: 'space-between',
            flex: '0.6 0 16rem',
          }}
        >
          <p style={Comment}>
            {userNm}님 <br />
            영상보고! 퀴즈풀고! <br />
            포인트를 모아보세요.
          </p>
          <div>
            <span
              style={{
                position: 'relative',
                left: `${gague}%`,
                display: 'inline-block',
                padding: '0.3rem 0.5rem',
                backgroundColor: '#2E3233',
                color: '#fff',
                borderRadius: '0.7rem',
                marginBottom: '1rem',
                fontSize: '1.2rem',
                fontWeight: 500,
                transform: `translateX( ${gague > 15 ? -50 : 0}% )`,
                transition: 'all 1s',
              }}
            >
              {pointDay} / {limitPointDay}
            </span>
            <Gauge value={gague} icon={null} />
          </div>
        </div>
        <div>
          <img src={honey} alt="" />
        </div>
      </div>
      <div style={{ marginTop: '2.5rem' }}>
        <StyledCards>
          <Box shadow={true}>
            <NavLink to={navLinks[RANKING].path}>
              <SpaceBetweenTitle>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <img src={iconLevel} alt="" />
                  <div>
                    <Text color="#949494" weight={600}>
                      현재레벨
                    </Text>
                    <Title size={20}>Lv. {level}</Title>
                  </div>
                </div>
              </SpaceBetweenTitle>
            </NavLink>
          </Box>
          <Box shadow={true}>
            <NavLink to={navLinks[POINTS].path}>
              <SpaceBetweenTitle>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <img src={iconPoint} alt="" />
                  <div>
                    <Text color="#949494" weight={600}>
                      포인트
                    </Text>
                    <Title size={20}>{point}P</Title>
                  </div>
                </div>
              </SpaceBetweenTitle>
            </NavLink>
          </Box>
        </StyledCards>
        <StyledCards>
          <Box shadow={true}>
            <NavLink to={navLinks[SHOP].path} style={{ display: 'block', textAlign: 'center' }}>
              <img src={iconShop} alt="" style={{ paddingRight: '2rem' }} />
              포인트 상점 바로가기
            </NavLink>
          </Box>
        </StyledCards>
      </div>
    </SectionContainer>
  );
};

const Icon = styled('img')`
  width: ${({ size }) => size || '2rem'};
  height: ${({ size }) => size || '2rem'};
`;

const Comment = {
  fontSize: '2rem',
  lineHeight: 1.5,
};
