import React from 'react';

import { SETTING_HELP_LIST } from '@constant';

import icon_rightArrow from '@assets/icons/icon_arrow_next.svg';

import { Main } from '@components/atoms/Layout';
import { ToggleSwitch } from '@components/atoms/Switch';
import { Text } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';
import { Header } from '@components/organisms/Header';

import { navLinks } from '@routes/navLinks';

import { SettingListItem, SettingListLinkItem } from './Setting.styled';

export default function SettingsTemplate({ agreementList = [] }) {
  return (
    <>
      <Header backButton={true} title="환경설정" subMenu={false} />
      <Main>
        <SectionContainer>
          <ul>
            <SettingListItem>
              <Text color="#333">앱 알람 ON/OFF</Text>
              <ToggleSwitch initial={false} />
            </SettingListItem>
          </ul>
        </SectionContainer>
        <SectionContainer>
          <Title size={20} style={{ marginBottom: '1rem' }}>
            도움센터
          </Title>
          {SETTING_HELP_LIST.map((item, index) => (
            <SettingListLinkItem key={index} to={item.link}>
              <Text color="#333">{item.label}</Text>
              <img src={icon_rightArrow} alt="페이지 이동" />
            </SettingListLinkItem>
          ))}
        </SectionContainer>
        <SectionContainer>
          <Title size={20} style={{ marginBottom: '1rem' }}>
            이용약관
          </Title>
          {agreementList.map((agreement, index) => (
            <SettingListLinkItem
              key={index}
              to={navLinks.AGREEMENT_DETAIL(agreement.agreementCd).path}
            >
              <Text color="#333">{agreement.agreementNm}</Text>
              <img src={icon_rightArrow} alt="페이지 이동" />
            </SettingListLinkItem>
          ))}
        </SectionContainer>
        <SectionContainer>
          <SettingListLinkItem>
            <Text color="#333">버전정보</Text>
            <Text size={14} color="#666">
              1.0.0
            </Text>
          </SettingListLinkItem>
        </SectionContainer>
      </Main>
    </>
  );
}
