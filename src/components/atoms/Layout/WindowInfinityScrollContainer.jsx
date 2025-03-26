import React, { useEffect } from 'react';

import { SubmitLoader } from '@components/atoms/Loader';

import { StyledWindowInfiniteScrollContainer } from './Layout.styled';

export default function WindowInfinityScrollContainer({ children, loadMore, isLoading, ...props }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 스크롤이 끝에 도달하면 loadMore 호출
      if (scrollTop + windowHeight >= documentHeight - 50) {
        if (!isLoading) {
          loadMore();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, loadMore]);

  return (
    <>
      <StyledWindowInfiniteScrollContainer {...props}>
        {children}
      </StyledWindowInfiniteScrollContainer>
      {isLoading && <SubmitLoader />}
    </>
  );
}
