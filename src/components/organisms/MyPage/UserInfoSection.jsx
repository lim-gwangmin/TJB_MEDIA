import React, { useState } from 'react';

import { userEditInfoSchema } from '@schema';
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

import MobileAuthModal from './MobileAuthModal';

export default function UserInfoSection({ userData }) {
  const { changeUserDatas } = AuthService;
  const { initialValues, schema } = userEditInfoSchema;
  const [isSchoolSearchOpen, setIsSchoolSearchOpen] = useState(false);
  const [isMobileAuthModalOpen, setisMobileAuthModalOpen] = useState(false);
  const [isLoading, setFetchChangeDatas] = useLoading(changeUserDatas);
  const [mobileAuthValues, setMobileAuthValues] = useState({});

  // 회원정보 변경 함수
  const handleChangeUserDatas = async (req) => {
    if (isLoading) return;

    try {
      const response = await setFetchChangeDatas(req);
      const { resultCode, resultMessage } = response;
      if (resultCode !== 200) {
        alert(resultMessage);
        return;
      }

      alert('정보가 변경되었습니다');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ ...initialValues, ...userData, ...mobileAuthValues }}
        enableReinitialize={true}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await handleChangeUserDatas(values);
          } catch (error) {
            console.error('submit failed:', error);
          } finally {
            setSubmitting(false); // 반드시 요청 후 상태 해제
          }
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <FormSection onClick={() => console.log(values, 'values')}>
              <BasicTextInput name="userId" readonly={true} />
            </FormSection>
            <FormSection>
              <BasicTextInput type="password" name="userPw" placeholder="비밀번호 변경" />
              <BasicTextInput type="password" name="userPwConfirm" placeholder="비밀번호 확인" />
              <span style={{ fontSize: '1.4rem', color: '#878787' }}>
                영문, 숫자, 특수기호를 포함한 8~16자리
              </span>
            </FormSection>
            <FormSection>
              <BasicTextInput type="text" name="userNm" placeholder="이름" readonly={true} />
            </FormSection>
            <FormSection col={2}>
              <BasicTextInput
                type="text"
                name="userPhoneNo"
                placeholder="전화번호"
                readonly={true}
              />
              <Button onClick={() => setisMobileAuthModalOpen(true)}>전화번호 변경</Button>
            </FormSection>
            {/* <MobileCarrier telName="mobileCarrier" phoneName="userPhoneNo" readonly={true} /> */}
            <FormSection>
              <BasicTextInput type="text" name="userEmail" placeholder="이메일" />
            </FormSection>
            <FormSection style={{ borderTop: '1px solid #EAEAEA', paddingTop: '2rem' }}>
              <GeneralTab
                setIsOpen={setIsSchoolSearchOpen}
                userAgeCd={values.userAgeCd}
                setFieldValue={setFieldValue}
              />
            </FormSection>
            <ButtonsContainer>
              <Button type="submit">회원정보 수정</Button>
            </ButtonsContainer>
            <SchoolSearch
              isOpen={isSchoolSearchOpen}
              isClose={setIsSchoolSearchOpen}
              setFieldValue={setFieldValue}
            />

            {(isSubmitting || isLoading) && <SubmitLoader />}
          </Form>
        )}
      </Formik>
      <MobileAuthModal
        isOpen={isMobileAuthModalOpen}
        isClose={() => setisMobileAuthModalOpen(false)}
        setMobileAuthValues={setMobileAuthValues}
      />
    </>
  );
}
