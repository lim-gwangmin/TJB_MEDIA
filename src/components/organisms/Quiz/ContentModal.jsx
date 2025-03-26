import React from 'react';

import { Modal } from '@components/atoms/Modal';

import { useQuizContext } from '@hooks/useQuizContext';

export default function ContentModal() {
  const { isCaptionModal, handleCaptionModal, thisQuizData } = useQuizContext();

  return (
    <Modal isOpen={isCaptionModal} isClose={handleCaptionModal}>
      {thisQuizData.newsContent}
    </Modal>
  );
}
