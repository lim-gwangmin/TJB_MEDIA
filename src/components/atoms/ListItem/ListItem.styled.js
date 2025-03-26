import styled from '@emotion/styled';

export const StyledSchoolListItem = styled('li')`
  position: relative;
  padding: 2rem 10rem 2rem 0;
  align-items: center;
  border-bottom: 1px solid #dadada;
  justify-content: space-between;
`;
export const StyledSchoolListItemTitle = styled('p')`
  color: #111111;
  word-break: break-word;
  fontweight: 500;
`;
export const StyledSchoolListItemAddress = styled('p')`
  color: #707070;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;
export const SchoolListItemButtonStyle = {
  position: 'absolute',
  flex: '0 0 5rem',
  width: '5rem',
  height: '4rem',
  fontSize: '1.4rem',
  right: '0',
  top: '50%',
  transform: 'translateY(-50%)',
};
export const StyledNoneScoolListItem = styled('div')`
  text-align: center;
  padding: 25% 1rem;
  color: #878787;
`;
