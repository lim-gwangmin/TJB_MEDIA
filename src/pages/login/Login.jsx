import React, { useEffect } from 'react';

import { loginSchema } from '@schema';
import { AuthService } from '@services/authService';

import { LoginTemPlate } from '@components/templates/Login';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { getToken } from '@utils/tokenManager';

export default function Login() {
  const { jwtToken, refreshToken } = getToken();
  const { goToHome } = useCustomNavigate();
  const { initialValues, schema } = loginSchema;

  // 토큰이 스토리지에 있을 경우 홈으로 이동
  useEffect(() => {
    if (jwtToken || refreshToken) {
      goToHome();
    }
  }, [jwtToken, refreshToken]);

  // 로그인 후 처리
  const onLoginSuccess = (res) => {
    const { resultCode } = res;

    if (resultCode !== 200) {
      alert('계정이 존재하지 않습니다. 다시 시도해주세요.');
      return;
    }
    // 로그인 성공 시 홈으로 이동
    goToHome();
  };

  return (
    <LoginTemPlate
      initialValues={initialValues}
      schema={schema}
      request={AuthService.login}
      setData={onLoginSuccess}
    />
  );
}
