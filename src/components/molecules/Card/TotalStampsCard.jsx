import React from 'react';
import { NavLink } from 'react-router-dom';

import coinImage from '@assets/images/coin_image.png';

import { Box } from '@components/atoms/Box';
import { ProgressCounter } from '@components/atoms/Counter';
import { Title } from '@components/atoms/Title';
import { SpaceBetweenTitle } from '@components/molecules/Title';

import { navLinks } from '@routes/navLinks';
import { MY_STAMP } from '@routes/url';

import { CardCenterWrapper } from './Card.styled';

export default function TotalStampsCard({ stampNo, allStampNo }) {
  return (
    <Box shadow={true}>
      <NavLink to={navLinks[MY_STAMP].path}>
        <SpaceBetweenTitle>
          <Title size={20}>획득 스탬프</Title>
        </SpaceBetweenTitle>
        <CardCenterWrapper>
          <img src={coinImage} alt="" />
        </CardCenterWrapper>
        <ProgressCounter count={stampNo} total={allStampNo} unit={'스탬프'} />
      </NavLink>
    </Box>
  );
}
