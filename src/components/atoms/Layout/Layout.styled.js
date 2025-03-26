import styled from '@emotion/styled';

import { pxToRem } from '@utils/pxToRem';

export const StyledArticle = styled('article')`
  max-width: ${({ maxWidth }) => maxWidth}px;
  gap: ${({ gap }) => pxToRem(gap)};
  margin: 0 auto;
  padding-right: 2rem;
  padding-left: 2rem;
`;

export const StyledMain = styled('main')`
  display: flex;
  flex-flow: column;
  flex: 1;
  overflow: hidden;
  background-color: ${({ bg }) => bg};
  justify-content: ${({ mode }) => mode};
`;

export const StyledButtonsContainer = styled('div')`
  display: flex;
  flex-flow: ${({ flow }) => flow};
  gap: ${({ gap }) => pxToRem(gap)};
  justify-content: ${({ position }) => position};
  align-items: center;
  margin-top: 3rem;
  > button {
    flex: auto;
  }
`;

export const StyledFormSection = styled('div')`
  display: flex;
  gap: 1rem;
  align-items: ${({ col }) => (col === 1 ? 'center' : 'start')};
  flex-flow: wrap;
  & ~ div {
    margin-top: 2rem;
  }
  ${({ col }) => col === 1 && `> * { width:100%; max-width: 100%; }`}
  ${({ col }) =>
    col === 2 &&
    `
    div {width: calc(100% - 13rem);}
    input { width:100%;}
    button { width: 12rem; min-width: 12rem; height:5.8rem; }
    select { width: 50%; }

 `}
`;

export const StyledInfiniteScrollContainer = styled('div')`
  ${({ height }) => height && `max-height: ${pxToRem(height)};`}
  overflow: auto;
`;

export const StyledWindowInfiniteScrollContainer = styled('div')`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  overflow: hidden;
  min-height: 100dvh;
`;
