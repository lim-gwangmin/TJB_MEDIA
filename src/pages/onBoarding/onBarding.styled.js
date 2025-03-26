import styled from '@emotion/styled';

import slideBg from '@assets/images/onBoarding_image_bg.png';

export const OnboardingLayout = styled('div')`
  display: flex;
  width: 100dvw;
  min-height: 100dvh;
  overflow-y: auto;
  background:
   //  url(${slideBg}) no-repeat top right/auto,
    linear-gradient(0deg, #fff 0%, #fff9db 100%);
  box-shadow:
    0px 0px 15px 0px rgba(255, 255, 255, 0.6),
    0px 0px 30px 10px rgba(255, 249, 219, 0.3);
`;

export const SlideItemWrapper = styled('div')`
  height: 100%;
  text-align: center !important;
  display: flex !important;
  flex-flow: column !important;
  justify-content: space-between !important;
  gap: 2rem !important;
  padding-bottom: 2rem;
`;
export const SlideImage = styled('img')`
  margin: auto;
`;
export const SlideImageWrapper = styled('div')`
  display: flex !important;
  flex-flow: column !important;
  align-item: center !important;
  justify-content: center !important;
  height: 100%;
`;
