import React, { useRef } from 'react';

import { phoneVerificationSchema } from '@schema';
import { AuthService } from '@services/authService';

import { Button } from '@components/atoms/Button';
import { FormFieldComponentType } from '@components/atoms/Form';
import { BasicTextInput } from '@components/atoms/Input';
import { FormSection } from '@components/atoms/Layout';
import { MobileCarrier } from '@components/atoms/SelectBox';

import AuthCodeForm from './AuthCodeForm';

export default function PhoneAuthentication({
  authType = 'signup',
  setData,
  nextHandler,
  isRequestSent,
}) {
  return (
    <div>
      <FormFieldComponentType
        initialValues={{ ...phoneVerificationSchema.initialValues, type: authType }}
        schema={phoneVerificationSchema.schema}
        request={AuthService.requestSMSCode}
        setData={setData}
      >
        <FormSection style={{ marginTop: '4rem' }}>
          <BasicTextInput type="hidden" name="type" value={authType} />
          <BasicTextInput name="userNm" placeholder="이름" />
          <MobileCarrier telName="mobileCarrier" phoneName="phone" />
        </FormSection>
        <Button type="submit" theme="revers" height={54} style={{ marginBottom: '1rem' }}>
          {!isRequestSent ? '인증번호 요청' : '인증번호 재요청'}
        </Button>
        {isRequestSent && (
          <AuthCodeForm serviceAPI={AuthService.verifyMembershipWithId} nextHandler={nextHandler} />
        )}
      </FormFieldComponentType>
    </div>
  );
}
