import React from 'react';

import { INQUIRY_TAB_DATA } from '@constant';
import { inquiryFormSchema } from '@schema';
import { BoardService } from '@services/boardService';

import { Button } from '@components/atoms/Button';
import { FormField } from '@components/atoms/Form';
import { BasicTextInput } from '@components/atoms/Input';
import { ButtonsContainer, FormSection, Main } from '@components/atoms/Layout';
import { TextArea } from '@components/atoms/TextArea';
import { Center } from '@components/molecules/Layout';
import { LinkToTabMenu } from '@components/molecules/Tab';
import { Header } from '@components/organisms/Header';

import useCustomNavigate from '@hooks/useCustomNavigate';

export default function InquiryFormTemplate({}) {
  const { goBack } = useCustomNavigate();
  const { initialValues, schema } = inquiryFormSchema;

  const handleSubmit = (res) => {
    const { resultCode, resultMessage } = res;

    if (resultCode !== 200) {
      alert(resultMessage);
      return;
    }

    alert('등록되었습니다.');
    goBack();
  };

  return (
    <>
      <Header backButton={true} title="문의하기" subMenu={false} />
      <LinkToTabMenu tabs={INQUIRY_TAB_DATA} />
      <Main mode="center">
        <Center maxWidth={500}>
          <FormField
            initialValues={initialValues}
            schema={schema}
            request={BoardService.boardCreate}
            setData={handleSubmit}
            style={formLayout}
          >
            <FormSection>
              <BasicTextInput type="text" name="articleNm" placeholder="제목을 입력해주세요." />
              <TextArea
                name="articleContent"
                placeholder="문의 내용을 입력해 주세요."
                style={{ marginTop: '2rem' }}
              />
            </FormSection>
            <ButtonsContainer>
              <Button type="submit">확인</Button>
            </ButtonsContainer>
          </FormField>
        </Center>
      </Main>
    </>
  );
}

const formLayout = {
  display: 'flex',
  flex: 1,
  flexFlow: 'column',
  justifyContent: 'space-between',
};
