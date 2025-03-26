import React, { useState } from 'react';

import { userInfoSchema } from '@schema';
import { AuthService } from '@services/authService';
import { Form, Formik } from 'formik';

import { Button } from '@components/atoms/Button';
import { BasicTextInput } from '@components/atoms/Input';
import { ButtonsContainer, FormSection } from '@components/atoms/Layout';
import { SubmitLoader } from '@components/atoms/Loader';
import { MobileCarrier } from '@components/atoms/SelectBox';
import { SchoolSearch } from '@components/molecules/Search';
import { GeneralTab } from '@components/molecules/Tab';

import { useLoading } from '@hooks/useLoading';

import { StyledInsertUserInfo } from './Sign.styled';

const InsertUserInfo = ({ initialValues, request, setFetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setCheckId] = useLoading(AuthService.checkDuplicateId);

  // 아이디 중복 체크
  const handleCheckId = async (userId, setFieldValue) => {
    if (isLoading) return;

    try {
      await userInfoSchema.schema.validateAt('userId', { userId });
      const res = await setCheckId(userId);

      const { result, resultMessage } = res;

      if (result.duplicateNo !== 0) {
        setFieldValue('userId', '');
      }

      alert(resultMessage);
    } catch (error) {
      console.error(error.errors[0]);
    }
  };

  return (
    <StyledInsertUserInfo>
      <Formik
        initialValues={initialValues}
        validationSchema={userInfoSchema.schema}
        onSubmit={(values, { setSubmitting }) => {
          if (!request) return;
          request(values)
            .then((res) => {
              if (setFetch) {
                setFetch(res);
              }
            })
            .catch((error) => {
              console.error('submit failed:', error);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <FormSection col={2}>
              <BasicTextInput name="userId" />
              <Button theme="revers" onClick={() => handleCheckId(values.userId, setFieldValue)}>
                중복확인
              </Button>
            </FormSection>
            <FormSection>
              <BasicTextInput type="password" name="userPw" placeholder="비밀번호" />
              <BasicTextInput type="password" name="userPwConfirm" placeholder="비밀번호 확인" />
              <span style={{ fontSize: '1.4rem', color: '#878787' }}>
                영문, 숫자, 특수기호를 포함한 8~16자리
              </span>
            </FormSection>
            <FormSection>
              <BasicTextInput type="text" name="userNm" placeholder="이름" readonly={true} />
              <MobileCarrier telName="mobileCarrier" phoneName="userPhoneNo" readonly={true} />
              <BasicTextInput type="text" name="userEmail" placeholder="이메일" />
            </FormSection>
            <FormSection style={{ borderTop: '1px solid #EAEAEA', paddingTop: '2rem' }}>
              <GeneralTab setIsOpen={setIsOpen} setFieldValue={setFieldValue} />
            </FormSection>
            <ButtonsContainer>
              <Button type="submit">가입하기</Button>
              {/* <Button onClick={() => validateUserInfo(values)}>가입하기</Button> */}
            </ButtonsContainer>
            <SchoolSearch isOpen={isOpen} isClose={setIsOpen} setFieldValue={setFieldValue} />
            {isSubmitting || (isLoading && <SubmitLoader />)}
          </Form>
        )}
      </Formik>
    </StyledInsertUserInfo>
  );
};

export default InsertUserInfo;
