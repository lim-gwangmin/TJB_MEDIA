import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { USER_RECOVERY_TAB_TYPES } from '@constant';

import { Main } from '@components/atoms/Layout';
import { SectionContainer } from '@components/molecules/Layout';
import { TabMenu } from '@components/molecules/Tab';
import { Header } from '@components/organisms/Header';

export default function UserRecoveryTemplate({}) {
  const { state } = useLocation();
  const [tabs, setTabs] = useState(USER_RECOVERY_TAB_TYPES);

  const handleTabClick = (key) => {
    const updateTabs = tabs.map((tab) =>
      tab.key === key ? { ...tab, active: true } : { ...tab, active: false },
    );
    setTabs(updateTabs);
  };

  useEffect(() => {
    const key = state?.type ? state.type : 'id';
    handleTabClick(key);
    return () => handleTabClick('id');
  }, [state]);

  const activeTab = tabs.find((tab) => tab.active);

  return (
    <>
      <Header backButton={true} title="아이디/비밀번호 찾기" subMenu={false} />
      <Main>
        <SectionContainer maxWidth={500} paddingTop={40}>
          <TabMenu tabs={tabs} onClick={handleTabClick} />
          {activeTab && <activeTab.component />}
        </SectionContainer>
      </Main>
    </>
  );
}
