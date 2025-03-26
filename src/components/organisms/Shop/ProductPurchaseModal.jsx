import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import { Button } from '@components/atoms/Button';
import { Coin } from '@components/atoms/Coin';
import { ButtonsContainer } from '@components/atoms/Layout';
import { SubmitLoader } from '@components/atoms/Loader';
import { ButtomPositionModal } from '@components/atoms/Modal';
import { Text } from '@components/atoms/Text';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { navLinks } from '@routes/navLinks';
import { QUIZ_HOME } from '@routes/url';

import { ProducPriceSection, ProductHead } from './Shop.styled';

export default function ProductPurchaseModal({
  isOpen,
  isClose,
  handlePurchase,
  userDataLoading,
  brandNm,
  productNm,
  productCd,
  productPrice,
  point = 0,
  isCashSufficient,
  purchaseLoading,
}) {
  const { goToPage } = useCustomNavigate();
  return (
    <>
      <ButtomPositionModal isOpen={isOpen}>
        {userDataLoading ? (
          <div style={{ textAlign: 'center', padding: '10% 0' }}>
            <InfinitySpin color="#FF881B" />
          </div>
        ) : (
          <>
            <ProductHead>
              <b className="productTitle">[{brandNm}]</b>
              <p className="productContent">{productNm}</p>
              <Coin fontSize={20} top={15} price={productPrice} />
            </ProductHead>
            <div>
              <ProducPriceSection>
                <Text weight={500} color="#666">
                  현재 보유 캐시
                </Text>
                <Coin price={point} />
              </ProducPriceSection>
              <ProducPriceSection style={{ marginTop: '0.7rem' }}>
                <Text weight={500} color={isCashSufficient ? '#666' : '#FF0000'}>
                  {isCashSufficient ? '구매 후 캐시' : '부족한 캐시'}
                </Text>
                <Coin price={point - productPrice} color={isCashSufficient ? '#000' : '#FF0000'} />
              </ProducPriceSection>
            </div>
            <ButtonsContainer>
              <Button theme="sub" style={{ flex: 1 }} onClick={() => isClose(false)}>
                취소
              </Button>
              {isCashSufficient ? (
                <Button style={{ flex: 1 }} onClick={() => handlePurchase({ productCd })}>
                  구매하기
                </Button>
              ) : (
                <Button style={{ flex: 1 }} onClick={() => goToPage(navLinks[QUIZ_HOME].path)}>
                  캐시 받으러 가기
                </Button>
              )}
            </ButtonsContainer>
          </>
        )}
      </ButtomPositionModal>
      {purchaseLoading && <SubmitLoader />}
    </>
  );
}
