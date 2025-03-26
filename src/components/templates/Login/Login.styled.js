import styled from '@emotion/styled';

export const FormSectionStyle = {
  marginTop: '4rem',
  marginBottom: '2rem',
  gap: '2rem',
};
export const BasicTextInputStyle = {
  height: '7.6rem',
};

export const ButtonsContainerStyle = {
  marginTop: '7rem',
};

export const StyledLinks = styled('ul')`
  display: flex;
  margin-top: 2.3rem;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  > li { 
   font-size: 1.3rem;
   color:#000;
   font-weight: 500;
   &:first-of-type { 
    position: relative;
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 1px;
      height: 0.65rem;
      top: 50%;
      transform: translateY(-50%);
      right: -1.5rem;
      background-color: #9e9e9e;
    }
  }
`;
