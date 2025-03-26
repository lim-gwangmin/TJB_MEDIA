import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useConfirmNavigation() {
  const [isConfirming, setIsConfirming] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isConfirming) {
        event.preventDefault();
        event.returnValue = ''; // 일부 브라우저에서 필요할 수 있음
      }
    };

    const handlePopstate = (event) => {
      if (isConfirming) {
        // 이전 페이지로 돌아가려는 시도 방지
        navigate(1); // 현재 페이지로 강제로 이동
      } else {
        // 확인창을 표시
        const confirmLeave = window.confirm('현재 페이지에서 나가시겠습니까?');
        if (confirmLeave) {
          setIsConfirming(false);
          navigate('/'); // 루트 페이지로 이동
        } else {
          setIsConfirming(true);
          navigate(1); // 현재 페이지로 유지
        }
      }
    };

    window.addEventListener('popstate', handlePopstate);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isConfirming]);

  // 리턴된 값으로 확인창 상태를 제어할 수 있습니다.
  return;
}

export default useConfirmNavigation;
