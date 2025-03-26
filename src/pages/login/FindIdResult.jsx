import React from 'react';
import { useLocation } from 'react-router-dom';

import { FindIdResultTemplate } from '@components/templates/Login';

import Error from '@pages/error/Error';

export default function FindIdResult() {
  const { state } = useLocation();

  return <>{state ? <FindIdResultTemplate userId={state} /> : <Error />}</>;
}
