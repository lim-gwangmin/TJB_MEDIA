import React, { useState } from 'react';

import { userInfoSchema } from '@schema';
import { AuthService } from '@services/authService';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer, Main } from '@components/atoms/Layout';
import { Title } from '@components/atoms/Title';
import { Center } from '@components/molecules/Layout';
import { Header } from '@components/organisms/Header';
import { InsertUserInfo } from '@components/organisms/Sign';

import { UserInfoSection } from '../../organisms/MyPage';

export default function EditInfoTemplate({ userData = {} }) {
  return (
    <>
      <Header backButton={true} title="회원정보수정" subMenu={false} />
      <Main mode="center">
        <Center maxWidth={500}>
          <div>
            <Title size={24} color="#111" style={{ margin: '2rem 0 3rem' }}>
              회원정보
            </Title>
            <UserInfoSection userData={userData} />
          </div>
        </Center>
      </Main>
    </>
  );
}
