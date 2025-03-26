import React, { useState } from 'react';

import { LOCATION_OPTIONS } from '@constant';
import { AuthService } from '@services/authService';

import searchIcon from '@assets/icons/icon_search.svg';

import { InfiniteScrollContainer } from '@components/atoms/Layout';
import { SchoolListItem } from '@components/atoms/ListItem';
import { Modal } from '@components/atoms/Modal';
import { NonData } from '@components/atoms/Text';

import { useLoading } from '@hooks/useLoading';

import { StyledInputWrap, StyledSearchWrapper, StyledSelect } from './Search.styled';

export default function SchoolSearch({ isOpen, isClose, setFieldValue }) {
  const [schoolData, setSchoolData] = useState({ region: '', schoolName: '', pIndex: 1 });
  const [schoolList, setSchoolList] = useState([]); // 학교 리스트

  const [isLoading, loadSchoolList] = useLoading(AuthService.schoolList);

  // 학교 리스트 로드 함수
  const loadMoreSchools = async () => {
    if (isLoading) return; // 이미 로딩 중이거나 더 로드할 항목이 없으면 종료
    const res = await loadSchoolList({ ...schoolData, pIndex: schoolData.pIndex + 1 });

    setSchoolList((prevList) => [...prevList, ...res]);
    setSchoolData((prevData) => ({ ...prevData, pIndex: prevData.pIndex + 1 }));
  };

  const handleClick = async () => {
    // observerRef.current.scrollTop = 0;
    const res = await loadSchoolList({ ...schoolData, pIndex: 1 });
    setSchoolList(res);
  };

  return (
    <Modal title="학교검색" isOpen={isOpen} isClose={isClose}>
      <StyledSearchWrapper>
        <StyledSelect onChange={(e) => setSchoolData({ ...schoolData, region: e.target.value })}>
          {LOCATION_OPTIONS.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <StyledInputWrap>
          <input
            type="text"
            onInput={(e) => setSchoolData({ ...schoolData, schoolName: e.target.value })}
            placeholder="학교명 입력"
          />
          <button type="button" onClick={handleClick}>
            <img src={searchIcon} alt="검색" />
          </button>
        </StyledInputWrap>
      </StyledSearchWrapper>
      <InfiniteScrollContainer loadMore={loadMoreSchools} isLoading={isLoading} height={500}>
        {schoolList.length ? (
          <SchoolListItem list={schoolList} onSelect={setFieldValue} isClose={isClose} />
        ) : (
          <NonData>학교를 검색해주세요.</NonData>
        )}
      </InfiniteScrollContainer>
    </Modal>
  );
}
