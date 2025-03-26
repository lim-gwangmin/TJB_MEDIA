import React, { useEffect, useRef } from 'react';

import { SubmitLoader } from '@components/atoms/Loader';

import { StyledInfiniteScrollContainer } from './Layout.styled';

export default function InfiniteScrollContainer({
  children,
  loadMore,
  height = null,
  isLoading,
  ...props
}) {
  const observerRef = useRef(null);
  // 스크롤이 최하단에 도달했는지 감지하는 useEffect
  useEffect(() => {
    const handleScroll = (e) => {
      const { scrollHeight, scrollTop } = e.target;
      const container = observerRef.current;

      if (scrollHeight - scrollTop - 50 <= container.offsetHeight) {
        loadMore();
      }
    };
    const container = observerRef.current;

    // Scroll 이벤트가 이미 할당되어 있는지 확인
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isLoading]);

  return (
    <>
      <StyledInfiniteScrollContainer ref={observerRef} height={height} {...props}>
        {children}
      </StyledInfiniteScrollContainer>
      {isLoading && <SubmitLoader />}
    </>
  );
}
