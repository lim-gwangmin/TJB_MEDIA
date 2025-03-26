import React from 'react';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import test from '@assets/images/test.png';

// Variables
const amount = 5;

// Grid container 스타일
const hexGridListStyle = css`
  --amount: ${amount};
  display: grid;
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(var(--amount), 1fr 2fr) 1fr;
  grid-gap: 1rem 2rem;
`;

// Grid item 스타일
const hexGridItemStyle = css`
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Maintain aspect ratio */
  background: transparent; /* Ensure background does not interfere with the hexagon */
  /* Adjust column span based on item index */
  &:nth-of-type(n + 6) {
    --counter: 2;
  }
  &:nth-of-type(n + 11) {
    --counter: 3;
  }
  &:nth-of-type(n + 16) {
    --counter: 4;
  }
`;

// Grid item content 스타일
const hexGridContentStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

const HexGridList = styled.ul`
  ${hexGridListStyle};
`;

const HexGridItem = styled.li`
  ${hexGridItemStyle};
`;

const HexGridContent = styled.div`
  ${hexGridContentStyle};
`;

const HexagonGrid = () => {
  return (
    <HexGridList>
      {Array.from({ length: 20 }, (_, index) => (
        <HexGridItem key={index}>
          <HexGridContent>{index + 1}</HexGridContent>
        </HexGridItem>
      ))}
    </HexGridList>
  );
};

export default HexagonGrid;
