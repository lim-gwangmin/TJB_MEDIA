import React from 'react';

import styled from '@emotion/styled';

import { Text } from '@components/atoms/Text';

export default function UserCard({ userName, schoolName, grade, image }) {
  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Thumbnail src={image} alt="User Thumbnail" />
      <div>
        <Text size={17} weight="bold">
          {userName}
        </Text>
        <Text size={12} color="#666">
          {schoolName} {grade}학년
        </Text>
      </div>
    </div>
  );
}

const Thumbnail = styled('img')`
  width: ${({ size }) => size || '6rem'};
  height: ${({ size }) => size || '6rem'};
  border-radius: 100%;
  background-color: #ffcd1b;
`;
