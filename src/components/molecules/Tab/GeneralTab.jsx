import React, { useEffect, useState } from 'react';

import { CLASS_OPTIONS, GRADE_OPTIONS, STUDENT_TYPES } from '@constant';

import { Button } from '@components/atoms/Button';
import { BasicTextInput } from '@components/atoms/Input';
import { FormSection } from '@components/atoms/Layout';
import { BasicSelectBox } from '@components/atoms/SelectBox';
import { GeneralOption } from '@components/atoms/Tab';

import { StyledGeneralTab } from './Tab.styled';

export default function GeneralTab({
  setIsOpen,
  schoolSelect = {},
  userAgeCd = '',
  setFieldValue,
}) {
  const ageCd = userAgeCd ? userAgeCd : 'm';
  const [selectedOption, setSelectedOption] = useState(ageCd);
  // console.log(selectedOption, 'selectedOption');

  useEffect(() => {
    setSelectedOption(ageCd);
  }, [userAgeCd]);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setFieldValue('userAgeCd', value);
    setFieldValue('schoolCd', '');
    setFieldValue('schoolNm', '');
    setFieldValue('grade', '');
    setFieldValue('classNo', '');

    // if (value === 'n') {
    //   setFieldValue('schoolCd', '');
    //   setFieldValue('schoolNm', '');
    //   setFieldValue('grade', '');
    //   setFieldValue('classNo', '');
    // }
  };
  return (
    <div>
      <StyledGeneralTab>
        {STUDENT_TYPES.map((option) => {
          return (
            <GeneralOption
              key={option.key}
              name="userAgeCd"
              value={option.key}
              checked={selectedOption === option.key}
              onChange={() => handleOptionChange(option.key)}
            >
              {option.label}
            </GeneralOption>
          );
        })}
      </StyledGeneralTab>
      {selectedOption !== 'n' && (
        <>
          <FormSection col={2}>
            <BasicTextInput type="hidden" name="schoolCd" />
            <BasicTextInput name="schoolNm" readonly={true} />
            <Button theme="revers" onClick={() => setIsOpen(true)}>
              학교검색
            </Button>
          </FormSection>
          <FormSection col={2}>
            <BasicSelectBox name="grade" options={GRADE_OPTIONS} style={{ flex: 1 }} />
            <BasicSelectBox name="classNo" options={CLASS_OPTIONS} style={{ flex: 1 }} />
          </FormSection>
        </>
      )}
    </div>
  );
}
