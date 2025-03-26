import React from 'react';

import arrow_regular from '@assets/icons/icon_arrow_right_regular.svg';
import arrow_small from '@assets/icons/icon_arrow_right_small.svg';

import { StyledSpaceBetweenTitle, StyledSpaceBetweenTitleNav } from './Title.styled';

function TitleWrapper({ to, children }) {
  return (
    <>
      {to ? (
        <StyledSpaceBetweenTitleNav to={to}>{children}</StyledSpaceBetweenTitleNav>
      ) : (
        <StyledSpaceBetweenTitle>{children}</StyledSpaceBetweenTitle>
      )}
    </>
  );
}

export default function SpaceBetweenTitle({ to = '', icon = true, iconSize = 'small', children }) {
  return (
    <div>
      <TitleWrapper to={to}>
        <div>{children}</div>
        {icon && (
          <img src={iconSize === 'small' ? arrow_small : arrow_regular} alt="화살표 아이콘" />
        )}
      </TitleWrapper>
    </div>
  );
}
