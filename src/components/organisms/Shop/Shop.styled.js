import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

import placeholderImage from '@assets/images/product_placehodler.svg';

const initialBrandThumnail = `
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 1rem;
border-radius: 100%;
width: 7rem;
height: 7rem;
text-align: center;
background-repeat: no-repeat;
background-position: center;
overflow: hidden;
text-align: center;
font-size: 1.8rem;
font-weight: 700;
color: #fff;
`;
// 브랜드 리스트
export const BrandItemWrapper = styled('ul')`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
  overflow-x: auto;
`;

export const BrandItemButton = styled('button')`
  flex: 0 0 7rem;
  font-size: 1.4rem;
  color: #000;
  font-weight: 500;
  text-align: center;
`;

export const BrandAllThumnail = styled('span')`
  ${initialBrandThumnail}
  background-color: #000;
`;
export const BrandThumnail = styled('span')`
  ${initialBrandThumnail}
  background-size: ${({ image }) => (image ? 'cover' : '50%')};
  background-image: url(${({ image }) => (image ? image : placeholderImage)});
  background-color: ${({ image }) => (image ? '#000' : '#FFEC99')};
`;

// productSction
export const ProductNav = styled(NavLink)`
  text-align: left;
  display: block;
  width: 100%;
`;
export const ProductItems = styled('li')`
  flex: 0 0 calc(20% - 1rem);
  @media (max-width: 950px) {
    flex: 0 0 calc(25% - 1rem);
  }
  @media (max-width: 767px) {
    flex: 0 0 calc(33.3334% - 1rem);
  }
  @media (max-width: 430px) {
    flex: 0 0 calc(50% - 1rem);
  }
`;
export const ProductThumnail = styled('figure')`
  display: block;
  width: 100%;
  border-radius: 1rem;
  background-repeat: no-repeat;
  background-size: ${({ image }) => (image ? 'contain' : 'auto')};
  background-position: center;
  background-image: url(${({ image }) => (image ? image : placeholderImage)});
  background-color: ${({ image }) => (image ? '#fff' : '#FFEC99')};
  padding-bottom: 100%;
`;
export const ProductContent = styled('figcaption')`
  margin-top: 2rem;
`;
export const ProductTitle = styled('p')`
  font-size: 1.4rem;
  font-weight: 500;
  color: #000;
  word-break: break-all;
  line-height: 1.3;
`;

export const Productbuy = styled('span')`
  display: block;
  margin-top: 0.5rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: #666;
`;

export const NonProductItem = styled('div')`
  padding: 20% 2rem;
  text-align: center;
  color: #666666;
`;

// product detail
export const HalfContentContainer = styled('div')`
  display: flex;
  flex-flow: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => (bg ? bg : '#fff')};
`;
export const ProductDetailThumnail = styled('figure')`
  display: block;
  width: 17rem;
  border-radius: 1rem;
  background-repeat: no-repeat;
  background-size: ${({ image }) => (image ? 'contain' : 'auto')};
  margin-bottom: 2rem;
  background-position: center;
  background-image: url(${({ image }) => (image ? image : placeholderImage)});
  background-color: ${({ image }) => (image ? '#fff' : '#FFEC99')};
  padding-bottom: 100%;
`;

export const BottomContentArea = styled('section')`
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 4.5rem 2rem 2rem 2rem;
`;

export const ProductHead = styled('div')`
  padding: 3rem 0;
  border-bottom: 1px dashed #d7d7d9;
  margin-bottom: 2rem;
  > .productTitle {
    font-size: 2.2rem;
    display: block;
    font-weight: 500;
  }
  > .productContent {
    display: block;
    font-size: 2rem;
    font-weight: 500;
    margin: 0.5rem 0 0;
  }
`;
export const ProducPriceSection = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
`;
