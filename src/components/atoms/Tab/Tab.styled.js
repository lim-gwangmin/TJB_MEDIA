import styled from '@emotion/styled';

export const StyledGeneralOption = styled('li')`
  flex: 0 0 calc(50% - 0.5rem);
  font-size: 1.3rem;
  > input[type='radio'] {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
    & ~ label {
      display: block;
      width: 100%;
      border: 1px solid #8d939b;
      border-radius: 14rem;
      text-align: center;
      background-color: #fff;
      color: #8d939b;
      padding: 1.2rem 1rem;
      transition: all 0.3s;
    }
    &:checked ~ label {
      border-color: #ff881b;
      color: #ff881b;
    }
  }
`;
