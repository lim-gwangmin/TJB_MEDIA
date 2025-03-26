import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ShopService } from '@services/shopService';

import { SubmitLoader } from '@components/atoms/Loader';
import { ProductDetailTemplate } from '@components/templates/Shop';

import { useLoading } from '@hooks/useLoading';

import Error from '@pages/error/Error';

export default function ProductDetail() {
  const { state = '' } = useLocation();
  const isStateCheck = Object.entries(state).length !== 0 ? true : false;
  const productCd = state;
  const [isProductDetailLoading, setFetchProductDetail] = useLoading(ShopService.productDetail);
  const [productDetailData, setProductDetailData] = useState({});

  useEffect(() => {
    getProductDetailFetchData();
  }, []);

  // 제품 상세 정보 가져오기
  const getProductDetailFetchData = useCallback(async () => {
    if (isProductDetailLoading) return;

    try {
      const responseProductDetailtData = await setFetchProductDetail({ productCd });
      setProductDetailData(responseProductDetailtData.data);
    } catch (error) {
      console.error(error);
    }
  }, [productDetailData]);

  return (
    <>
      {isStateCheck ? <ProductDetailTemplate productDetailData={productDetailData} /> : <Error />}
      {isProductDetailLoading && <SubmitLoader />}
    </>
  );
}
