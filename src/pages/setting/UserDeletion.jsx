import React from 'react';

import { AuthService } from '@services/authService';

import { SubmitLoader } from '@components/atoms/Loader';
import { UserDeletionTemplate } from '@components/templates/Setting';

import { useLoading } from '@hooks/useLoading';

import { navLinks } from '@routes/navLinks';
import { LOGIN } from '@routes/url';

import { removeToken } from '@utils/tokenManager';

export default function UserDeletion() {
  const [isUserDropLoading, setFetchUserDrop] = useLoading(AuthService.userDrop);

  const handleUserDrop = async () => {
    if (isUserDropLoading) return;

    try {
      const response = await setFetchUserDrop();
      const { resultCode } = response;

      if (resultCode === 200) {
        alert('회원탈퇴 되었습니다.');
        removeToken();
        window.location = navLinks[LOGIN].path;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <UserDeletionTemplate onClick={handleUserDrop} />
      {isUserDropLoading && <SubmitLoader />}
    </>
  );
}
