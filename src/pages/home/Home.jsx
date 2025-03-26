import React, { useCallback, useEffect, useState } from 'react';

import { AuthService } from '@services/authService';

import { SubmitLoader } from '@components/atoms/Loader';
import { HomeTemplate } from '@components/templates/Home';

import { useLoading } from '@hooks/useLoading';

export default function Home() {
  const [userDataLoading, fetchUserData] = useLoading(AuthService.userDatas); // 유저 데이터 조회 API
  const [userData, setUserData] = useState({});

  // 유저데이터 조회를 위한 훅
  useEffect(() => {
    getUserFetchData();
    handleAttendance();
  }, []);

  // 유저 데이터 조회
  const getUserFetchData = useCallback(async () => {
    if (userDataLoading) return;

    try {
      // 유저 데이터 가져오기
      const responseUserData = await fetchUserData();
      const userDataResult = responseUserData.result;
      setUserData(userDataResult);
    } catch (error) {
      console.error(error);
    }
  }, [userData]);

  // 출석 처리
  const handleAttendance = async () => {
    try {
      const response = await AuthService.attendance();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <HomeTemplate userData={userData.data} />
      {userDataLoading && <SubmitLoader />}
    </>
  );
}
