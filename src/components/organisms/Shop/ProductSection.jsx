import React from 'react';

import { Coin } from '@components/atoms/Coin';
import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';

import { navLinks } from '@routes/navLinks';
import { PRODUCT_DETAIL } from '@routes/url';

import { formatNumberWithCommas } from '@utils/replace';

import {
  NonProductItem,
  Productbuy,
  ProductContent,
  ProductItems,
  ProductNav,
  ProductThumnail,
  ProductTitle,
} from './Shop.styled';

const PRODUCT_IMAGE_URL = import.meta.env.VITE_PRODUCT_IMAGE_URL;
export default function ProductSection({ productList = [], productTarget }) {
  const { brandNm } = productTarget;
  return (
    <SectionContainer>
      <Title size={16} weight={500}>
        {brandNm}
      </Title>
      <div style={{ marginTop: '3rem' }}>
        {productList.length ? (
          <ul style={{ display: 'flex', gap: '3rem 1.2rem', flexFlow: 'wrap' }}>
            {productList.map((product, index) => (
              <ProductItems key={index}>
                <ProductNav to={navLinks[PRODUCT_DETAIL].path} state={product.productCd}>
                  <ProductThumnail
                    image={product.imageLink ? PRODUCT_IMAGE_URL + product.imageLink : null}
                  />
                  <ProductContent>
                    <ProductTitle>
                      {product.brandNm} {product.productNm}
                    </ProductTitle>
                    <Coin fontSize={18} top={15} price={product.productPrice} />
                    <Productbuy>{formatNumberWithCommas(product.buyNo)}명이 받아감</Productbuy>
                  </ProductContent>
                </ProductNav>
              </ProductItems>
            ))}
          </ul>
        ) : (
          <NonProductItem>상품이 없습니다.</NonProductItem>
        )}
      </div>
    </SectionContainer>
  );
}
