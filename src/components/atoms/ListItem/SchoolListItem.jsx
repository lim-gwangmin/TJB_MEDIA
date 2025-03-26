import React from 'react';

import { Button } from '@components/atoms/Button';

import {
  SchoolListItemButtonStyle,
  StyledSchoolListItem,
  StyledSchoolListItemAddress,
  StyledSchoolListItemTitle,
} from './ListItem.styled';

export default function SchoolList({ list = [], onSelect = null, isClose }) {
  const onHandleSelectSchool = (school) => {
    onSelect('schoolNm', school.SCHUL_NM);
    onSelect('schoolCd', school.SD_SCHUL_CODE);
  };
  return list.map((school, index) => (
    <StyledSchoolListItem key={index}>
      <StyledSchoolListItemTitle>{school.SCHUL_NM}</StyledSchoolListItemTitle>
      <StyledSchoolListItemAddress>{school.ORG_RDNMA}</StyledSchoolListItemAddress>
      <Button
        type="button"
        theme="revers"
        style={SchoolListItemButtonStyle}
        onClick={() => {
          isClose(false);
          onHandleSelectSchool(school);
        }}
      >
        선택
      </Button>
    </StyledSchoolListItem>
  ));
}
