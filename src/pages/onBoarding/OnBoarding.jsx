import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import slideImage01 from '@assets/images/onBoarding_image01.png';
import slideImage02 from '@assets/images/onBoarding_image02.png';
import slideImage03 from '@assets/images/onBoarding_image03.png';
import slideImage04 from '@assets/images/onBoarding_image04.png';
import slideImage05 from '@assets/images/onBoarding_image05.png';

import { Button } from '@components/atoms/Button';
import { ButtonsContainer, Main } from '@components/atoms/Layout';
import { Text, TextPoint } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';
import { Center } from '@components/molecules/Layout';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { navLinks } from '@routes/navLinks';
import { LOGIN } from '@routes/url';

import '@styles/slide.css';

import { setFirstVisitCookie } from '@utils/cookiesManager';

import {
  OnboardingLayout,
  SlideImage,
  SlideImageWrapper,
  SlideItemWrapper,
} from './onBarding.styled';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function OnBoarding() {
  const sliderRef = useRef(null);
  const { goToPage } = useCustomNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // 슬라이드 콘텐츠 배열
  const slides = [
    <SlideItemWrapper key={1}>
      <SlideImageWrapper>
        <SlideImage src={slideImage01} alt="" style={{ transform: 'translateX(1.5rem)' }} />
      </SlideImageWrapper>
      <div>
        <Title size={32} weight={700} color="#323232">
          <TextPoint>미디어 리터러시</TextPoint> <br />
          개념을 알아볼까요?
        </Title>
        <Text
          size={14}
          weight={500}
          align="center"
          color="#707070"
          style={{ marginTop: '1.5rem', lineHeight: 1.5 }}
        >
          정보를 제대로 이해하고 평가하는 능력입니다. <br />
          우리가 보는 뉴스, 소셜 미디어, 광고의 내용이 진짜인지 혹은 왜곡된 것인지 구분할 수 있게
          도와줍니다.
        </Text>
      </div>
    </SlideItemWrapper>,
    <SlideItemWrapper key={2}>
      <SlideImageWrapper>
        <SlideImage src={slideImage02} alt="" />
      </SlideImageWrapper>
      <div>
        <Title size={32} weight={700} color="#323232">
          <TextPoint>개인맞춤 학습</TextPoint> <br />
          미디어 리터러시 퀴즈!
        </Title>
        <Text
          size={14}
          weight={500}
          align="center"
          color="#707070"
          style={{ marginTop: '1.5rem', lineHeight: 1.5 }}
        >
          리터러시게임 종류는 총 3가지입니다. <br />
          학습수준에 맞춰 난이도가 나눠져있으며 퀴즈를 풀고 포인트를 얻을 수 있게 도와드립니다.
        </Text>
      </div>
    </SlideItemWrapper>,
    <SlideItemWrapper key={3}>
      <SlideImageWrapper>
        <SlideImage src={slideImage03} alt="" />
      </SlideImageWrapper>
      <div>
        <Title size={32} weight={700} color="#323232">
          내<TextPoint>랭킹</TextPoint>을 <TextPoint>한눈에</TextPoint> <br />
          확인하세요.
        </Title>
        <Text
          size={14}
          weight={500}
          align="center"
          color="#707070"
          style={{ marginTop: '1.5rem', lineHeight: 1.5 }}
        >
          우리 학교와 전국 순위를 간편하게 확인하세요! <br />
          전국의 학교 랭킹과 비교해 나의 위치를 확인하고, 우리 학교의 순위를 높일 수 있습니다.
        </Text>
      </div>
    </SlideItemWrapper>,
    <SlideItemWrapper key={4}>
      <SlideImageWrapper>
        <SlideImage src={slideImage04} alt="" />
      </SlideImageWrapper>
      <div>
        <Title size={32} weight={700} color="#323232">
          <TextPoint>퀴즈</TextPoint>로 <TextPoint>포인트</TextPoint>를 모아 <br />
          상점에서 <TextPoint>쇼핑</TextPoint>하세요.
        </Title>
        <Text
          size={14}
          weight={500}
          align="center"
          color="#707070"
          style={{ marginTop: '1.5rem', lineHeight: 1.5 }}
        >
          퀴즈와 게임에서 얻은 포인트로 상점에서 기프티콘을 쇼핑하세요. <br />
          퀴즈를 풀고 포인트를 모을수있어요.
        </Text>
      </div>
    </SlideItemWrapper>,
    <SlideItemWrapper key={5}>
      <SlideImageWrapper>
        <SlideImage src={slideImage05} alt="" />
      </SlideImageWrapper>
      <div>
        <Title size={32} weight={700} color="#323232">
          <TextPoint>올바른 정보</TextPoint>를 찾는 <br />
          <TextPoint>능력</TextPoint>을 키울 수 있습니다!
        </Title>
        <Text
          size={14}
          weight={500}
          align="center"
          color="#707070"
          style={{ marginTop: '1.5rem', lineHeight: 1.5 }}
        >
          이 어플로 재미있게 퀴즈를 풀며 미디어 정보를 똑똑하게 분석하고, 가짜 뉴스와 진짜 뉴스를
          구별하는 법을 배워보세요.
        </Text>
      </div>
    </SlideItemWrapper>,
  ];

  const totalSlides = slides.length; // 슬라이드 개수 동적으로 설정

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index), // 슬라이드 변경 후 현재 인덱스 업데이트
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      sliderRef.current.slickNext(); // 다음 슬라이드로 이동
    } else {
      setFirstVisitCookie();
      goToPage(navLinks[LOGIN].path);
    }
  };

  return (
    <OnboardingLayout>
      <Main mode="center" bg="initial">
        <Center maxWidth={700} gap={50}>
          <Slider ref={sliderRef} {...settings} style={{ flex: 1 }}>
            {slides.map((slide) => slide)}
          </Slider>
          <ButtonsContainer>
            <Button onClick={handleNext}>{currentSlide < totalSlides - 1 ? '다음' : '확인'}</Button>
          </ButtonsContainer>
        </Center>
      </Main>
    </OnboardingLayout>
  );
}
