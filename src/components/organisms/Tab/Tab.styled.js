import styled from '@emotion/styled';

export const PointListWrapper = styled('ul')``;

export const PointListItem = styled('li')`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-top: 1px solid #f1f1f1;
`;
export const PointListItemContents = styled('div')`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`;

export const NonData = styled('div')`
  padding: 50% 2rem;
  text-align: center;
  color: #707070;
`;

export const ListHeader = styled('div')`
  position: relative;
  padding: 2.4rem 2rem;
  font-weight: 600;
  text-align: center;
`;
const initialButtonStyle = `
position: absolute;   
top:50%;
transform:translateY(-50%);
padding: 1rem;
`;
export const PrevButton = styled('button')`
  ${initialButtonStyle}
  left:1rem;
`;
export const NextButton = styled('button')`
  ${initialButtonStyle}
  right:1rem;
`;

export const RankListItem = styled('li')`
  position: relative;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
export const RankListItemLeft = styled('div')`
  display: flex;
  align-items: center;
`;
export const RankNumber = styled('p')`
  position: relative;
  padding-right: 2.5rem;
  padding-left: 0.5rem;
  margin-right: 2.5rem;
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 1px;
    height: 2.3rem;
    background-color: #e3e3e3;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const RankUserThumnail = styled('span')`
  display: inline-block;
  flex: 0 0 4rem;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ image }) => image});
  background-color: #ffcd1b;
`;
