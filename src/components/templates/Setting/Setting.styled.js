import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

const initialStyle = `
padding: 1.35rem 0;
display: flex;
align-items: center;
justify-content: space-between;
gap: 2rem;
border-bottom: 1px solid #eaeaea;
`;
export const SettingListItem = styled('li')`
  ${initialStyle}
`;
export const SettingListLinkItem = styled(NavLink)`
  width: 100%;
  ${initialStyle}
`;
