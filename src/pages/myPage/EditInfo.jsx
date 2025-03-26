import React, { useCallback, useEffect, useState } from 'react';

import { AuthService } from '@services/authService';

import { SubmitLoader } from '@components/atoms/Loader';
import { EditInfoTemplate } from '@components/templates/MyPage';
import { UserInfoTemplate } from '@components/templates/Sign';

import { useLoading } from '@hooks/useLoading';

export default function EditInfo() {
  const [userDataLoading, fetchUserData] = useLoading(AuthService.userInfo); // 유저 데이터 조회 API
  const [userData, setUserData] = useState({});

  // 유저데이터 조회를 위한 훅
  useEffect(() => {
    getUserFetchData();
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

  return (
    <>
      <EditInfoTemplate userData={userData.data} />
      {userDataLoading && <SubmitLoader />}
    </>
  );
}
