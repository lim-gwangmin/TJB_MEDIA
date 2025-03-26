import styled from '@emotion/styled';

export const StyledBallonWrapper = styled('div')`
  text-align: center;
  margin-bottom: 1.5rem;
`;
export const StyledBallon = styled('div')`
position: relative;
display:inline-block;
text-align:center;
color:#fff;
background-color: #FF881B;
padding: 0.5rem 1.5rem;
border-radius: 3rem;
font-size: 1.2rem;
font-weight: 700;
 &:after {
   border-top: 6px solid #FF881B;
   border-left: 5px solid transparent;
   border-right: 5px solid transparent;
   border-bottom: 0px solid transparent;
   content: "";
   position: absolute;
   top: 100%;
   left: 50%;
   transform:translateX(-50%);
`;
