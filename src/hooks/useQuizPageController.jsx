import { useParams } from 'react-router-dom';

import { navLinks } from '@routes/navLinks';

import useCustomNavigate from './useCustomNavigate';

function useQuizPageController(lastPage, resetHandler) {
  const { goToPage } = useCustomNavigate();
  const { page } = useParams();
  const currentPage = Number(page);
  const submitPage = currentPage === lastPage;
  // 다음 퀴즈 이동
  const onHandleNextPage = () => {
    resetHandler();
    goToPage(navLinks.QUIZ_GAME(Number(page) + 1).path);
  };

  return { onHandleNextPage, submitPage };
}

export default useQuizPageController;
