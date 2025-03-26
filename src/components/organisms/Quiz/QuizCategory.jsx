import React from 'react';

import styled from '@emotion/styled';

import category_image01 from '@assets/images/category_image01.png';
import category_image02 from '@assets/images/category_image02.png';
import category_image03 from '@assets/images/category_image03.png';
import category_image04 from '@assets/images/category_image04.png';
import category_image05 from '@assets/images/category_image05.png';
import category_image06 from '@assets/images/category_image06.png';
import category_image07 from '@assets/images/category_image07.png';
import category_image08 from '@assets/images/category_image08.png';

import { grid01, grid02, HexGrid, HexItem, HexItemButton } from './Quiz.styled';

const colors = ['#FFE893', '#FFCD1B', '#FFE073', '#FFDE55', '#FFC84D'];
const images = [
  category_image01,
  category_image02,
  category_image03,
  category_image04,
  category_image05,
  category_image06,
  category_image07,
  category_image08,
];

const hexLayoutLine = new Array(6).fill({});

function getHexLayoutLine(quizCategoryList, imageIndices) {
  return hexLayoutLine.map((item, index) => {
    if (imageIndices[index]) {
      return { ...quizCategoryList[imageIndices[index]], image: images[imageIndices[index]] };
    }
    return item;
  });
}

export default function QuizCategory({ quizCategoryList = [], onHandleQuizList }) {
  // hexLayoutLine 배열의 특정 인덱스에 quizCategoryList의 데이터를 넣기
  const hexLayoutLine01 = hexLayoutLine.map((item, index) => {
    if (index === 3) {
      return { ...quizCategoryList[0], image: category_image01 };
    }
    return item;
  });
  const hexLayoutLine02 = getHexLayoutLine(quizCategoryList, { 3: 1, 4: 2 });
  const hexLayoutLine03 = getHexLayoutLine(quizCategoryList, { 2: 3, 3: 4, 4: 5 });
  const hexLayoutLine04 = getHexLayoutLine(quizCategoryList, { 3: 6, 4: 7 });

  // 공통 컴포넌트로 분리
  const renderHexGrid = (layoutLine, gridStyle) => (
    <HexGrid style={gridStyle}>
      {layoutLine.map((item, index) => (
        <HexItem
          key={index}
          style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}
        >
          <HexItemButton
            onClick={() => item.quizCategoryCd && onHandleQuizList(item.quizCategoryCd)}
            style={{ flexFlow: 'column' }}
          >
            <img src={item.image} alt="" />

            <p style={{ marginTop: '1rem' }}>{item.quizCategoryNm}</p>
          </HexItemButton>
        </HexItem>
      ))}
    </HexGrid>
  );

  return (
    <>
      {renderHexGrid(hexLayoutLine, grid01)}
      {renderHexGrid(hexLayoutLine, grid02)}
      {renderHexGrid(hexLayoutLine01, grid01)}
      {renderHexGrid(hexLayoutLine02, grid02)}
      {renderHexGrid(hexLayoutLine03, grid01)}
      {renderHexGrid(hexLayoutLine04, grid02)}
      {renderHexGrid(hexLayoutLine, grid01)}
    </>
  );
}
