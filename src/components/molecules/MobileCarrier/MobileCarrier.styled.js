import styled from '@emotion/styled';

export const StyledMobileCarrierPrimary = styled('div')`
  position: relative;
  border: 1px solid #dadada;
  border-radius: 0.6rem;
  margin-bottom: 1rem;
  border-color: ${({ error }) => (error === true ? '#FF881B' : '#dadada')};
  > select {
    width: 13rem;
    font-size: 1.4rem;
    border: none;
  }
  > div {
    display: inline-block;
    width: calc(100% - 13rem);
    > input {
      border: none;
    }
    > p {
      display: none;
    }
  }
`;

export const StyledCustomMobileCarrier = styled('div')`
  position: relative;
  padding: 1.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ error }) => (error === true ? '#FF881B' : '#dadada')};
  border-radius: 1rem;
`;

export const StyledCustomWrapper = styled('div')`
  width: 25%;
`;
