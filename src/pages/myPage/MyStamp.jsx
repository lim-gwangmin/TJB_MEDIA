import React, { useEffect, useState } from 'react';

import { Stamp } from '@services/stampService';

import { SubmitLoader } from '@components/atoms/Loader';
import { StampTemplate } from '@components/templates/MyPage';

import { useLoading } from '@hooks/useLoading';

export default function MyStamp({}) {
  const [stampData, setStampData] = useState([]);
  const [isLoading, setFetchStampList] = useLoading(Stamp.userStamp);

  useEffect(() => {
    getFetchStampData();
  }, []);

  const getFetchStampData = async () => {
    if (isLoading) return;

    // 사용자 스탬프 목록 조회
    const response = await setFetchStampList();

    setStampData(response);
  };

  return (
    <>
      <StampTemplate stampData={stampData} />
      {isLoading && <SubmitLoader />}
    </>
  );
}
