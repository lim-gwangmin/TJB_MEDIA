import React from 'react';

import image from '@assets/images/image_userDeletion.png';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer, Main } from '@components/atoms/Layout';
import { Text } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';
import { Center, SectionContainer } from '@components/molecules/Layout';
import { Header } from '@components/organisms/Header';

export default function UserDeletionTemplate({ onClick }) {
  return (
    <>
      <Header backButton={true} title="회원탈퇴" subMenu={false} />
      <Main mode="center">
        <SectionContainer maxWidth={700}>
          <div style={{ textAlign: 'center' }}>
            <img src={image} alt="" />
            <Text color="#666666" align="center" style={{ lineHeight: 1.3, margin: '1.5rem 0' }}>
              회원탈퇴를 하면 모든 활동 정보가 삭제되며, 데이터를 복구할 수 없으니 신중히 진행해
              주세요.
            </Text>
            <Title size={24} color="#323232">
              회원탈퇴를 하시겠습니까?
            </Title>
          </div>
          <ButtonsContainer style={{ marginTop: '4rem' }}>
            <Button onClick={onClick}>확인</Button>
          </ButtonsContainer>
        </SectionContainer>
      </Main>
    </>
  );
}
