// import React, { useEffect, useState } from 'react';
// import { phoneVerificationSchema } from '@schema';
// import { useFormik } from 'formik';
// import { Button } from '@components/atoms/Button';
// import { ButtonsContainer } from '@components/atoms/Layout';
// import { ButtomPositionModal } from '@components/atoms/Modal';
// import { Title } from '@components/atoms/Title';
// import { PhoneAuthentication } from '@components/molecules/Sign';
// export default function MobileAuthModal({ isOpen = false, isClose, setMobileAuthValues }) {
//   const [isRequestSent, setIsRequestSent] = useState(false);
//   const [MobileChangeData, setMobileChangeData] = useState({});
//   const [isDisabled, setIsDisabled] = useState(true);
//   // 인증번호 발송
//   const handleCreateVerificationCode = (res) => {
//     const { result, resultMessage } = res;
//     // 가입한 유저정보가 있다면 리턴
//     if (result.userCheck === 1) {
//       alert('이미 등록된 휴대폰 번호입니다.');
//       return;
//     }
//     alert('인증번호가 전송 되었습니다.');
//     setIsRequestSent(true);
//   };
//   // 인증번호 인증
//   const handleValidateVerificationCode = ({ request, result, resultCode, resultMessage }) => {
//     console.log(resetFormHandler, 'resetFormHandler');
//     if (resultCode !== 200) return alert('오류가 발생했습니다. 잠시후에 다시 시도해주세요.');
//     // 유효하지 않는 인증코드 일때
//     if (result?.data === undefined) {
//       alert(resultMessage);
//       return;
//     }
//     // 유저 정보가 있을때,
//     if (result.data === null) {
//       alert('인증되었습니다.');
//       setMobileChangeData({ ...request, userPhoneNo: request.phone });
//       setIsDisabled(false);
//     }
//   };
//   const handleChangeMobileNumber = () => {
//     setMobileAuthValues(MobileChangeData);
//     isClose();
//   };
//   return (
//     <ButtomPositionModal isOpen={isOpen}>
//       <Title size={20}>휴대폰 인증 </Title>
//       <PhoneAuthentication
//         authType="signup"
//         setData={handleCreateVerificationCode}
//         nextHandler={handleValidateVerificationCode}
//         isRequestSent={isRequestSent}
//       />
//       <ButtonsContainer style={{ paddingTop: '2rem', borderTop: '1px dashed #c8c8c8c8' }}>
//         <Button onClick={isClose} theme="sub" style={{ flex: 1 }}>
//           취소
//         </Button>
//         <Button disabled={isDisabled} onClick={handleChangeMobileNumber} style={{ flex: 1 }}>
//           변경
//         </Button>
//       </ButtonsContainer>
//     </ButtomPositionModal>
//   );
// }
import React, { useEffect, useState } from 'react';

import { phoneVerificationSchema } from '@schema';
import { AuthService } from '@services/authService';
import { useFormik } from 'formik';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Button } from '@components/atoms/Button';
import { BasicTextInput } from '@components/atoms/Input';
import { ButtonsContainer } from '@components/atoms/Layout';
import { FormSection } from '@components/atoms/Layout';
import { SubmitLoader } from '@components/atoms/Loader';
import { ButtomPositionModal } from '@components/atoms/Modal';
import { MobileCarrier } from '@components/atoms/SelectBox';
import { Title } from '@components/atoms/Title';
import { PhoneAuthentication } from '@components/molecules/Sign';
import { AuthCodeForm } from '@components/molecules/Sign';

export default function MobileAuthModal({ isOpen = false, isClose, setMobileAuthValues }) {
  const [isRequestSent, setIsRequestSent] = useState(false);
  const [MobileChangeData, setMobileChangeData] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  // 인증번호 발송
  const handleCreateVerificationCode = (res) => {
    const { result, resultMessage } = res;
    // 가입한 유저정보가 있다면 리턴
    if (result.userCheck === 1) {
      alert('이미 등록된 휴대폰 번호입니다.');
      return;
    }

    alert('인증번호가 전송 되었습니다.');
    setIsRequestSent(true);
  };

  // 인증번호 인증
  const handleValidateVerificationCode = ({ request, result, resultCode, resultMessage }) => {
    if (resultCode !== 200) return alert('오류가 발생했습니다. 잠시후에 다시 시도해주세요.');

    // 유저 정보가 있을때,
    if (result.data === null) {
      alert('인증되었습니다.');
      setMobileChangeData({ ...request, userPhoneNo: request.phone });
      setIsDisabled(false);
      return;
    }

    // 유효하지 않는 인증코드 일때
    alert(resultMessage);

    //  if (result?.data === undefined) {
    //    alert(resultMessage);
    //    return;
    //  }
  };

  const handleChangeMobileNumber = () => {
    setMobileAuthValues(MobileChangeData);
    isClose();
  };

  return (
    <ButtomPositionModal isOpen={isOpen}>
      <Title size={20}>휴대폰 인증 </Title>
      <Formik
        initialValues={{ ...phoneVerificationSchema.initialValues, type: 'signup' }} // 초기값 설정
        enableReinitialize={true}
        validationSchema={phoneVerificationSchema.schema} // 유효성 검사 스키마 적용
        onSubmit={async (values, { setSubmitting }) => {
          // 폼 제출 시 로직
          try {
            const res = await AuthService.requestSMSCode(values);
            handleCreateVerificationCode(res);
          } catch (error) {
            console.error('submit failed:', error);
          } finally {
            setSubmitting(false); // 반드시 요청 후 상태 해제
          }
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <>
            <Form>
              <FormSection style={{ marginTop: '4rem' }}>
                <BasicTextInput type="hidden" name="type" />
                <BasicTextInput name="userNm" placeholder="이름" />
                <MobileCarrier telName="mobileCarrier" phoneName="phone" />
              </FormSection>
              <Button type="submit" theme="revers" height={54} style={{ marginBottom: '1rem' }}>
                {!isRequestSent ? '인증번호 요청' : '인증번호 재요청'}
              </Button>
              {isRequestSent && (
                <AuthCodeForm
                  serviceAPI={AuthService.verifyMembershipWithId}
                  nextHandler={handleValidateVerificationCode}
                />
              )}
              <ButtonsContainer style={{ paddingTop: '2rem', borderTop: '1px dashed #c8c8c8c8' }}>
                <Button
                  onClick={() => {
                    isClose();
                    resetForm();
                  }}
                  theme="sub"
                  style={{ flex: 1 }}
                >
                  취소
                </Button>
                <Button
                  disabled={isDisabled}
                  onClick={() => {
                    handleChangeMobileNumber();
                    resetForm();
                  }}
                  style={{ flex: 1 }}
                >
                  변경
                </Button>
              </ButtonsContainer>
            </Form>
            {isSubmitting && <SubmitLoader />}
          </>
        )}
      </Formik>
    </ButtomPositionModal>
  );
}
