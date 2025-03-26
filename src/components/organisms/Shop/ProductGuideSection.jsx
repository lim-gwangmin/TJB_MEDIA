import React from 'react';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer } from '@components/atoms/Layout';
import { Text } from '@components/atoms/Text';

import { BottomContentArea, HalfContentContainer } from './Shop.styled';

export default function ProductGuideSection({ onClick }) {
  return (
    <HalfContentContainer bg="#F4F3F8">
      <BottomContentArea>
        <div style={{ lineHeight: 1.4 }}>
          <Text color="#666666">
            본 상품은 미디어리터러시에서 특가형태로 제공되는 모바일 상품권 교환권 입니다.
          </Text>
          <Text color="#666666" style={{ margin: '2rem 0' }}>
            미디어리터러시 내 상품은 물품의 제고상황에 따라 변경될 수 있습니다
          </Text>
          <Text color="#666666">
            쿠폰번호 발급 후 재사용 불가하며, 재판매가 불가합니다. 구매 전 반드시 주의사항을
            확인해주세요.
          </Text>
        </div>
        <ButtonsContainer>
          <Button onClick={() => onClick(true)}>교환하기</Button>
        </ButtonsContainer>
      </BottomContentArea>
    </HalfContentContainer>
  );
}
