import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import { useQuizContext } from '@hooks/useQuizContext';

import { VideoPlayerLoader } from '../Loader';
import { StyledPlayerContainer } from './YouTubePlayer.styled';

export default function YouTubePlayer({ videoId, ...props }) {
  const { handleEndedYouTube } = useQuizContext();
  const [loading, setLoading] = useState(true);
  // 영상 준비되었을때 호출할 함수
  const onReady = () => {
    setLoading(false);
  };

  return (
    <StyledPlayerContainer {...props}>
      {loading && <VideoPlayerLoader />}
      <YouTube
        videoId={videoId}
        opts={{
          height: '300',
          width: '100%',
          playerVars: {
            autoplay: 1, // 비디오 자동 재생 설정
            // mute: 1, // 음소거 (브라우저 정책으로 인해 자동재생 시 음소거 필요)
            controls: 1, // 컨트롤 바를 표시
            showinfo: 0, // 비디오 정보 표시를 비활성화
            modestbranding: 1, // YouTube 브랜드 로고 크기
          },
        }}
        onReady={onReady}
        onStateChange={handleEndedYouTube}
      />
    </StyledPlayerContainer>
  );
}
