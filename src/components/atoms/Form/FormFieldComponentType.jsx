import React, { forwardRef } from 'react';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { SubmitLoader } from '@components/atoms/Loader';

// forwardRef로 감싸서 ref 전달
const FormFieldComponentType = forwardRef(
  (
    {
      initialValues = {},
      schema = Yup.object(),
      request = null,
      setData = null,
      setValues = null,
      children,
    },
    ref,
  ) => {
    return (
      <Formik
        innerRef={ref} // 전달받은 ref를 Formik의 innerRef로 연결
        initialValues={initialValues} // 초기값 설정
        enableReinitialize={true}
        validationSchema={schema} // 유효성 검사 스키마 적용
        onSubmit={async (values, { setSubmitting }) => {
          // 폼 제출 시 로직
          if (!request) return;
          try {
            const res = await request(values);
            if (setData) {
              setData(res);
            }
            if (setValues) {
              setValues(values);
            }
          } catch (error) {
            console.error('submit failed:', error);
          } finally {
            setSubmitting(false); // 반드시 요청 후 상태 해제
          }
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Form>{children}</Form>
            {isSubmitting && <SubmitLoader />}
          </>
        )}
      </Formik>
    );
  },
);

// forwardRef로 컴포넌트를 감싸면서 export
export default FormFieldComponentType;
