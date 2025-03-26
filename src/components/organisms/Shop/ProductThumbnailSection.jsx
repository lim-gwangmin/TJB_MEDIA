import React from 'react';

import { Coin } from '@components/atoms/Coin';
import { SectionContainer } from '@components/molecules/Layout';

import { HalfContentContainer, ProductDetailThumnail } from './Shop.styled';

export default function ProductThumbnailSection({ brandNm, productNm, productPrice, imageLink }) {
  return (
    <HalfContentContainer>
      <SectionContainer>
        <div style={{ textAlign: 'center' }}>
          <ProductDetailThumnail image={imageLink} />
          <p style={{ fontSize: '1.8rem', fontWeight: 500 }}>[{brandNm}]</p>
          <p style={{ fontSize: '1.8rem', fontWeight: 500, marginTop: '0.5rem' }}>{productNm}</p>
          <Coin fontSize={20} top={2.4} price={productPrice} />
        </div>
      </SectionContainer>
    </HalfContentContainer>
  );
}
