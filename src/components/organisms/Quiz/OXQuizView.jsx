import React from 'react';

import { YouTubePlayer } from '@components/atoms/Quiz';
import { OXQuizButtons } from '@components/molecules/Quiz';

import { useQuizContext } from '@hooks/useQuizContext';
import useQuizPageController from '@hooks/useQuizPageController';

export default function OXQuizView({ newsLink }) {
  const { endedYouTube } = useQuizContext();

  return (
    <>
      {/* 유튜브 플레이어  */}
      <YouTubePlayer videoId={newsLink} />
      {/* OX 퀴즈 */}
      {endedYouTube && (
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
          <OXQuizButtons />
        </div>
      )}
    </>
  );
}
