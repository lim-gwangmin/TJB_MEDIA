import styled from '@emotion/styled';

// 토글 스위치 컨테이너
export const ToggleContainer = styled('div')`
  display: inline-block;
  position: relative;
`;

// 숨겨진 체크박스 스타일
export const HiddenCheckbox = styled('input')`
  opacity: 0;
  width: 0;
  height: 0;
`;

// 스위치 배경 스타일
export const SwitchLabel = styled('label')`
  position: relative;
  display: inline-block;
  width: 3.5rem;
  height: 1.5rem;
  background-color: ${(props) => (props.isActive ? '#FF881B' : '#ccc')};
  border-radius: 50px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: ${(props) => (props.isActive ? '2.3rem' : '0.3rem')};
    top: 0.2rem;
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 50%;
    transition: left 0.3s;
  }
`;
