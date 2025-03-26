import React from 'react';

import { phoneVerificationWithUserIdSchema } from '@schema';
import { AuthService } from '@services/authService';

import { Button } from '@components/atoms/Button';
import { FormFieldComponentType } from '@components/atoms/Form';
import { BasicTextInput } from '@components/atoms/Input';
import { ButtonsContainer, FormSection } from '@components/atoms/Layout';
import { Text } from '@components/atoms/Text';
import { MobileCarrierSecondary } from '@components/molecules/MobileCarrier';

import AuthCodeForm from './AuthCodeForm';

export default function IDPhoneAuthentication({ setData, nextHandler, isRequestSent }) {
  return (
    <div>
      <FormFieldComponentType
        initialValues={phoneVerificationWithUserIdSchema.findValues}
        schema={phoneVerificationWithUserIdSchema.schema}
        request={AuthService.requestSMSCode}
        setData={setData}
      >
        <FormSection>
          <Text size={18}>비밀번호 찾기</Text>
          <BasicTextInput title="아이디" name="userId" placeholder="아이디" />
        </FormSection>
        <FormSection>
          <BasicTextInput title="이름" name="userNm" placeholder="이름" />
        </FormSection>
        <FormSection>
          <MobileCarrierSecondary />
        </FormSection>
        <ButtonsContainer>
          <Button type="submit" theme="revers" height={54} style={{ marginBottom: '1rem' }}>
            {!isRequestSent ? '인증번호 요청' : '인증번호 재요청'}
          </Button>
        </ButtonsContainer>
        {isRequestSent && (
          <AuthCodeForm
            serviceAPI={AuthService.verifyMembershipWithoutId}
            nextHandler={nextHandler}
          />
        )}
      </FormFieldComponentType>
    </div>
  );
}
