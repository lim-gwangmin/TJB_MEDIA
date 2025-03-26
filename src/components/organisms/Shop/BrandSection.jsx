import React from 'react';

import { Title } from '@components/atoms/Title';
import { SectionContainer } from '@components/molecules/Layout';

import { BrandAllThumnail, BrandItemButton, BrandItemWrapper, BrandThumnail } from './Shop.styled';

const PRODUCT_IMAGE_URL = import.meta.env.VITE_PRODUCT_IMAGE_URL;

export default function BrandSection({ brandList = [], onClick }) {
  return (
    <SectionContainer>
      <Title size={16} weight={500}>
        인기 브랜드
      </Title>
      <BrandItemWrapper>
        <li>
          <BrandItemButton onClick={() => onClick({ brandCd: '', brandNm: '전체' })}>
            <BrandAllThumnail>ALL</BrandAllThumnail>
            전체
          </BrandItemButton>
        </li>
        {brandList.map((brand, index) => (
          <li key={index}>
            <BrandItemButton
              onClick={() => onClick({ brandCd: brand.brandCd, brandNm: brand.brandNm })}
            >
              <BrandThumnail image={brand.imageLink ? PRODUCT_IMAGE_URL + brand.imageLink : null} />
              {brand.brandNm}
            </BrandItemButton>
          </li>
        ))}
      </BrandItemWrapper>
    </SectionContainer>
  );
}
