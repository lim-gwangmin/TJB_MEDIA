import React from 'react';
import { useLocation } from 'react-router-dom';

import { ChangePasswordTemplate } from '@components/templates/Login';

import Error from '@pages/error/Error';

export default function ChangePassword() {
  const { state } = useLocation();

  // return <ChangePasswordTemplate userData={state} />;
  return <>{state ? <ChangePasswordTemplate userCd={state.userCd} /> : <Error />}</>;
}
