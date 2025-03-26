import styled from '@emotion/styled';

export const StyledOXQuizButton = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 3.7rem;
  border-radius: 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ isSelected, answerType }) =>
    isSelected ? (answerType ? '#5486F9' : '#FF0000') : '#C8C8C8'};
  background-color: ${({ isSelected, answerType, disabled }) =>
    disabled
      ? isSelected
        ? answerType
          ? '#EFF6FF'
          : '#FFE6E6'
        : '#E1E1E1'
      : isSelected
        ? answerType
          ? '#EFF6FF'
          : '#FFE6E6'
        : '#fff'};
`;

// const baseOXQuizBtnInput = `
// position: absolute;
// clip: rect(0 0 0 0);
// clip-path: inset(50%);
// width: 1px;
// height: 1px;
// overflow: hidden;
// `;

// export const StyledOXQuizTrueInput = styled('input')`
//   ${baseOXQuizBtnInput}
//   &:checked + label {
//     border-width: 2px;
//     border-color: #5486f9;
//     background-color: #eff6ff;
//   }
// `;

// export const StyledOXQuizFalseInput = styled('input')`
//   ${baseOXQuizBtnInput}
//   &:checked + label {
//     border-width: 2px;
//     border-color: #ff0000;
//     background-color: #ffe6e6;
//   }
// `;

// export const StyledOXQuizBtnLabel = styled('label')`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 3.5rem 3.7rem;
//   border: 1px solid #c8c8c8;
//   border-radius: 1rem;
// `;
