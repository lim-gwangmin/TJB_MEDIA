import styled from '@emotion/styled';

import { pxToRem } from '@utils/pxToRem';

const baseModalStyle = `
   position: fixed;
   display: flex;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
   padding: 0;
   background-color: rgba(0, 0, 0, 0.3);
   z-index: 9999;
   transition: ease-out 0.3s;
   margin:0 !important;
`;

export const StyledModal = styled('div')`
  ${baseModalStyle}
  visibility: ${({ isOpen }) => (isOpen === true ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen === true ? '1' : '0')};
`;

export const StyledModalContainer = styled('div')`
  margin: auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: ${({ max }) => pxToRem(max)};
  text-align: ${({ mode }) => mode};
  background-color: #fff;
  padding: 2rem 2.05rem;
  max-height: 85%;
  overflow-y: auto;
  border-radius: 1rem;
  position: relative;
`;
export const StyledModalHeader = styled('div')`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
`;
export const StyledModalBody = styled('div')`
  // margin-top: ${({ top }) => top && pxToRem(top)};
`;

export const StyledBottomModalContainer = styled('div')`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ max }) => pxToRem(max)};
  background-color: #fff;
  padding: 2rem 2.05rem;
  max-height: 85%;
  overflow-y: auto;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  position: relative;
`;
