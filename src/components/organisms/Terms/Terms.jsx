import React, { useEffect, useState } from 'react';

import { TermsCheckbox } from '@components/atoms/Terms';
import { TermsItem } from '@components/molecules/Terms';

import { navLinks } from '@routes/navLinks';

import { StyledUnOrderList } from './Terms.styled';

export default function Terms({ agreementList, setDisabled }) {
  const [termsList, setTermsList] = useState([]);
  const [allChecked, setAllChecked] = useState(
    termsList.filter((term) => term.requiredFl !== '0').every((term) => term.checked),
  );

  useEffect(() => {
    setTermsList(agreementList);
  }, [agreementList]);

  // 개별 항목 체크박스 변경 핸들러
  const handleIndividualChecked = (index) => {
    const updatedTermsList = termsList.map((term, i) =>
      i === index ? { ...term, checked: !term.checked } : term,
    );
    setTermsList(updatedTermsList);
  };

  // 모든 항목의 체크 상태를 감시하고 "전체동의" 체크박스를 업데이트
  useEffect(() => {
    const allCheckedStatus = termsList
      .filter((term) => term.requiredFl !== '0')
      .every((term) => term.checked);
    setAllChecked(allCheckedStatus);
    setDisabled(!allCheckedStatus);
  }, [termsList, setDisabled]);

  // 전체 체크박스 클릭 시 실행되는 함수
  const handleAllChecked = () => {
    // 필수 항목만 전체 선택 처리
    const newChecked = termsList.map((term) => ({
      ...term,
      checked: term.requiredFl === '0' ? term.checked : !allChecked,
    }));
    setTermsList(newChecked);
    setAllChecked(!allChecked); // 새로운 배열로 값 설정
  };

  return (
    <div style={{ marginTop: '4rem' }}>
      <TermsCheckbox checked={allChecked} onChange={handleAllChecked}>
        약관 전체동의
      </TermsCheckbox>
      <StyledUnOrderList>
        {termsList.map((term, index) => (
          <TermsItem
            key={index}
            checked={term.checked}
            link={navLinks.AGREEMENT_DETAIL(term.agreementCd).path}
            onChange={() => handleIndividualChecked(index)}
          >
            {term.agreementNm}
            <span style={{ fontSize: '1.4rem', color: '#c8c8c8', paddingLeft: '0.5rem' }}>
              {term.requiredFl === '0' ? '(선택)' : '(필수)'}
            </span>
          </TermsItem>
        ))}
      </StyledUnOrderList>
    </div>
  );
}

// to={navLinks.AGREEMENT_DETAIL(agreement.agreementCd).path}
