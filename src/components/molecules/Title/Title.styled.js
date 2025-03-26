import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const SignStepTitleStyle = {
  marginTop: '0.5rem',
};
export const SignStepTitlePotintStyle = {
  fontSize: '1.4rem',
  fontWeight: 500,
};

const baseSpaceBetweenTitle = `
display: block;
display: flex;
align-items: center;
gap: 2rem;
justify-content: space-between;
`;

export const StyledSpaceBetweenTitleNav = styled(NavLink)`
  ${baseSpaceBetweenTitle}
`;

export const StyledSpaceBetweenTitle = styled('h1')`
  ${baseSpaceBetweenTitle}
`;
