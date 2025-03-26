import React, { useCallback, useState } from 'react';

import { AuthService } from '@services/authService';
import { ShopService } from '@services/shopService';

import { Main } from '@components/atoms/Layout';
import { Header } from '@components/organisms/Header';
import {
  ProductGuideSection,
  ProductPurchaseModal,
  ProductThumbnailSection,
} from '@components/organisms/Shop';

import useCustomNavigate from '@hooks/useCustomNavigate';
import { useLoading } from '@hooks/useLoading';

const PRODUCT_IMAGE_URL = import.meta.env.VITE_PRODUCT_IMAGE_URL;

export default function ProductDetailTemplate({ productDetailData = {} }) {
  const {
    brandNm = '',
    productCd = '',
    productNm = '',
    productPrice = 0,
    imageLink = '',
  } = productDetailData;
  const { goBack } = useCustomNavigate();
  const [userDataLoading, setFetchUserData] = useLoading(AuthService.userDatas);
  const [userData, setUserData] = useState({});
  const [isCashSufficient, setIsCashSufficient] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [purchaseLoading, setFetchPurchaseData] = useLoading(ShopService.purchase);
  // 유저 데이터 조회
  const getUserFetchData = useCallback(async () => {
    if (userDataLoading) return;

    try {
      // 유저 데이터 가져오기
      const responseUserData = await setFetchUserData();
      const userDataResult = responseUserData.result.data;
      setUserData(userDataResult);

      // 보유한 캐시와 구매하는 상품 가격 비교
      const isPurchaseProduct = canPurchaseProduct(userDataResult.point, productPrice);
      setIsCashSufficient(isPurchaseProduct);
    } catch (error) {
      console.error(error);
    }
  }, [userData, productDetailData]);
  // 보유 캐시와 구매할 상품 가격 비교하는 함수
  function canPurchaseProduct(ownedCash, productPrice) {
    // 보유 캐시가 상품 가격보다 같거나 많으면 true, 그렇지 않으면 false 반환
    return ownedCash >= productPrice;
  }
  // 교환하기 모달 컨트롤 함수
  const handleModalController = (bool) => {
    if (bool) getUserFetchData(); // 모달을 열때만 유저 정보 갖고오기
    setIsModal(bool);
  };
  // 구매하기 함수
  const handlePurchase = async ({ productCd }) => {
    if (purchaseLoading) return;
    const response = await setFetchPurchaseData({ productCd });
    const { resultCode } = response;

    if (resultCode !== 200) {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
      return;
    }
    alert('구매되었습니다.');
    goBack();
  };
  return (
    <>
      <Header backButton={true} title={true} subMenu={false} border={0} />
      <Main>
        <ProductThumbnailSection
          brandNm={brandNm}
          productNm={productNm}
          productPrice={productPrice}
          imageLink={imageLink ? PRODUCT_IMAGE_URL + imageLink : null}
        />
        <ProductGuideSection onClick={handleModalController} />
      </Main>
      <ProductPurchaseModal
        isOpen={isModal}
        isClose={handleModalController}
        handlePurchase={handlePurchase}
        userDataLoading={userDataLoading}
        brandNm={brandNm}
        productNm={productNm}
        productCd={productCd}
        productPrice={productPrice}
        point={userData.point}
        isCashSufficient={isCashSufficient}
        purchaseLoading={purchaseLoading}
      />
    </>
  );
}
