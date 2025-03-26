import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Stamp } from '@services/stampService';

import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';
import { StampList } from '@components/molecules/Stamp';
import { SpaceBetweenTitle } from '@components/molecules/Title';

import { navLinks } from '@routes/navLinks';
import { MY_STAMP } from '@routes/url';

export const StampSection = ({}) => {
  const [stampData, setStampData] = useState([]);
  const [stampState, setStampState] = useState('');

  useEffect(() => {
    getFetchStampData();
  }, []);

  const getFetchStampData = async () => {
    const response = await Stamp.userStamp();
    const getStampLength = response.filter((stamp) => stamp.stampFl);
    setStampData(getStampLength);
    setStampState(`${getStampLength.length}/${response.length}`);
  };

  return (
    <SectionContainer>
      <NavLink
        to={navLinks[MY_STAMP].path}
        style={{ display: 'block', textAlign: 'center' }}
      ></NavLink>
      <SpaceBetweenTitle to={navLinks[MY_STAMP].path}>
        <Title size={20} weight={400}>
          활동 스탬프 {stampState}
        </Title>
      </SpaceBetweenTitle>

      <StampList stampData={stampData} top={40} />
    </SectionContainer>
  );
};
