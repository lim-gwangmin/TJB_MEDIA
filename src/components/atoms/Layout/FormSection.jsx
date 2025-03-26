import React from 'react';

import { StyledFormSection } from './Layout.styled';

export default function FormSection({ col = 1, children, ...props }) {
  return (
    <StyledFormSection col={col} {...props}>
      {children}
    </StyledFormSection>
  );
}
